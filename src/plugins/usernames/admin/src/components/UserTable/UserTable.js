import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";
import Trash from "@strapi/icons/Trash";
import Plus from "@strapi/icons/Plus";

export default function UserTable({ userData, deleteUser, setShowModal }) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowModal(true)} icon={<Plus />}>
            Add a user
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">User</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Age</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {userData.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>
                  <Typography textColor="neutral800">{user.id}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{user.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{user.age}</Typography>
                </Td>
                <Td>
                  <Flex style={{ justifyContent: "end" }}>
                    <Box paddingLeft={1}>
                      <IconButton
                        onClick={() => deleteUser(user)}
                        label="Delete"
                        noBorder
                        icon={<Trash />}
                      />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
