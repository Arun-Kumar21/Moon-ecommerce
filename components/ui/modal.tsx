"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MOdalProps {
  open: boolean;
  onClose: () => void;
  children : React.ReactNode;
}

export const Modal: React.FC<MOdalProps> = ({
  open,
  onClose,
  children
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className={"w-full"}>
        <div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
