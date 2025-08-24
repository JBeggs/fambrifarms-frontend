"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-green-700">
          <Image
            src="https://fambrifarms.co.za/wp-content/uploads/2024/09/fambriTrans.png"
            alt="Fambri Farms Logo"
            width={120}
            height={30}
            priority
          />
          <span className="sr-only">Fambri Farms</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/onepager" className="text-gray-700 hover:text-green-700 font-medium">Overview</Link>
          <Link href="/roles" className="text-gray-700 hover:text-green-700 font-medium">Roles</Link>
          <Link href="/plan" className="text-gray-700 hover:text-green-700 font-medium">Plan</Link>
          <Link href="/glossary" className="text-gray-700 hover:text-green-700 font-medium">Glossary</Link>
          <Link href="/reports" className="text-gray-700 hover:text-green-700 font-medium">Reports</Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            <Link href="/onepager" className="py-2 text-gray-700 hover:text-green-700">Overview</Link>
            <Link href="/roles" className="py-2 text-gray-700 hover:text-green-700">Roles</Link>
            <Link href="/plan" className="py-2 text-gray-700 hover:text-green-700">Plan</Link>
            <Link href="/glossary" className="py-2 text-gray-700 hover:text-green-700">Glossary</Link>
            <Link href="/reports" className="py-2 text-gray-700 hover:text-green-700">Reports</Link>
          </div>
        </div>
      )}
    </header>
  );
}
