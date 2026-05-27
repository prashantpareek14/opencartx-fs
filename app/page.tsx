import { UserIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <header className="">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4">
        <div className="border-b border-gray-200">
          <div className="flex h-16 justify-between items-center">
            <div>
              <a href="/">
                <span className="sr-only">OpenCartX</span>
                OpenCartX
              </a>
            </div>
            <div className="flex space-x-8 h-full">
              <a href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</a>
              <a href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">About Us</a>
              <a href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact Us</a>
              <a href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Our Collection</a>
            </div>
            <div>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Account</span>
                <UserIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
