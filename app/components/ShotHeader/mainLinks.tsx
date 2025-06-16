import Link from "next/link";
import ProcessorSvgIcon from "@/public/icons/Processor";
import CartIcon from "@/public/icons/Cart";
import BulbSvgIcon from "@/public/icons/bulb";

export default function MainLinks() {
  const links = [
    { href: "/explore", label: "Explore GPTs", Icon: ProcessorSvgIcon },
    { href: "/store", label: "GPT Store", Icon: CartIcon },
    { href: "/instructions", label: "Custom Instructions", Icon: BulbSvgIcon },
  ];

  return (
    <section className="px-6 py-6 w-full border-b-1 border-[#dedede]">
      <ul className="space-y-8 w-full ">
        {links.map(({ href, label, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-3 text-sm font-bold text-[#1E293B] hover:text-black transition-colors duration-300 transition-all ease-in-out  hover:scale-[1.02]"
              style={{
                color: "#1E293B",
                letterSpacing: "0.3px",
              }}
            >
              <Icon />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
