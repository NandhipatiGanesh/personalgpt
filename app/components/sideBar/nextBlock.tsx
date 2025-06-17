import HeadingWithEdit from "../ShotHeader/heading";
import MainLinks from "../ShotHeader/mainLinks";
import TodaysChats from "../ShotHeader/todayChats";
import PrevChats from "../ShotHeader/prevChats";
import UpgradeBox from "../ShotHeader/upGradeBox";
import { motion } from "framer-motion";

export default function NextBar({ NextBarOpen }: { NextBarOpen: boolean }) {
  return (
    <>
      <motion.section
       initial={wrapperVariants}
        variants={wrapperVariants}
        // animate={NextBarOpen ? "open" : "closed"}
        className={`md:flex md:flex-col  lg:flex lg:flex-col w-80 h-screen bg-[#F8FAFC] overflow-y-auto scrollbar-hide border-l border-r border-[#E2E8F0]  duration-3000 ease-in-out ease-in-out transform
        ${ NextBarOpen
            ? "flex flex-col z-50 fixed left-0 "
            : "hidden "
        }
        `}
      >
        <div>
          <HeadingWithEdit />
        </div>
        <div>
          <MainLinks />
        </div>
        <div>
          <TodaysChats />
        </div>
        <div>
          <PrevChats />
        </div>
        <div
          className="sticky bottom-0 w-full bg-[#F8FAFC] hover:bg-white"
          style={{
            bottom: "0 ",
          }}
        >
          <UpgradeBox />
        </div>
      </motion.section>
    </>
  );
}
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
