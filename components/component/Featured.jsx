import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Featured() {
  return (
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
                src="https://hespokestyle.com/wp-content/uploads/2023/08/medium-gray-wool-pants-he-spoke-style-shop.png"
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
  )
}

export default Featured
