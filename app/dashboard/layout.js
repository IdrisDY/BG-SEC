import DashboardSidebar from "@/components/Dashboard/Sidebar";
import Marquee from "@/components/marquee";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex relative">
      <DashboardSidebar />
      <div className="absolute top-0 right-0 left-[20%] w-full " >
      <Marquee
        text="New stock called BOA has just been released. | Dangote stock has
        increased with +0.5. | Stanbic IBTC +2.4
"
      />

      </div>
    <main className=" pl-[40px] w-4/5 pr-[48px] pt-[24px] mt-[47px]" >{children}</main>
    </div>
  );
};

export default DashboardLayout;
