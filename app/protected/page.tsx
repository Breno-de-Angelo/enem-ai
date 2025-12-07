export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Bem-vindo ao ENEM AI</h1>
        <p className="text-muted-foreground text-lg">
          Esta é uma página protegida. Em breve, você terá acesso à plataforma
          completa.
        </p>
      </div>
    </div>
  );
}
