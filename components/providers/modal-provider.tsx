'use client'
import {useState , useEffect} from "react";
import ProductPreviewModal from "@/components/product-preview-modal";

const ModalProvider = () => {
  const [isMounted , setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProductPreviewModal  />
    </>
  )
}

export default ModalProvider;