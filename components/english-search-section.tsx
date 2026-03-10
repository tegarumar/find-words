import { Search } from 'lucide-react'

interface EnglishSearchSectionProps {
  prefix: string
  setPrefix: (value: string) => void
  suffix: string
  setSuffix: (value: string) => void
  isLoading: boolean
}

export default function EnglishSearchSection({
  prefix,
  setPrefix,
  suffix,
  setSuffix,
  isLoading,
}: EnglishSearchSectionProps) {
  return (
    <section className="mb-12 sm:mb-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prefix Input */}
        <div className="relative group">
          <label htmlFor="prefix" className="block text-sm font-semibold text-foreground mb-3">
            Prefix
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              id="prefix"
              type="text"
              placeholder="Search words starting with..."
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Example: <span className="font-mono font-medium text-foreground">ap</span> → apple, apply, april
          </p>
        </div>

        {/* Suffix Input */}
        <div className="relative group">
          <label htmlFor="suffix" className="block text-sm font-semibold text-foreground mb-3">
            Suffix
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              id="suffix"
              type="text"
              placeholder="Search words ending with..."
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Example: <span className="font-mono font-medium text-foreground">ing</span> → running, playing, going
          </p>
        </div>
      </div>

      {/* Status text */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {prefix || suffix ? (
            <>
              <span className="font-semibold text-foreground">Search active</span>
              {prefix && suffix && (
                <span> • Prefix: <span className="font-mono text-accent">{prefix}</span> + Suffix: <span className="font-mono text-accent">{suffix}</span></span>
              )}
              {prefix && !suffix && (
                <span> • Prefix: <span className="font-mono text-accent">{prefix}</span></span>
              )}
              {!prefix && suffix && (
                <span> • Suffix: <span className="font-mono text-accent">{suffix}</span></span>
              )}
            </>
          ) : (
            <span>Enter a prefix or suffix to start searching</span>
          )}
        </div>
      </div>
    </section>
  )
}
