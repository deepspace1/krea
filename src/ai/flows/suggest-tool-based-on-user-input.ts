'use server';
/**
 * @fileOverview This file implements a Genkit flow to suggest the most appropriate tool (Image, Video, Edit, Video Lipsync, Motion Transfer, or Train) based on user input.
 *
 * - suggestTool - A function that suggests a tool based on user input.
 * - SuggestToolInput - The input type for the suggestTool function.
 * - SuggestToolOutput - The return type for the suggestTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestToolInputSchema = z.object({
  userInput: z.string().describe('The user input describing the desired task.'),
});
export type SuggestToolInput = z.infer<typeof SuggestToolInputSchema>;

const SuggestToolOutputSchema = z.object({
  suggestedTool: z.string().describe('The most appropriate tool for the task (Image, Video, Edit, Video Lipsync, Motion Transfer, or Train).'),
  toolLink: z.string().describe('A direct link to the suggested tool.'),
});
export type SuggestToolOutput = z.infer<typeof SuggestToolOutputSchema>;

export async function suggestTool(input: SuggestToolInput): Promise<SuggestToolOutput> {
  return suggestToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestToolPrompt',
  input: {schema: SuggestToolInputSchema},
  output: {schema: SuggestToolOutputSchema},
  prompt: `Based on the user's input, suggest the most appropriate tool from the following options: Image, Video, Edit, Video Lipsync, Motion Transfer, or Train. Provide a direct link to the suggested tool.

User Input: {{{userInput}}}

Suggested Tool:`,
});

const suggestToolFlow = ai.defineFlow(
  {
    name: 'suggestToolFlow',
    inputSchema: SuggestToolInputSchema,
    outputSchema: SuggestToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
