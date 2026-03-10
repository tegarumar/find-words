import { useMemo } from "react";

interface EnglishResultsSectionProps {
  words: string[];
  prefix: string;
  suffix: string;
  isLoading: boolean;
}

function highlightMatch(
  word: string,
  prefix: string,
  suffix: string,
): React.ReactNode[] {
  if (!prefix && !suffix) return [word];

  const lowerWord = word.toLowerCase();
  const lowerPrefix = prefix.toLowerCase();
  const lowerSuffix = suffix.toLowerCase();

  const parts: React.ReactNode[] = [];
  let currentIndex = 0;

  // Highlight prefix
  if (prefix) {
    const prefixLength = lowerPrefix.length;
    if (lowerWord.startsWith(lowerPrefix)) {
      parts.push(
        <span key="prefix" className="font-semibold text-accent">
          {word.substring(0, prefixLength)}
        </span>,
      );
      currentIndex = prefixLength;
    }
  }

  // Highlight suffix
  if (suffix) {
    const lowerSuffix = suffix.toLowerCase();
    const suffixStart = lowerWord.length - lowerSuffix.length;

    if (currentIndex < suffixStart) {
      parts.push(word.substring(currentIndex, suffixStart));
    }

    parts.push(
      <span key="suffix" className="font-semibold text-accent">
        {word.substring(suffixStart)}
      </span>,
    );
  } else if (currentIndex < word.length) {
    parts.push(word.substring(currentIndex));
  }

  return parts.length > 0 ? parts : [word];
}

export default function EnglishResultsSection({
  words,
  prefix,
  suffix,
  isLoading,
}: EnglishResultsSectionProps) {
  const hasSearchQuery = prefix || suffix;
  const showEmpty = hasSearchQuery && words.length === 0 && !isLoading;

  const wordItems = useMemo(() => {
    return words.map((word, index) => ({
      word,
      highlighted: highlightMatch(word, prefix, suffix),
      index,
    }));
  }, [words, prefix, suffix]);

  if (isLoading) {
    return (
      <section className="mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-12 bg-muted rounded-lg animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (showEmpty) {
    return (
      <section className="mt-12 py-16 text-center animate-fade-in">
        <div className="inline-block mb-4 p-3 bg-destructive/10 rounded-full">
          <svg
            className="w-6 h-6 text-destructive"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No words found
        </h3>
        <p className="text-muted-foreground">
          Try with a different prefix or suffix
        </p>
      </section>
    );
  }

  if (!hasSearchQuery) {
    return (
      <section className="mt-12 py-16 text-center">
        <div className="inline-block mb-4 p-3 bg-primary/10 rounded-full">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Type to start searching
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Use the fields above to search words by prefix or suffix
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12 animate-fade-in">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Search Results
        </h2>
        <span className="text-sm text-muted-foreground">
          <span className="font-semibold text-accent">{words.length}</span>{" "}
          words found
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {wordItems.map(({ word, highlighted, index }) => (
          <div
            key={word}
            className="group relative"
            style={{
              animation: `slideIn 0.3s ease-out ${index * 0.02}s both`,
            }}
          >
            <div className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-200 cursor-default">
              <p className="text-sm font-medium text-foreground text-center break-words">
                {highlighted}
              </p>
            </div>
          </div>
        ))}
      </div>

      {words.length === 100 && (
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            Showing 100 words. Try refining your search for more specific
            results.
          </p>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
