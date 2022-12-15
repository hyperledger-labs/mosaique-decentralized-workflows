import { HStack, Modal, Text, VStack } from "native-base";
import { useEffect, useState } from "react";

const TemplateSelectionModal = ({
  modalVisible,
  setModalVisible,
  setTempate,
}: any) => {
  const [templates, setTemplates] = useState<any>([]);

  useEffect(() => {
    getTemplates();
  }, []);

  async function getTemplates() {
    const response = await fetch("http://localhost:3000/template");
    const data = await response.json();
    setTemplates(data);
  }

  async function getTemplateData(id: any) {
    const response = await fetch("http://localhost:3000/template/" + id);
    const data = await response.json();
    setTempate(data);
    console.log(data);
    setModalVisible(false);
  }

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      size="xl"
    >
      <VStack bg="blue.100" w="50vw" h="50vh" rounded={"xl"}>
        <HStack space="40" mx="auto">
          <Text>Templates</Text>
          <button
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Close
          </button>
        </HStack>
        <HStack>
          <VStack mx="auto" my="20" bg="blue.200">
            <Text mx="auto">Templates</Text>
            {templates.map((template: any, i: any) => {
              return (
                <HStack key={i}>
                  <VStack>
                    <Text>{template.name}</Text>
                    <Text>{template.id}</Text>
                  </VStack>
                  <button
                    onClick={() => {
                      getTemplateData(template.id);
                    }}
                  >
                    Select
                  </button>
                </HStack>
              );
            })}
          </VStack>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default TemplateSelectionModal;