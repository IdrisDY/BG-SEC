const Marquee = ({text}) => {
  return (
    <div class="marquee-container w-full bg-gradient-to-r h-[47px] flex items-center from-red-700 via-red-800 to-red-900 overflow-hidden relative">
      <div class="marquee-content absolute  whitespace-nowrap text-white animate-marquee">
{text}
      </div>
    </div>
  );
};
export default Marquee;
