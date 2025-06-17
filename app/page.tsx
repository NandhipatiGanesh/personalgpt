"use client";
import InputMain from "@/app/components/Inputs/BigTextInput";
import { ChatProvider } from "@/app/hooks/useChatContext";
import ChatMain from "@/app/components/chatMainArea/ChatMain";

export default function Home() {
  return (
    <ChatProvider>
      <section className="h-screen flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <ChatMain />
        </div>

        {/* Sticky Input Bar */}
        <div className="z-10 sticky bottom-8 ">
          <InputMain />
        </div>
      </section>
    </ChatProvider>
  );
}
