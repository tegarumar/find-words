import { Search } from 'lucide-react'

interface SearchSectionProps {
  prefix: string
  setPrefix: (value: string) => void
  suffix: string
  setSuffix: (value: string) => void
  isLoading: boolean
}

export default function SearchSection({
  prefix,
  setPrefix,
  suffix,
  setSuffix,
  isLoading,
}: SearchSectionProps) {
  return (
    <section className="mb-12 sm:mb-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prefix Input */}
        <div className="relative group">
          <label htmlFor="prefix" className="block text-sm font-semibold text-foreground mb-3">
            Awalan Kata
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              id="prefix"
              type="text"
              placeholder="Cari kata dengan awalan..."
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Contoh: <span className="font-mono font-medium text-foreground">ka</span> → kaca, kaki, kamar
          </p>
        </div>

        {/* Suffix Input */}
        <div className="relative group">
          <label htmlFor="suffix" className="block text-sm font-semibold text-foreground mb-3">
            Akhiran Kata
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              id="suffix"
              type="text"
              placeholder="Cari kata dengan akhiran..."
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Contoh: <span className="font-mono font-medium text-foreground">an</span> → makan, jalan, tangan
          </p>
        </div>
      </div>

      {/* Status text */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {prefix || suffix ? (
            <>
              <span className="font-semibold text-foreground">Pencarian aktif</span>
              {prefix && suffix && (
                <span> • Awalan: <span className="font-mono text-accent">{prefix}</span> + Akhiran: <span className="font-mono text-accent">{suffix}</span></span>
              )}
              {prefix && !suffix && (
                <span> • Awalan: <span className="font-mono text-accent">{prefix}</span></span>
              )}
              {!prefix && suffix && (
                <span> • Akhiran: <span className="font-mono text-accent">{suffix}</span></span>
              )}
            </>
          ) : (
            <span>Masukkan awalan atau akhiran untuk mulai mencari</span>
          )}
        </div>
      </div>
    </section>
  )
}
