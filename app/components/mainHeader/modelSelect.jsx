import {
  FiChevronDown,
  FiSettings,
  FiCpu,
  FiGlobe,
  FiZap,
  FiCheck,
} from "react-icons/fi";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Chat gpt 5");

  return (
    <div className="  flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-black   transition-colors duration-300 transition-all ease-in-out  hover:scale-[1.02] cursor-pointer"
        >
          <span className="font-medium text-sm">{selected}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-2xl bg-white shadow-xl absolute top-[120%] md:left-[50%] lg:left-[50%] left-[100%] w-48 overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            setSelected={setSelected}
            selected={selected}
            Icon={FiSettings}
            text="Copilot"
          />
          <Option
            setOpen={setOpen}
            setSelected={setSelected}
            selected={selected}
            Icon={FiCpu}
            text="Claude"
          />
          <Option
            setOpen={setOpen}
            setSelected={setSelected}
            selected={selected}
            Icon={FiGlobe}
            text="Meta"
          />
          <Option
            setOpen={setOpen}
            setSelected={setSelected}
            selected={selected}
            Icon={FiZap}
            text="Gemini"
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, setSelected, selected }) => {
  const isActive = selected === text;

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setSelected(text);
        setOpen(false);
      }}
      className="flex items-center justify-between w-full p-2 text-xs font-medium whitespace-nowrap rounded-xl hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </div>

      {isActive && <FiCheck className="text-indigo-500 w-4 h-4" />}
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
