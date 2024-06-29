import { HiOutlineMicrophone } from "react-icons/hi2";
import { BiMicrophoneOff } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const MessageComponent = ({ steps, msg, step }) => {
  const [isReading, setIsReading] = useState(false);
  const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState(null);

  const isPreviousValueItem = step.id === "greet";
  const previousValueMsg = `Great ${steps?.fullname?.value}, Nice to meet you!`;
  console.log(steps, step);

  useEffect(() => {
    // Create a new SpeechSynthesis instance
    const instance = window.speechSynthesis;
    setSpeechSynthesisInstance(instance);

    return () => {
      // Clean up the speech synthesis instance if the component unmounts
      if (instance && instance.speaking) {
        instance.cancel();
      }
    };
  }, []);

  const toggleReadMessage = () => {
    if (isReading) {
      // Stop reading
      if (speechSynthesisInstance && speechSynthesisInstance.speaking) {
        speechSynthesisInstance.cancel();
      }
    } else {
      // Start reading
      if (speechSynthesisInstance) {
        const utterance = new SpeechSynthesisUtterance(msg);
        utterance.voice = speechSynthesisInstance
          .getVoices()
          .find((voice) => voice.name === "Google US English");
        speechSynthesisInstance.speak(utterance);
      }
    }
    setIsReading((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-between px-3 pt-5 bg-transparent w-full">
      <p>{isPreviousValueItem ? previousValueMsg : msg}</p>
      <IconButton
        variant="ghost"
        sx={{
          display: "flex",
          justifyItems: "end",
          color: "#DA8E23",
          border: "1px solid #DA8E23",
          borderRadius: "50%",
          marginLeft: "auto",
        }}
        onClick={toggleReadMessage}
        icon={isReading ? <HiOutlineMicrophone /> : <BiMicrophoneOff />}
      />
    </div>
  );
};

export default MessageComponent;
