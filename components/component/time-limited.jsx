import { Button } from "@/components/ui/button"

export function TimeLimited() {
  return (
    (<section className="w-full bg-[#fff8f2] py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div
            className="inline-block rounded-lg bg-[#de772d] px-2 py-1 text-xs font-medium text-primary-foreground">
            Limited Time Offer
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hurry, Sale Ends Soon!</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Ends in:</span>
            </div>
            <div
              className="flex items-center gap-1 rounded-md bg-background px-3 py-1 font-mono text-sm font-medium">
              <span className="countdown font-mono text-2xl font-bold text-primary">
                <span style={{}} />:
              </span>
              <span className="countdown font-mono text-2xl font-bold text-primary">
                <span style={{}} />:
              </span>
              <span className="countdown font-mono text-2xl font-bold text-primary">
                <span style={{}} />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg border bg-background p-4 shadow-sm">
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/white-modern-smart-watch-mockup-with-strap-white-background-3d-rendering_476612-18565.jpg"
                width={300}
                height={300}
                alt="Product Image"
                className="mx-auto h-64 w-full rounded-md object-cover object-top" />
              <div
                className="absolute top-2 left-2 inline-block rounded-lg bg-[#de772d] px-2 py-1 text-xs font-medium text-primary-foreground">
                -50%
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium">Watch 7 pro</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">$19.99</span>
                <span className="text-sm font-medium line-through text-muted-foreground">$39.99</span>
              </div>
              <Button className="w-full bg-[#de772d]">Get Offer Now</Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-4 shadow-sm">
            <div className="relative">
              <img
                src="https://previews.123rf.com/images/kornienko/kornienko2008/kornienko200800080/154287469-chisinau-moldova-july-23-2020-new-balance-shoes-model-nb-574-white-color-on-white-background-with.jpg"
                width={300}
                height={300}
                alt="Product Image"
                className="mx-auto h-64 w-full rounded-md object-cover object-top" />
              <div
                className="absolute top-2 left-2 inline-block rounded-lg bg-[#de772d] px-2 py-1 text-xs font-medium text-primary-foreground">
                -30%
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium">New Balance 574</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">$27.99</span>
                <span className="text-sm font-medium line-through text-muted-foreground">$39.99</span>
              </div>
              <Button className="w-full bg-[#de772d]">Get Offer Now</Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-4 shadow-sm">
            <div className="relative">
              <img
                src="https://urbanechostore.com/cdn/shop/files/S6907942a07c9416a9da1361e7864a2fdf.webp?v=1711718011&width=1445"
                width={300}
                height={300}
                alt="Product Image"
                className="mx-auto h-64 w-full rounded-md object-cover object-top" />
              <div
                className="absolute top-2 left-2 inline-block rounded-lg bg-[#de772d] px-2 py-1 text-xs font-medium text-primary-foreground">
                -40%
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium">Travis Scot Hoodie</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">$23.99</span>
                <span className="text-sm font-medium line-through text-muted-foreground">$39.99</span>
              </div>
              <Button className="w-full bg-[#de772d]">Get Offer Now</Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-4 shadow-sm">
            <div className="relative">
              <img
                src="https://cdn.myshoptet.com/usr/www.cesky-mobil.cz/user/shop/detail/137881_tactical-velvet-smoothie-kryt-pro-apple-iphone-12-12-pro-sangria.jpg?649e5757"
                width={300}
                height={300}
                alt="Product Image"
                className="mx-auto h-64 w-full rounded-md object-cover object-top" />
              <div
                className="absolute top-2 left-2 inline-block rounded-lg bg-[#de772d] px-2 py-1 text-xs font-medium text-primary-foreground">
                -60%
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium">iPhone Case</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">$15.99</span>
                <span className="text-sm font-medium line-through text-muted-foreground">$39.99</span>
              </div>
              <Button className="w-full bg-[#de772d]">Get Offer Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
