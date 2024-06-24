import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Button from "../button";
import { useTheme } from "styled-components";
const GoBackButton = () => {
  const dark = useTheme().mode === "dark";
  const router = useRouter();
  function goBack() {
    router.back();
  }

  return (
    <Button
      text="Back"
      onClick={goBack}
      customClassName={` flex mt-10 gap-2 rounded-lg  items-center ${
        dark ? "bg-btn_orange" : "bg-white border border-[#D0D5DD] "
      }`}
    >
      {" "}
      <ArrowBackIcon color={dark ? "white" : "black"} />
    </Button>
  );
};

export default GoBackButton;
