import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    phone: "",
    password: "",
  });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (!formData.nome || !formData.email || !formData.phone || !formData.password) {
            toast.error("Por favor, preencha todos os campos");
            return;
        }

        // Monta o payload para a API
        const payload = {
            id: 0, // sempre 0 para criar novo usuário
            nome: formData.nome,
            email: formData.email,
            telefone: formData.phone,
            senha: formData.password,
        };

        try {
            const response = await fetch("https://localhost:7103/api/Usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(`Erro ao criar conta: ${errorData.message || response.statusText}`);
                return;
            }

            toast.success("Conta criada com sucesso!");
            setTimeout(() => {
                navigate("/products");
            }, 1000);
        } catch (error) {
            console.error(error);
            toast.error("Erro ao conectar com o servidor.");
        }
    };


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Junte-se ao melhor marketplace de seminovos
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-12 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-medium">
              Criar Conta
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="text-primary hover:underline font-medium"
              >
                Fazer login
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
