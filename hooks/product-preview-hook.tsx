import {create} from "zustand";
import {Product} from "@/type";

interface ProductPreviewType {
  isOpen : boolean;
  data? : Product;
  onClose : () => void;
  onOpen : (data : Product) => void
}

export const productPreviewHook = create<ProductPreviewType>((set) => ({
  isOpen : false,
  data : undefined,
  onOpen : (data:Product) => set({data , isOpen : true}),
  onClose : () => set({isOpen : false})
}))
