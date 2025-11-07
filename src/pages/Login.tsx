import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logoAwire from "@/assets/logo-awire.png";

// 1. IMPORTAÇÕES DO FIREBASE (NOVO)
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Nosso "porteiro" que criamos

const Login = () => {
  const [email, setEmail] = useState("awiredigital@gmail.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // 2. NOVOS "STATES" PARA LOADING E ERRO (NOVO)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 3. LÓGICA DE LOGIN (ATUALIZADA)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Desabilita o botão
    setError(""); // Limpa erros antigos

    try {
      // Tenta fazer o login com o Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // SUCESSO! Redireciona para o seu Painel de Admin
      // !!! MUDE A LINHA ABAIXO PARA O LINK DO SEU PAINEL !!!
// A LINHA CORRIGIDA (PARA TESTAR)
window.location.href = "https://adminpaine.netlify.app";

    } catch (err) {
      // FALHA! Avisa o usuário
      console.error(err); // Para você ver o erro no console
      setError("E-mail ou senha incorretos. Tente novamente.");
      setIsLoading(false); // Habilita o botão de novo
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary py-12 px-4">
        {/* ... (o cabeçalho do login não muda) ... */}
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
            {/* ... (o 'Lembrar-me' e 'Esqueci a senha' não mudam) ... */}
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
            
            {/* 4. MOSTRAR MENSAGEM DE ERRO (NOVO) */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* 5. BOTÃO ATUALIZADO (NOVO) */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              disabled={isLoading} // Desabilita o botão enquanto carrega
            >
              {isLoading ? "Entrando..." : "Entrar"} {/* Muda o texto */}
            </Button>
          </form>
        </div>
      </div>

      <div className="bg-primary py-6 text-center text-sm text-muted-foreground px-4">
        {/* ... (o rodapé não muda) ... */}
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

