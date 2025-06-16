import Link from "next/link";

export default function TodaysChats() {
  const chatLinks = [
    { label: "Design a landing page for AI startup", href: "#" },
    { label: "Summarize blog on USDT Flash Software", href: "#" },
    { label: "Fix CSS grid layout issue", href: "#" },
    { label: "Create marketing plan for Elementor templates", href: "#" },
    { label: "Translate portfolio page to Portuguese", href: "#" },
  ];

  return (
    <section className=" py-6 w-full border-b border-[#dedede]">
      <p className="px-6 text-[18px] font-bold text-slate-800 mb-6">Today</p>
      <ul className="space-y-2 w-full">
        {chatLinks.map((chat, idx) => (
          <li key={idx}>
            <Link
              href={chat.href}
              className="px-6 py-3  hover:bg-[#EEF2FF] flex items-center gap-3 text-sm font-medium text-slate-800 hover:text-black transition-all hover:scale-[1.02] hover:border-r-4 hover:border-[#4F46E5]"
              style={{
                letterSpacing: "0.3px",
              }}
            >
              {chat.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
