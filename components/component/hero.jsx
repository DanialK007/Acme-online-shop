import Image from "next/image";
import Link from "next/link"

export function Hero() {
  return (
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
  );
}
