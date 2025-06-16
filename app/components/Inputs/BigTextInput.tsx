// "use client";
// import { useState } from "react";
// import { FiPaperclip, FiMic, FiArrowUp } from "react-icons/fi";
// import SpinnerDemo from "@/app/components/Loaders/spinner-01";

// export default function InputMain() {
//   const [inputvalue, setInputValue] = useState(0);
//   const [runSpinner, setRunSpinner] = useState(false);

//   const handleUserInput = () => {

//       if (inputvalue > 0) {
//         setRunSpinner(true);
//       }

//   };

//   return (
//     <div className="flex h-full w-full flex-col justify-end">
//       <div className="flex items-center justify-center w-full px-4 pb-4">
//         <div className="flex items-center justify-between w-full max-w-3xl rounded-full border border-gray-300 pl-4 pr-2 py-2 shadow-sm bg-white focus-within:ring-1 focus-within:ring-indigo-500">
//           {/* Attachment Icon */}
//           <FiPaperclip className="text-gray-400 w-5 h-5 mr-3" />

//           {/* Input */}
//           <input
//             type="text"
//             onChange={(e) => setInputValue(e.target.value.length)}
//             placeholder="Message slothGPT..."
//             className="flex-1 border-none focus:outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
//           />

//           {/* Mic Icon */}
//           <FiMic className="text-gray-400 w-5 h-5 mr-3" />

//           {/* Send Button */}
//           <button
//             className="bg-[#5b44f2] p-2 rounded-full text-white hover:bg-[#4b38d1] transition cursor-pointer"
//             onClick={handleUserInput}
//           >
//             {runSpinner ? (
//               <>
//                 <span className="w-4 h-4 flex items-center justify-center">
//                   <SpinnerDemo />
//                 </span>
//               </>
//             ) : (
//               <FiArrowUp className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <p className="text-center text-xs text-gray-400 mb-4">
//         <span className="font-medium text-slate-500">slothGPT</span> can make
//         mistakes. Check our{" "}
//         <span className="underline">Terms & Conditions</span>.
//       </p>
//     </div>
//   );
// }
"use client";
import { useState, useContext } from "react";
import { ChatContext } from "@/app/hooks/useChatContext";
import { FiArrowUp, FiMic, FiPaperclip } from "react-icons/fi";
import SpinnerDemo from "../Loaders/spinner-01";

export default function InputMain() {
  const [input, setInput] = useState("");
  const [runSpinner, setRunSpinner] = useState(false);
  const context = useContext(ChatContext);

  if (!context) return null;

  const { addUserMessage } = context;

  const handleSend = () => {
    const trimmed = input.trim();

    if (trimmed.length === 0) {
      setRunSpinner(false);
      return;
    }

    setRunSpinner(true);
    addUserMessage(trimmed);
    setInput("");

    // Optional: Stop spinner after fake delay
    setTimeout(() => {
      setRunSpinner(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center w-full px-4 pb-4">
      <div className="flex items-center w-full max-w-3xl rounded-full border border-gray-300 pl-4 pr-2 py-2 ">
        <FiPaperclip className="text-gray-400 w-5 h-5 mr-3 cursor-pointer" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message slothGPT..."
          className="flex-1 border-none focus:outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <FiMic className="text-gray-400 w-5 h-5 mr-3 cursor-pointer" />
        <button
          onClick={handleSend}
          className="bg-[#5b44f2] p-2 rounded-full text-white hover:bg-[#4b38d1] transition"
        >
          {runSpinner ? (
            <>
              <span className="w-4 h-4 flex items-center justify-center">
                <SpinnerDemo />
              </span>
            </>
          ) : (
            <>
              <FiArrowUp className="w-4 h-4 cursor-pointer" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
