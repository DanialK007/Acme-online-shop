/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RLPb74XatM2
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Image from "next/image";
import Link from "next/link"

export function Hero() {
  return (
    (<div>
      <section
        className="py-[300px] relative md:mt-16 w-full md:py-32 lg:py-44 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full scale-150 lg:scale-125 bg-[url('https://i.ebayimg.com/images/g/-EAAAOSw~4djhEEl/s-l1200.webp')] bg-cover bg-center -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#3a210b] opacity-50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 z-10 relative text-[white]">
          <div className="mx-auto max-w-3xl space-y-6 text-center pt-16">
            <h1
              className="text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Discover the Latest Fashion Trends
            </h1>
            <p className="text-lg text-black md:text-xl lg:text-2xl">
              Explore our curated collection of stylish apparel and accessories for every occasion.
            </p>
            <Link
              href="#"
              className="inline-flex bg-[#de772d] h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Exclusive Discounts</h2>
            <p className="text-muted-foreground md:text-lg">
              Don't miss out on our limited-time discounts. Shop now and save big!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border hover:scale-105 flex flex-col bg-[#fff] justify-between duration-300 text-left">
                <h3 className="text-xl font-bold mb-2">20% Off Dresses</h3>
                <p className="text-muted-foreground mb-4">Hurry, this offer ends soon!</p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#de772d] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#de772d]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Shop Dresses
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border hover:scale-105 flex flex-col bg-[#fff] justify-between duration-300 text-left">
                <h3 className="text-xl font-bold mb-2">30% Off Accessories</h3>
                <p className="text-muted-foreground mb-4">Don't miss this chance to upgrade your style.</p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#de772d] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#de772d]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Shop Accessories
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border hover:scale-105 flex flex-col bg-[#fff] justify-between duration-300 text-left">
                <h3 className="text-xl font-bold mb-2">40% Off Shoes</h3>
                <p className="text-muted-foreground mb-4">Step into style with these amazing deals.</p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#de772d] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#de772d]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Shop Shoes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[#fff 8f2] bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-7xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
            <p className="text-muted-foreground md:text-lg">
              Discover our latest collection of stylish and high-quality products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg shadow-md border hover:scale-105 duration-300 text-left bg-[white]">
                <div
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="absolute z-30 w-full h-full flex items-center justify-center group top-0 left-0 cursor-pointer group-hover:opacity-100 opacity-0 bg-[#f99c5050] duration-500">
                    <div className="size-12 rounded-[100%] bg-[white] flex items-center justify-center">
                      <Image src="/image/arrow.png" height={22} width={22} alt="arrow" className="rotate-180 duration-500 group-hover:rotate-[135deg]" />
                    </div>
                  </div>
                  <img
                    src="https://img.joomcdn.net/1a9562d2a89bb1f42dae217a2ac3da6d7a3e6558_original.jpeg"
                    alt="Cover image"
                    width={300}
                    height={400}
                    className="[grid-area:stack] object-cover w-full h-[400px] lg:h-[300px] py-10 scale-90" />
                  <div
                    className="flex-1 absolute w-full h-full top-0 left-0 bg-black/70 z-20 bg-gradient-to-t from-[#f99c50] to-[40%] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold text-lg tracking-tight">Sneakers</h3>
                    <p className="text-sm">$79.99</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md border hover:scale-105 duration-300 text-left bg-[white]">
                <div
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="absolute z-30 w-full h-full flex items-center justify-center group top-0 left-0 cursor-pointer group-hover:opacity-100 opacity-0 bg-[#f99c5050] duration-500">
                    <div className="size-12 rounded-[100%] bg-[white] flex items-center justify-center">
                      <Image src="/image/arrow.png" height={22} width={22} alt="arrow" className="rotate-180 duration-500 group-hover:rotate-[135deg]" />
                    </div>
                  </div>
                  <img
                    src="https://elizabethanthonyhouston.com/cdn/shop/files/EMILIA_23949121-d032-4a79-8771-5b082e2bd78a.jpg?v=1686003912"
                    alt="Cover image"
                    width={300}
                    height={400}
                    className="[grid-area:stack] object-cover w-full h-[400px] lg:h-[300px] scale-90 p-3" />
                  <div
                    className="flex-1 absolute w-full h-full top-0 left-0 bg-black/70 z-20 bg-gradient-to-t from-[#f99c50] to-[40%] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold text-lg tracking-tight">Floral Dress</h3>
                    <p className="text-sm">$59.99</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md border hover:scale-105 duration-300 text-left bg-[white]">
                <div
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="absolute z-30 w-full h-full flex items-center justify-center group top-0 left-0 cursor-pointer group-hover:opacity-100 opacity-0 bg-[#f99c5050] duration-500">
                    <div className="size-12 rounded-[100%] bg-[white] flex items-center justify-center">
                      <Image src="/image/arrow.png" height={22} width={22} alt="arrow" className="rotate-180 duration-500 group-hover:rotate-[135deg]" />
                    </div>
                  </div>
                  <img
                    src="https://media.takealot.com/covers_images/1c0dba35f8404045b2620b468401c7d5/s-pdpxl.file"
                    alt="Cover image"
                    width={300}
                    height={400}
                    className="[grid-area:stack] object-cover w-full h-[400px] lg:h-[300px] scale-90 py-5" />
                  <div
                    className="flex-1 absolute w-full h-full top-0 left-0 bg-black/70 z-20 bg-gradient-to-t from-[#f99c50] to-[40%] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold text-lg tracking-tight">Leather Jacket</h3>
                    <p className="text-sm">$149.99</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md border hover:scale-105 duration-300 text-left bg-[white]">
                <div
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="absolute z-30 w-full h-full flex items-center justify-center group top-0 left-0 cursor-pointer group-hover:opacity-100 opacity-0 bg-[#f99c5050] duration-500">
                    <div className="size-12 rounded-[100%] bg-[white] flex items-center justify-center">
                      <Image src="/image/arrow.png" height={22} width={22} alt="arrow" className="rotate-180 duration-500 group-hover:rotate-[135deg]" />
                    </div>
                  </div>
                  <img
                    src="https://thumbs.dreamstime.com/b/pants-isolated-white-background-fashion-men-trousers-light-beige-s-171822294.jpg"
                    alt="Cover image"
                    width={300}
                    height={400}
                    className="[grid-area:stack] object-cover w-full h-[400px] lg:h-[300px] px-8 pb-5 scale-90" />
                  <div
                    className="flex-1 absolute w-full h-full top-0 left-0 bg-black/70 z-20 bg-gradient-to-t from-[#f99c50] to-[40%] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold text-lg tracking-tight">Style Pants</h3>
                    <p className="text-sm">$119.99</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md border hover:scale-105 duration-300 text-left bg-[white]">
                <div
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="absolute z-30 w-full h-full flex items-center justify-center group top-0 left-0 cursor-pointer group-hover:opacity-100 opacity-0 bg-[#f99c5050] duration-500">
                    <div className="size-12 rounded-[100%] bg-[white] flex items-center justify-center">
                      <Image src="/image/arrow.png" height={22} width={22} alt="arrow" className="rotate-180 duration-500 group-hover:rotate-[135deg]" />
                    </div>
                  </div>
                  <img
                    src="https://www.cjcharles.com/cdn/shop/products/datejustwhitebackground.jpg?v=1676653084"
                    alt="Cover image"
                    width={300}
                    height={400}
                    className="[grid-area:stack] object-cover w-full h-[400px] lg:h-[300px] scale-90 py-5" />
                  <div
                    className="flex-1 absolute w-full h-full top-0 left-0 bg-black/70 z-20 bg-gradient-to-t from-[#f99c50] to-[40%] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold text-lg tracking-tight">Watch</h3>
                    <p className="text-sm">$99.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}
