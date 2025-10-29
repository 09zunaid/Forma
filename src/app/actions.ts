'use server';

import { chatbotLeadQualification } from '@/ai/flows/chatbot-lead-qualification';

export async function askChatbot(history: { role: string; content: string }[], prompt: string) {
  try {
    const result = await chatbotLeadQualification({ history, prompt });
    return result.response;
  } catch (error) {
    console.error('Error in chatbot action:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
}

export async function sendEmail(formData: { name: string; email: string; message: string; }) {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:mohammadzunaid83@gmail.com?subject=New Message from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${name}%0AEmail:%20${email}`;
    
    // This is a server action, but we can't open a mailto link on the server.
    // The logic has been moved to the form itself.
    // In a real application, this server action would use a service like Resend or Nodemailer
    // to send an email from the backend.
    console.log('Attempted to send email with link:', mailtoLink);
    
    // For now, we'll just log it and return success. The client-side will handle the mailto link.
    if (typeof window !== 'undefined') {
        window.location.href = mailtoLink;
    } else {
        console.log("Cannot open mailto link on the server.");
    }
    
    return { success: true };
}
