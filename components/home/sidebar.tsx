"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/logout-button";
import {
  BookOpen,
  BarChart3,
  Settings,
  User,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Sidebar() {
  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <div className="h-screen flex flex-col border-r border-border bg-background">
      {/* Logo/Header */}
      <div className="p-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <GraduationCap className="h-6 w-6" />
          <span>ENEM AI</span>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          asChild
        >
          <Link href="/home">
            <BookOpen className="h-4 w-4" />
            Questões
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          disabled
        >
          <BarChart3 className="h-4 w-4" />
          Estatísticas
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          disabled
        >
          <Settings className="h-4 w-4" />
          Configurações
        </Button>
      </nav>

      {/* User Info at Bottom */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {user?.email || "Usuário"}
            </p>
            <p className="text-xs text-muted-foreground">Estudante</p>
          </div>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}

