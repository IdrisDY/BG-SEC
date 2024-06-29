import { IconButton } from "@chakra-ui/react";

const CustomIconButton = ({ dark, icon, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      icon={icon}
      variant={"ghost"}
      sx={{
        _hover: {
          background: dark ? "#FFFFFF1A" : "#E6F7FF",
        },
        width: "fit-content",
      }}
    />
  );
};

export default CustomIconButton;
