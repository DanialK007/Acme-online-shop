import React from 'react'
import Link from "next/link"


function Footer() {
    return (
        <footer className="bg-[#fff8f2] py-6 px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#de772d]">Company</h3>
              <nav className="grid gap-2">
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  About Us
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Our Mission
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Careers
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#de772d]">Products</h3>
              <nav className="grid gap-2">
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Solar Panels
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Battery Storage
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Smart Thermostats
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Energy-Efficient Appliances
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#de772d]">Resources</h3>
              <nav className="grid gap-2">
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Blog
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  FAQs
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Guides
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Sustainability Tips
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#de772d]">Legal</h3>
              <nav className="grid gap-2">
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Privacy Policy
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Terms of Service
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Refund Policy
                </Link>
                <Link href="#" className='hover:text-[#de772d] hover:font-semibold' prefetch={false}>
                  Shipping Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; 2024 Acme Inc. All rights reserved. Designed and developed by @Danial
          </div>
        </div>
      </footer>
    )
}

export default Footer
