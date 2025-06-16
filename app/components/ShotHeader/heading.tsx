import CrownSvgIcon from "@/public/icons/CrownSvg";
import PencilSvgIcon from "@/public/icons/PencilSvg";
export default function HeadingWithEdit() {
  return (
    <>
      <div className="flex justify-between items-center  px-6 py-5 border-b-1 border-[#dedede]">
        <div className="flex items-center gap-2">
          <CrownSvgIcon />
          <h1 className="text-xl font-bold text-gray-900">
            <span className="font-semibold">sloth</span>GPT
          </h1>
        </div>
        <button className="cursor-pointer p-2 rounded-full border border-gray-300 hover:bg-gray-100 duration-300 transition-all ease-in-out hover:bg-zinc-50 hover:scale-[1.02]">
          <PencilSvgIcon />
        </button>
      </div>
    </>
  );
}
