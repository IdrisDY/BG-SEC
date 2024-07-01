import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const PortfolioCards = () => {
  const initialVisibility = [
    { id: 0, value: true },
    { id: 1, value: true },
    { id: 2, value: true },
  ];

  const [seeAmount, setSeeAmount] = useState(initialVisibility);

  const portfolioCards = [
    { title: "NGN Portfolio", color: "#E5C162", value: `₦0.0` },
    { title: "USD Portfolio", color: "#E7EB34CC", value: `₦0.0` },
    { title: "My cash balance ", color: "#CCF066", value: `₦0.0` },
  ];

  function toggleAmount(id) {
    setSeeAmount((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  return (
    <section className="grid py-[14px] gap-4 text-font_black mt-[24px] lg:grid-cols-3">
      {portfolioCards.map((item, i) => {
        const isItemInView = seeAmount.find((visibility) => visibility.id === i)
          ?.value;
        return (
          <div
            key={item.title}
            className="border h-[135px] border-outline_orange rounded-lg p-4"
            style={{ backgroundColor: item.color }}
          >
            <span>{item.title}</span>
            <div className="flex items-center justify-between">
              <span className="text-[1.8rem]">
                {isItemInView ? item.value : "****"}
              </span>
              <button
                onClick={() => toggleAmount(i)}
                className="relative w-[20px] h-[20px]"
              >
                {isItemInView ? <FaEye /> : <IoMdEyeOff />}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioCards;
