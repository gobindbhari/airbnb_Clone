import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 text-gray-600 text-sm">
    <div className="max-w-7xl mx-auto px-4">
      {/* Inspiration Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Popular</h3>
          <ul className="space-y-2">
            <li>Canmore - Apartment rentals</li>
            <li>Tucson - Mansion rentals</li>
            <li>Marbella - House rentals</li>
            <li>Mijas - Flat rentals</li>
            <li>Prescott - Pet-friendly rentals</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            © 2024 Airbnb, Inc.
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Company details
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span>🌐</span>
              <span>English (IN)</span>
            </div>
            <div>₹ INR</div>
            <div className="flex space-x-3">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
