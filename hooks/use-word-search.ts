import { useState, useEffect, useMemo } from "react";

export function useWordSearch(datasetPath: string) {
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load words from JSON
  useEffect(() => {
    const loadWords = async () => {
      try {
        const response = await fetch(datasetPath);
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Error loading words:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadWords();
  }, [datasetPath]);

  // Filter words based on prefix and suffix
  const filteredWords = useMemo(() => {
    if (isLoading || words.length === 0) return [];

    return words
      .filter((word) => {
        const matchesPrefix =
          prefix === "" || word.toLowerCase().startsWith(prefix.toLowerCase());
        const matchesSuffix =
          suffix === "" || word.toLowerCase().endsWith(suffix.toLowerCase());
        return matchesPrefix && matchesSuffix;
      })
      .slice(0, 100);
  }, [prefix, suffix, words, isLoading]);

  return {
    prefix,
    setPrefix,
    suffix,
    setSuffix,
    words: filteredWords,
    allWords: words,
    isLoading,
  };
}
