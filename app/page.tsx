import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { GraduationCap, Sparkles, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-2 items-center font-bold text-xl">
            <GraduationCap className="h-6 w-6" />
            <span>ENEM AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button size="sm">
                Criar Conta
              </Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-5 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Plataforma de Tutoria Inteligente
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                para o ENEM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Prepare-se para o Exame Nacional do Ensino Médio com orientação
              personalizada de IA. Alcance seus objetivos de aprovação com
              inteligência artificial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Já tenho uma conta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-5 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher o ENEM AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg">
              <div className="p-4 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tutoria Inteligente</h3>
              <p className="text-muted-foreground">
                Orientações personalizadas com inteligência artificial adaptadas
                ao seu ritmo de aprendizado
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg">
              <div className="p-4 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Foco no ENEM</h3>
              <p className="text-muted-foreground">
                Conteúdo específico e estratégias direcionadas para o formato e
                exigências do ENEM
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg">
              <div className="p-4 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Preparação Eficiente</h3>
              <p className="text-muted-foreground">
                Otimize seu tempo de estudo com planos de ação inteligentes e
                acompanhamento contínuo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center border-t py-8 text-center text-sm text-muted-foreground">
        <p>
          Feito com ❤️ no Brasil 🇧🇷 | Plataforma de Tutoria Inteligente para
          o ENEM
        </p>
      </footer>
    </main>
  );
}
