export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200">
        <div className="flex space-x-16">
          <nav>
            <div className="font-medium">Quick Links</div>
            <div className="flex flex-col mt-6 space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Collection</a>
            </div>
          </nav>
          <nav>
            <div className="font-medium">Policies</div>
            <div className="flex flex-col mt-6 space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Shipping Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Return Policy</a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}