import DashboardSidebar from "@/components/Dashboard/Sidebar";
import Marquee from "@/components/marquee";
import { TopDashboardBoxes } from "./page";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex   flex-col lg:flex-row w-full relative">
      <DashboardSidebar />
      <div className="absolute top-0 right-0 lg:left-[20%] w-full ">
        <Marquee
          text="New stock called BOA has just been released. | Dangote stock has
        increased with +0.5. | Stanbic IBTC +2.4
"
        />
      </div>
      <main className="max-w-[500px]  w-full mx-auto lg:max-w-full lg:ml-auto lg:mr-0 px-[20px] lg:pl-[40px] lg:w-4/5 lg:pr-[48px] pb-8  pt-[24px] lg:mt-[47px]">
        <TopDashboardBoxes />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
