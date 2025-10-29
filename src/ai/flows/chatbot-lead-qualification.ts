'use server';

/**
 * @fileOverview A chatbot lead qualification AI agent.
 * 
 * - chatbotLeadQualification - A function that handles the chatbot lead qualification process.
 * - ChatbotLeadQualificationInput - The input type for the chatbotLeadQualification function.
 * - ChatbotLeadQualificationOutput - The return type for the chatbotLeadQualification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotLeadQualificationInputSchema = z.object({
  prompt: z.string().describe('The user prompt for the chatbot.'),
});
export type ChatbotLeadQualificationInput = z.infer<
  typeof ChatbotLeadQualificationInputSchema
>;

const ChatbotLeadQualificationOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user prompt.'),
});
export type ChatbotLeadQualificationOutput = z.infer<
  typeof ChatbotLeadQualificationOutputSchema
>;

export async function chatbotLeadQualification(
  input: ChatbotLeadQualificationInput
): Promise<ChatbotLeadQualificationOutput> {
  return chatbotLeadQualificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotLeadQualificationPrompt',
  input: {schema: ChatbotLeadQualificationInputSchema},
  output: {schema: ChatbotLeadQualificationOutputSchema},
  prompt: `You are a chatbot for a website design and development agency. Your primary goals are to answer user questions, provide contact information (phone number: 7569370322, email: mohammadzunaid83@gmail.com), and schedule a free consultation via Calendly.

  Here is the user\'s prompt:
  {{prompt}}`,
});

const chatbotLeadQualificationFlow = ai.defineFlow(
  {
    name: 'chatbotLeadQualificationFlow',
    inputSchema: ChatbotLeadQualificationInputSchema,
    outputSchema: ChatbotLeadQualificationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
