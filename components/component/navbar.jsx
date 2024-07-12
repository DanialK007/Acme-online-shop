import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { products } from "./data";

export function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);
  const searchlink = useRef(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchInput(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchInput("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold">Acme Shop</span>
        </Link>
        <div className="relative hidden md:flex flex-1 md:max-w-md ps-4" ref={searchRef}>
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={searchInput}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full rounded-s-[30px] rounded-e-[30px] bg-muted pl-4 lg:pl-8 pr-4 focus:bg-background"
          />
          {searchInput && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg z-50 overflow-x-hidden overflow-y-scroll max-h-[300px] bg-[white] shadow-2xl">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <a href={"#" + product.id} key={product.id} className="p-4 block border-b last:border-none hover:bg-[#fff8f2]">
                    <div prefetch={false} ref={searchlink} className="flex items-center gap-2">
                      <img src={product.image} alt={product.title} className="h-10 w-10 rounded-lg" />
                      <span className="ml-2">{product.title}</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="p-4">No products found</div>
              )}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center md:gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col gap-4 p-4">
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Shop
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
