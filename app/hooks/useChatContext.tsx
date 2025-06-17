"use client";
import { createContext, useState, ReactNode } from "react";

type Template = {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_paid?: string[];
    _template_price?: string[];
    _template_preview?: string[];
    _template_link?: string[];
  };
};

export type Message =
  | { role: "user"; text: string }
  | { role: "ai"; text: string }
  | { role: "ai-templates"; text?: string; data?: Template[] };

async function fetchTemplates(): Promise<Template[]> {
  const res = await fetch(
    "https://webcomponents.blog/wp-json/myplugin/v1/templates"
  );
  const json = await res.json();

  console.log("✅ Raw API response:", json);

  // Safeguard fallback
  if (Array.isArray(json)) {
    return json as Template[];
  } else if ("templates" in json && Array.isArray(json.templates)) {
    return json.templates as Template[];
  } else {
    console.error("❌ Unexpected API structure", json);
    return [];
  }
}

export type ChatContextType = {
  messages: Message[];
  addUserMessage: (text: string) => void;
  isLoading: boolean;
};

export const ChatContext = createContext<ChatContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function ChatProvider({ children }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addUserMessage = async (text: string) => {
    // 1. Add the user message
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // 2. Add AI placeholder message with loading shimmer
    setMessages((prev) => [
      ...prev,
      {
        role: "ai-templates",
        text: `Explore beautifully crafted website templates and UI components designed to elevate your web projects with speed, style, and efficiency. Whether you're launching a personal portfolio, a business landing page, or a dynamic admin dashboard, each template is optimized for performance, responsiveness, and ease of customization. From clean hero sections and elegant footers to powerful call-to-action forms and sleek dashboard UIs, these components are built to impress.

Many templates come with free and paid options, giving you access to professional-grade designs at every budget. You can preview each one in action, download instantly, and integrate seamlessly with platforms like Elementor, React, and Next.js.

Whether you're a freelancer, startup founder, or agency developer, our growing collection of ready-to-use components empowers you to build faster, convert better, and stand out with premium-quality visual design.`,
      },
    ]);

    // 3. Fetch templates from API
    const templates = await fetchTemplates();
    console.log("✅ Templates fetched:", templates);

    // 4. Update last AI message with the templates
    setMessages((prev) =>
      prev.map((msg, index) => {
        if (index === prev.length - 1 && msg.role === "ai-templates") {
          return {
            ...msg,
            data: templates,
          };
        }
        return msg;
      })
    );

    setIsLoading(false);
  };

  return (
    <ChatContext.Provider value={{ messages, addUserMessage, isLoading }}>
      {children}
    </ChatContext.Provider>
  );
}
