import { FiPaperclip, FiMic, FiArrowUp } from "react-icons/fi";

export default function InputMain() {
  return (
    <div className="flex h-full w-full flex-col justify-end">
      <div className="flex items-center justify-center w-full px-4 pb-4">
        <div className="flex items-center w-full max-w-3xl rounded-full border border-gray-300 px-4 py-2 shadow-sm bg-white focus-within:ring-1 focus-within:ring-indigo-500">
          {/* Attachment Icon */}
          <FiPaperclip className="text-gray-400 w-5 h-5 mr-3" />

          {/* Input */}
          <input
            type="text"
            placeholder="Message slothGPT..."
            className="flex-1 border-none focus:outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
          />

          {/* Mic Icon */}
          <FiMic className="text-gray-400 w-5 h-5 mr-3" />

          {/* Send Button */}
          <button className="bg-[#5b44f2] p-2 rounded-full text-white hover:bg-[#4b38d1] transition">
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-xs text-gray-400 mb-4">
        <span className="font-medium text-slate-500">slothGPT</span> can make
        mistakes. Check our{" "}
        <span className="underline">Terms & Conditions</span>.
      </p>
    </div>
  );
}
