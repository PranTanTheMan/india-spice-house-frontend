import { createOpenAI } from "@ai-sdk/openai";

const apiKey = process.env.AI_PROVIDER_API_KEY || process.env.OPENAI_API_KEY;
const baseURL = process.env.AI_PROVIDER_BASE_URL || process.env.OPENAI_BASE_URL;
const providerName = process.env.AI_PROVIDER_NAME || undefined;

const provider = createOpenAI({
  apiKey,
  baseURL: baseURL || undefined,
  name: providerName,
});

export function getChatModel() {
  if (!apiKey) {
    throw new Error("Missing AI provider API key.");
  }

  return provider.chat(process.env.AI_MODEL || "gpt-4o-mini");
}
