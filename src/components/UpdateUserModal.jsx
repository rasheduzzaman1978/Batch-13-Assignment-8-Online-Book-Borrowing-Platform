"use client";

import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import { toast } from "react-toastify";

export function UpdateUserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = () => {
    // ⚠️ Demo update (later API connect করতে পারো)
    toast.success("Profile updated successfully 🎉");
    setIsOpen(false);
  };

  return (
    <>
      {/* 🔘 Open Button */}
      <Button color="primary" onClick={() => setIsOpen(true)}>
        Update Profile
      </Button>

      {/* 📦 Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        
        {/* Header */}
        <ModalHeader>Update Profile</ModalHeader>

        {/* Body */}
        <ModalBody className="space-y-4">
          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Photo URL"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </ModalBody>

        {/* Footer */}
        <ModalFooter>
          <Button variant="light" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>

          <Button color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </ModalFooter>

      </Modal>
    </>
  );
}