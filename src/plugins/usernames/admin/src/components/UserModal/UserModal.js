import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  NumberInput,
} from "@strapi/design-system";

export default function UserModal({ setShowModal, addUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await addUser({ name: name, age: age });
      setShowModal(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getError = () => {
    if (name.length > 40) {
      return "Content Is Too Long";
    }

    if (age < 0) {
      return "Age Must Be > 0 ";
    }
    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={submitHandler}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add User
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="waht is your name"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <NumberInput
          placeholder="What is your age"
          label="Age"
          name="number"
          hint="Max 100 years"
          error={getError()}
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add User</Button>}
      />
    </ModalLayout>
  );
}
