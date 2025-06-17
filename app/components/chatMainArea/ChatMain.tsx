"use client";

import { useContext } from "react";
import { ChatContext } from "@/app/hooks/useChatContext";
import { FiCpu } from "react-icons/fi";
import Avatar from "../Avatar";
import TemplateCards from "./TemplateCards";

function isTemplateMessage(
  msg: Message
): msg is { role: "ai-templates"; text?: string; data?: Template[] } {
  return msg.role === "ai-templates";
}

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

type Message =
  | { role: "user"; text: string }
  | { role: "ai"; text: string }
  | { role: "ai-templates"; text?: string; data?: Template[] };

export default function ChatMain() {
  const context = useContext(ChatContext);

  if (!context) return null;

  const { messages, isLoading } = context;

  return (
    <div className="flex-1 overflow-y-auto h-screen w-full mx-auto nd:px-4 lg:px-4 md:w-4xl scrollbar-hide mb-8 ">
      {messages.map((msg, idx) => (
        <div key={idx} className="flex items-start gap-3 pt-6 mb-2">
          {/* Avatar */}
          <div className="pt-1">
            {msg.role === "user" ? (
              <Avatar />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#E0E7FF] flex items-center justify-center">
                <FiCpu className="text-indigo-600" />
              </div>
            )}
          </div>

          {/* Message Content */}
          <div className="max-w-[80%]">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs font-semibold text-slate-800">
                {msg.role === "user" ? "You" : "slothGPT"}
              </p>
              <span className="text-[11px] text-gray-400">02:22 AM</span>
            </div>

            {/* AI Template Message */}
            {isTemplateMessage(msg) ? (
              msg.text || msg.data ? (
                <div className="flex flex-col gap-2">
                  {msg.text && (
                    <div className=" flex flex-col gap-4 rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-line bg-white text-slate-800">
                      {msg.text}
                      {!msg.data ? (
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="h-[180px] w-full bg-gray-200 animate-pulse rounded-xl"
                            ></div>
                          ))}
                        </div>
                      ) : (
                        <TemplateCards data={msg.data} />
                      )}
                    </div>
                  )}
                </div>
              ) : null // ❌ Don't render if nothing to show
            ) : (
              <div
                className={`rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-indigo-50 text-gray-900"
                    : "bg-white text-slate-800"
                }`}
              >
                {msg.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
