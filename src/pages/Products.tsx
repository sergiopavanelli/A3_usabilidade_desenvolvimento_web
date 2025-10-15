import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, User, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import productIphone from "@/assets/product-iphone.jpg";
import productMacbook from "@/assets/product-macbook.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productHeadphone from "@/assets/product-headphone.jpg";

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      image: productIphone,
      title: "iPhone 14 Pro Max 256GB",
      price: 4200,
      originalPrice: 5400,
      seller: "João Silva",
      location: "São Paulo, SP",
      rating: 4.5,
      condition: "seminovo",
    },
    {
      id: 2,
      image: productMacbook,
      title: 'MacBook Air M1 13"',
      price: 4800,
      originalPrice: 6200,
      seller: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      condition: "seminovo",
    },
    {
      id: 3,
      image: productCamera,
      title: "Câmera Canon EOS R6",
      price: 8900,
      originalPrice: 12000,
      seller: "Carlos Oliveira",
      location: "Belo Horizonte, MG",
      rating: 4.8,
      condition: "Muito Bom",
    },
    {
      id: 4,
      image: productHeadphone,
      title: "Headphone Sony WH-1000XM4",
      price: 890,
      originalPrice: 1200,
      seller: "Ana Paula",
      location: "Curitiba, PR",
      rating: 4.9,
      condition: "seminovo",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold flex-1">Produtos Disponíveis</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-success hover:bg-success/90"
        onClick={() => navigate("/register")}
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Products;
