import { HStack, Text, VStack } from "native-base";
import React, { useEffect } from "react";

const RightPanel = ({ node, nodeSel, template, setTemplate }: any) => {
  useEffect(() => {
    console.log("RightPanel");
    console.log(template);
  }, [template]);
  return (
    <VStack w="72" h="100vh">
      <VStack>
        <Text>Roles</Text>
        {(template.roles !== undefined) && (
          template.roles.map((role: any, i: any) => {
            return (
              <HStack space="2">
                <Text key={i}>{role.roleId}</Text>
                <Text key={i}>{role.roleName}</Text>
              </HStack>
            );
          })
        )}
      </VStack>
    </VStack>
  );
};

export default RightPanel;
