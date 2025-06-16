import HeadingWithEdit from "../ShotHeader/heading";
import MainLinks from "../ShotHeader/mainLinks";
import TodaysChats from "../ShotHeader/todayChats";
import PrevChats from "../ShotHeader/prevChats";
import UpgradeBox from "../ShotHeader/upGradeBox";
export default function NextBar() {
  return (
    <>
      <section className="w-80 h-screen bg-[#F8FAFC] overflow-y-auto scrollbar-hide">
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
      </section>
    </>
  );
}
