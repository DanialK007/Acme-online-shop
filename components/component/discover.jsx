import Link from "next/link"

export function Discover() {
  return (
    (<section className="relative w-full overflow-hidden pt-14">
      <img
        src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/59b45-shopping-malls-in-delhi-ncr.jpg?fit=1000%2C667&ssl=1"
        width={1920}
        height={1080}
        alt="Shop hero"
        className="h-[85vh] w-full object-cover object-center" />
      <div
        className="absolute pt-20 z-20 inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-transparent px-4 text-center text-[white]">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover Our Curated Collection</h1>
        <p className="mt-3 max-w-md text-lg sm:text-xl">
          Explore our carefully selected range of high-quality products for your home and lifestyle.
        </p>
        <Link
          href="#"
          className="mt-8 inline-flex items-center rounded-md bg-[#de772d] px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}>
          Shop Now
        </Link>
      </div>

      <div className="bg-[#6c3a16]/50 absolute top-0 left-0 w-full h-full z-10"></div>
    </section>)
  );
}
