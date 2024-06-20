import Image from "next/image";
const PortfolioCards = () => {
  const portfolioCards = [
    { title: "NGN Portfolio", color: "#E5C162", value: `₦0.0` },
    { title: "USD Portfolio", color: "#E7EB34CC", value: `$0.0` },
    { title: "My cash balance ", color: "#CCF066", value: `₦0.0` },
  ];

  return (
    <section
      className={`grid py-[14px] gap-4 text-font_black mt-[24px] lg:grid-cols-3`}
    >
      {portfolioCards.map((item) => (
        <div
          key={item.title}
          className={`border h-[135px] border-outline_orange rounded-lg p-4`}
          style={{ backgroundColor: item.color }}
        >
          <span>{item.title}</span>
          <div className={`flex items-center justify-between`}>
            <span className={`text-[1.8rem]`}>{item.value}</span>
            <button className={`relative w-[20px] h-[20px]`}>
              <Image src="/Dashboard/eye.svg" layout="fill" alt="see balance" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PortfolioCards;
