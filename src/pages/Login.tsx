import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logoAwire from "@/assets/logo-awire.png";

const Login = () => {
  const [email, setEmail] = useState("awiredigital@gmail.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempt:", { email, remember });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary py-12 px-4">
        <div className="container mx-auto text-center">
          <img src={logoAwire} alt="AWIRE Digital" className="h-20 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Faça login para acessar o sistema</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-secondary px-4 py-12">
        <div className="w-full max-w-md bg-card rounded-lg shadow-2xl p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Usuário
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-semibold">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-muted"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" checked={remember} onCheckedChange={(checked) => setRemember(checked as boolean)} />
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-accent hover:underline">
                Esqueci minha senha
              </a>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
              Entrar
            </Button>
          </form>
        </div>
      </div>

      <div className="bg-primary py-6 text-center text-sm text-muted-foreground px-4">
        <p>© 2025 AWIRE DIGITAL - Todos os direitos reservados</p>
        <p className="mt-1">
          Problemas para acessar?{" "}
          <a href="mailto:awiredigital@gmail.com.br" className="text-accent hover:underline">
            Contate o administrador
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
