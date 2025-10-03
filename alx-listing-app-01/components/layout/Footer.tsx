// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800">About</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">How Airbnb works</Link></li>
            <li><Link href="#">Newsroom</Link></li>
            <li><Link href="#">Investors</Link></li>
            <li><Link href="#">Airbnb Plus</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800">Community</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Diversity & Belonging</Link></li>
            <li><Link href="#">Accessibility</Link></li>
            <li><Link href="#">Guest Referrals</Link></li>
            <li><Link href="#">Airbnb.org</Link></li>
          </ul>
        </div>

        {/* Host */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800">Host</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Host your home</Link></li>
            <li><Link href="#">Host an Online Experience</Link></li>
            <li><Link href="#">Responsible hosting</Link></li>
            <li><Link href="#">Community Center</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Safety information</Link></li>
            <li><Link href="#">Cancellation options</Link></li>
            <li><Link href="#">COVID-19 Response</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-8 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Project Airbnb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
