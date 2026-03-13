'use client'

import Hero from '@/components/hero'
import SearchSection from '@/components/search-section'
import ResultsSection from '@/components/results-section'
import { useWordSearch } from '@/hooks/use-word-search'

export default function Home() {
  const { prefix, setPrefix, suffix, setSuffix, words, isLoading } = useWordSearch('/kamus.json')

  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl mx-auto">
        <SearchSection 
          prefix={prefix} 
          setPrefix={setPrefix}
          suffix={suffix}
          setSuffix={setSuffix}
          isLoading={isLoading}
        />
        <ResultsSection 
          words={words}
          prefix={prefix}
          suffix={suffix}
          isLoading={isLoading}
        />
      </div>
    </main>
  )
}
