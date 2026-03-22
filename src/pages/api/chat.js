import { convertToModelMessages, streamText } from "ai";
import { buildChatbotSystemPrompt } from "@/lib/chatbot/knowledge";
import { getChatModel } from "@/lib/chatbot/model";

const MAX_RECENT_MESSAGES = 12;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid chat payload." });
  }

  try {
    const modelMessages = await convertToModelMessages(
      messages.slice(-MAX_RECENT_MESSAGES)
    );

    const result = streamText({
      model: getChatModel(),
      system: buildChatbotSystemPrompt(),
      messages: modelMessages,
    });

    result.pipeUIMessageStreamToResponse(res);
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error:
        "The assistant is temporarily unavailable. Please call (952) 942-8010 or email indiaspicehouseep@gmail.com.",
    });
  }
}
