const Marquee = ({text}) => {
  return (
    <div class="marquee-container w-full bg-ticker_gradient h-[47px] flex items-center overflow-hidden relative">
      <div class="marquee-content absolute  whitespace-nowrap text-white animate-marquee">
{text}
      </div>
    </div>
  );
};
export default Marquee;
