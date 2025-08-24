#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const args = process.argv.slice(2);

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--file') result.file = argv[++i];
    else if (a === '--api') result.api = argv[++i];
    else if (a === '--token') result.token = argv[++i];
    else if (a === '--password') result.password = argv[++i];
  }
  return result;
}

async function readCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return new Promise((resolve, reject) => {
    parse(
      content,
      { columns: true, skip_empty_lines: true, trim: true },
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

async function createUser(apiBase, token, row, defaultPassword) {
  // CSV headers: email,first_name,last_name,phone,password,business_name,address,city,postal_code
  const payload = {
    email: row.email,
    password: row.password || defaultPassword || generatePassword(),
    first_name: row.first_name || '',
    last_name: row.last_name || '',
    phone: row.phone || '',
    business_name: row.business_name || '',
    address: row.address || '',
    city: row.city || '',
    postal_code: row.postal_code || '',
  };

  const res = await fetch(`${apiBase}/auth/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (_) {
    data = text;
  }

  if (!res.ok) {
    throw new Error(`Failed (${res.status}) ${res.statusText}: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
  }
  return data;
}

function generatePassword() {
  const base = Math.random().toString(36).slice(-8);
  return `${base}A1!`;
}

async function run() {
  const { file, api, token, password } = parseArgs(args);
  if (!file || !api) {
    console.error('Usage: npm run import:users -- --file users.csv --api https://... [--token <admin_jwt>] [--password <default>]');
    process.exit(1);
  }

  const csvPath = path.isAbsolute(file) ? file : path.join(process.cwd(), file);
  if (!fs.existsSync(csvPath)) {
    console.error(`CSV not found: ${csvPath}`);
    process.exit(1);
  }

  const rows = await readCsv(csvPath);
  console.log(`Importing ${rows.length} users to ${api} ...`);

  let success = 0;
  let failed = 0;

  for (const row of rows) {
    const email = row.email;
    process.stdout.write(`- ${email} ... `);
    try {
      await createUser(api, token, row, password);
      success++;
      console.log('OK');
    } catch (e) {
      failed++;
      console.log(`ERROR: ${e.message}`);
    }
  }

  console.log(`Done. Success: ${success}, Failed: ${failed}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
