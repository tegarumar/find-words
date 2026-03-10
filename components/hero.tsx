export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Main title with gradient */}
        <div className="mb-4 inline-block">
          <a
            href="https://www.roblox.com/games/130342654546662/Sambung-Kata"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-accent">
              Sambung Kata - Roblox
            </span>
          </a>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ">
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Sambung Kata
          </span>
          <br />
          <span className="text-foreground">Helper</span>
        </h1>

        {/* Decorative line */}
        <div className="mt-2 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
