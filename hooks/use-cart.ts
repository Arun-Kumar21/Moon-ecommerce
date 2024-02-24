import {Product} from "@/type";
import { create } from "zustand";
import { persist , createJSONStorage } from "zustand/middleware";
import {toast} from "react-hot-toast";

interface CartType {
  items : Product[];
  addItem : (data : Product) => void;
  removeItem : (id : string) => void;
  removeAll : () => void
}

export const useCart = create(
  persist<CartType>((set , get)=>({
    items : [],
    addItem : (data:Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        toast.error("Item already in Cart");
      }

      else {
        set({items : [...get().items , data]});
        toast.success("Item added to cart")
      }
    },
    removeItem : (id:string) => {
      set({items : [...get().items.filter((item)=> item.id !== id)]});
      toast.success("Item removed from cart")
    },
    removeAll : () => set({items : []}),
  }), {
    name : "cart-storage",
    storage : createJSONStorage(()=>localStorage)
  })
)