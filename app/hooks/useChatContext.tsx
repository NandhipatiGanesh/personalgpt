"use client";
import { createContext, useState, ReactNode } from "react";

export type Message = {
  role: "user" | "ai";
  text: string;
};

export type ChatContextType = {
  messages: Message[];
  addUserMessage: (text: string) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function ChatProvider({ children }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);

  const addUserMessage = (text: string) => {
    const newMessages: Message[] = [
      ...messages,
      { role: "user", text },
      { role: "ai", text: `You said: ${text}` },
    ];

    setMessages(newMessages);
  };

  return (
    <ChatContext.Provider value={{ messages, addUserMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
