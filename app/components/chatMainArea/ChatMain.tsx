"use client";
import { useContext } from "react";
import { ChatContext } from "@/app/hooks/useChatContext";
import { FiUser, FiCpu } from "react-icons/fi";
import Avatar from "../Avatar";

// You already defined these types, but let's import from context file ideally
type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatMain() {
  const context = useContext(ChatContext);

  // 🛡️ Safe guard for null context
  if (!context) return null;

  const { messages } = context;

  return (
    <>
      <div className="flex-1 overflow-y-auto h-screen w-full  mx-auto px-4 md:w-4xl scrollbar-hide">
        {messages.map((msg: Message, idx: number) => (
          <div key={idx} className="flex items-start gap-3 pt-6 mb-2">
            {/* Avatar */}
            <div className="pt-1">
              {msg.role === "user" ? (
                <Avatar />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#E0E7FF] flex items-center justify-center">
                  <FiCpu className="text-indigo-600" />
                </div>
              )}
            </div>

            {/* Chat Content */}
            <div className="max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-semibold text-slate-800">
                  {msg.role === "user" ? "You" : "slothGPT"}
                </p>
                <span className="text-[11px] text-gray-400">02:22 AM</span>
              </div>

              <div
                className={`rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-indigo-50 text-gray-900"
                    : "bg-white text-slate-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
