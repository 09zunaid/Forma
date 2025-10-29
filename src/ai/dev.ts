import {config} from 'dotenv';
config();

import '@/ai/flows/chatbot-lead-qualification';
import {ai} from './genkit';

ai();
