'use server';

import { intelligentSearch } from '@/ai/flows/intelligent-search-assistant';
import type { IntelligentSearchOutput } from '@/ai/flows/intelligent-search-assistant';

export async function runIntelligentSearch(
  query: string
): Promise<IntelligentSearchOutput> {
  if (!query) {
    return {
      correctedQuery: '',
      informationType: null,
    };
  }
  try {
    const result = await intelligentSearch({ query });
    return result;
  } catch (error) {
    console.error('Error in intelligent search:', error);
    // Fallback to the original query if AI fails
    return {
      correctedQuery: query,
      informationType: null,
    };
  }
}
