import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  seller: string;
  location: string;
  rating: number;
  condition: string;
}

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  seller,
  location,
  rating,
  condition,
}: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-yellow-500 text-yellow-950 hover:bg-yellow-500">
          {condition}
        </Badge>
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-700"
            }`}
          />
        </button>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span className="font-medium">{seller}</span>
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              R$ {price.toLocaleString("pt-BR")}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toLocaleString("pt-BR")}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" className="flex-1">
            Conversar
          </Button>
          <Button className="flex-1">Comprar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
