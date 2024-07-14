"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import {products} from "./data"
import { ShoppingCard } from "./shopping-card"

export function Ecommerce() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
     .then((response) => response.json())
     .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, []);

  return (
    (
      <>
        {/* <div className="container text-primary mx-auto mt-16 p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center px-10">
            <div>
              <h1
                className="text-4xl font-bold sm:text-4xl md:text-5xl">
                Power Your Home, Sustainably
              </h1>
              <p className="mt-4 text-lg">
                Discover our range of energy-efficient products that help you save money and reduce your carbon
                footprint.
              </p>
              <Button className="mt-6" size="lg">
                Shop Now
              </Button>
            </div>
            <div className="flex justify-end">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Hero Image"
                className="rounded-lg object-cover" />
            </div>
          </div>
        </div> */}
      <main className="p-5 lg:p-10">
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-[#de772d]">Our Products</h2>
              <div className="md:flex items-center gap-4 hidden">
                <Button
                  className={selectedCategory === "All" ? "bg-[#de772d]" : "border-2 border-primary bg-white text-primary hover:bg-white"}
                  onClick={() => setSelectedCategory("All")}>
                  All
                </Button>
                <Button
                  className={selectedCategory === "Sneakers" ? "bg-[#de772d]" : "border-2 border-primary bg-white text-primary hover:bg-white"}
                  onClick={() => setSelectedCategory("Sneakers")}>
                  Sneakers
                </Button>
                <Button
                  className={selectedCategory === "Jacket" ? "bg-[#de772d]" : "border-2 border-primary bg-white text-primary hover:bg-white"}
                  onClick={() => setSelectedCategory("Jacket")}>
                  Jacket
                </Button>
                <Button
                  className={selectedCategory === "Pants" ? "bg-[#de772d]" : "border-2 border-primary bg-white text-primary hover:bg-white"}
                  onClick={() => setSelectedCategory("Pants")}>
                  Pants
                </Button>
                <Button
                  className={selectedCategory === "Accessories" ? "bg-[#de772d]" : "border-2 border-primary bg-white text-primary hover:bg-white"}
                  onClick={() => setSelectedCategory("Accessories")}>
                  Accessories
                </Button>
              </div>
            </div>
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                // <Card key={product.id} className="group duration-300 hover:shadow-md relative overflow-hidden">
                //   <div className="w-fit h-fit overflow-hidden">
                //     <img
                //       src={product.image}
                //       width={400}
                //       height={300}
                //       alt={product.title}
                //       className="rounded-t-lg object-cover aspect-square bg-[white] group-hover:scale-110 duration-500" />
                //   </div>
                //   <CardContent className="flex flex-col justify-end">
                //     <h3 className="text-xl font-bold text-primary pt-5">{product.title}</h3>
                //     <p className="mt-2 text-muted-foreground">{product.description}</p>
                //       <Button className="mt-4 bg-[#de772d]" size="sm">
                //       Buy Now
                //     </Button>
                //   </CardContent>
                //   <div className="absolute -top-40" id={product.id}></div>
                // </Card>
                <ShoppingCard id={product.id} image={product.image} name={product.title} description={product.description} category={product.category} price={product.price} />
              ))}
            </div>
          </div>
        </section>
      </main>
      </>)
  );
}
