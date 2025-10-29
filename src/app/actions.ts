'use server';

import { chatbotLeadQualification } from '@/ai/flows/chatbot-lead-qualification';

export async function askChatbot(history: { role: string; content: string }[], prompt: string) {
  try {
    const result = await chatbotLeadQualification({ prompt });
    return result.response;
  } catch (error) {
    console.error('Error in chatbot action:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
}
