import InputMain from "@/app/components/Inputs/BigTextInput";

export default function Home() {
  return (
    <>
      <section className="min-h-screen  flex flex-col">
        <div className="flex-1">
          {/* Your chat history/messages can go here */}
        </div>

        {/* Sticky Input Bar */}
        <div className="sticky bottom-0  z-10">
          <InputMain />
        </div>
      </section>
    </>
  );
}
