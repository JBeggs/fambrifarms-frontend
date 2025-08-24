export default function WowPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <div className="mx-auto w-40 h-40 sm:w-56 sm:h-56 mb-6 animate-float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#16a34a"/>
                <stop offset="100%" stopColor="#22c55e"/>
              </linearGradient>
            </defs>
            <path fill="url(#g)" d="M40.8,-54.1C52.6,-46.9,61.8,-35.1,66.6,-21.8C71.4,-8.4,71.7,6.5,66.1,18.6C60.6,30.8,49.3,40.1,37.4,49.2C25.5,58.3,12.8,67.2,-1.2,69C-15.1,70.8,-30.3,65.4,-44.3,57.1C-58.4,48.7,-71.2,37.4,-75.5,23.5C-79.8,9.6,-75.5,-6.9,-69.7,-22.2C-63.8,-37.5,-56.5,-51.6,-45.1,-59.6C-33.6,-67.6,-16.8,-69.4,-1,-67.9C14.9,-66.4,29.7,-61.3,40.8,-54.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fresh. Fast. Thoughtful.</h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          This app focuses on clarity: one action per screen, mobile-first, with smart defaults that get out of your way.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-white p-4 shadow border border-gray-100">
            <p className="text-sm text-gray-700">Orders on Tue/Fri for peak freshness.</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow border border-gray-100">
            <p className="text-sm text-gray-700">We auto-pick suppliers or use in-house production.</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow border border-gray-100">
            <p className="text-sm text-gray-700">Simple dashboards and CSV exports.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
