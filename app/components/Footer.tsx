export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">System</h3>
            <p className="text-gray-600">
              Farm to restaurant supply chain management. Built for simplicity and mobile-first.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
            <p className="text-gray-600">
              Phase 1: Django procurement backend + deploy to PythonAnywhere<br/>
              Phase 2: Production & admin<br/>
              Phase 3: Restaurant UX polish
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
            <div className="text-gray-600 space-y-1">
              <p>
                Phone: <a href="tel:0725235515" className="text-green-700 hover:underline">072 523 5515</a>
              </p>
              <p>
                Email: <a href="mailto:dev@famdrifarms.co.za" className="text-green-700 hover:underline">dev@famdrifarms.co.za</a>
              </p>
              <p>
                WhatsApp: <a href="https://wa.me/27725235515" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Chat with us</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          Fambri Farms Supply Chain System - Development Documentation
        </div>
      </div>
    </footer>
  );
}
