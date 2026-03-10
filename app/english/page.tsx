'use client'

import EnglishHero from '@/components/english-hero'
import EnglishSearchSection from '@/components/english-search-section'
import EnglishResultsSection from '@/components/english-results-section'
import { useWordSearch } from '@/hooks/use-word-search'

export default function EnglishPage() {
  const { prefix, setPrefix, suffix, setSuffix, words, isLoading } = useWordSearch('/english-words.json')

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <EnglishHero />
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl mx-auto">
        <EnglishSearchSection 
          prefix={prefix} 
          setPrefix={setPrefix}
          suffix={suffix}
          setSuffix={setSuffix}
          isLoading={isLoading}
        />
        <EnglishResultsSection 
          words={words}
          prefix={prefix}
          suffix={suffix}
          isLoading={isLoading}
        />
      </div>
    </main>
  )
}
