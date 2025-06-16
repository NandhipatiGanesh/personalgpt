import UpGradeSvg from "@/public/icons/upgrade";
export default function UpgradeBox() {
  return (
    <>
      <section className="py-4 w-full transition-all hover:scale-[1.02] hover:border-r-4 hover:border-[#4F46E5]">
        <div className="flex items-center px-6 gap-2 cursor-pointer">
          <div>
            <UpGradeSvg />
          </div>
          <div>
            <h3
              className="font-bold"
              style={{
                fontSize: "16px",
              }}
            >
              Upgrade Plan
            </h3>
            <p
              className="font-medium"
              style={{
                fontSize: "14px",
              }}
            >
              Get GPT-8 and more
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
