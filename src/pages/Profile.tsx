import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Star, ShoppingCart, DollarSign, TrendingUp, LogOut, Settings } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const salesHistory = [
    { id: 1, name: "iPhone 13 Pro", date: "2024-04-15", price: 3500, status: "vendido" },
    { id: 2, name: "MacBook Air M1", date: "2024-03-10", price: 4200, status: "vendido" },
    { id: 3, name: "AirPods Pro", date: "2024-03-05", price: 800, status: "vendido" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Meu Perfil</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/register")}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16 bg-primary">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                  JS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold">João Silva</h2>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.5</span>
                    <span className="text-muted-foreground">• Vendedor verificado</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>joao@exemplo.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>São Paulo, SP • Centro</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-3">
                  <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold mb-1">12</div>
                <div className="text-sm text-muted-foreground">Vendas</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold mb-1">R$ 8,5k</div>
                <div className="text-sm text-muted-foreground">Faturado</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold mb-1">4.8</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales History */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Histórico de Vendas</h3>
            <div className="space-y-3">
              {salesHistory.map((sale) => (
                <div
                  key={sale.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{sale.name}</div>
                    <div className="text-sm text-muted-foreground">{sale.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-success">
                      R$ {sale.price.toLocaleString("pt-BR")}
                    </div>
                    <div className="text-sm text-muted-foreground">{sale.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/products")}
          className="w-full h-14 text-base font-medium"
          size="lg"
        >
          Ver Produtos Disponíveis
        </Button>
      </div>
    </div>
  );
};

export default Profile;
