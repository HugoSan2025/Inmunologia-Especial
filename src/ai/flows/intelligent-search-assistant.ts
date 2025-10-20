'use server';

/**
 * @fileOverview An intelligent search assistant AI agent.
 *
 * - intelligentSearch - A function that handles the search process.
 * - IntelligentSearchInput - The input type for the intelligentSearch function.
 * - IntelligentSearchOutput - The return type for the intelligentSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentSearchInputSchema = z.object({
  query: z.string().describe('The user search query.'),
});
export type IntelligentSearchInput = z.infer<typeof IntelligentSearchInputSchema>;

const IntelligentSearchOutputSchema = z.object({
  correctedQuery: z.string().describe('The corrected and precise search query.'),
  informationType: z
    .string()
    .describe(
      'The type of information the user is looking for (e.g., lab test, turnaround time, protocol information).' + 
      'If none can be determined, return null.'
    ),
});
export type IntelligentSearchOutput = z.infer<typeof IntelligentSearchOutputSchema>;

export async function intelligentSearch(input: IntelligentSearchInput): Promise<IntelligentSearchOutput> {
  return intelligentSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentSearchPrompt',
  input: {schema: IntelligentSearchInputSchema},
  output: {schema: IntelligentSearchOutputSchema},
  prompt: `You are an AI assistant designed to understand user search queries related to lab tests, turnaround times, and protocol information.

  Your goal is to:
  1.  Correct the user's query to be more precise and accurate.
  2.  Identify the type of information the user is seeking (lab test, turnaround time, or protocol information).

  Input Query: {{{query}}}

  Respond with a JSON object that follows this schema:
  {
    "correctedQuery": "<corrected search query>",
    "informationType": "<lab test | turnaround time | protocol information | null>"
  }

  Ensure the informationType field accurately reflects the user's intent. If the query is ambiguous or doesn't clearly fall into one of the categories, set informationType to null.
  `,
});

const intelligentSearchFlow = ai.defineFlow(
  {
    name: 'intelligentSearchFlow',
    inputSchema: IntelligentSearchInputSchema,
    outputSchema: IntelligentSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
