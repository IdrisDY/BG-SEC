// components/IframeModal.js
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
const IframeModal = ({
  url = "https://services.vfdtech.ng/",
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const receiveMessage = (event) => {
      // Ensure messages are only accepted from trusted sources
      if (event.origin !== url) {
        return;
      }
      console.log(event.data.data);
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [event]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Validate BVN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src={url}
              width="100%"
              height="400px"
              style={{ border: "none" }}
              title="Iframe Modal"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IframeModal;
