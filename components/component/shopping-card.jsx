import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ShoppingCard({ id, image, category, name, description }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={id} className="bg-background group flex flex-col hover:-translate-y-3 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt="Product Image"
          width={500}
          height={500}
          className="w-full h-72 duration-500 object-cover group-hover:scale-110"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/50 hover:bg-background"
          onClick={handleFavoriteToggle}
        >
          <HeartIcon
            className="w-5 h-5"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
          />
          <span className="sr-only">Add to favorites</span>
        </Button>

        <div id={id} className="absolute -top-56"></div>
      </div>
      <div className="p-4 md:p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{category}</span>
          <span className="text-lg font-bold">$49.99</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button className="w-full mt-auto bg-[#de772d]">Add to Cart</Button>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
