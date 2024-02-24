'use client'
import React from "react";
import {Modal} from "@/components/ui/modal";
import {productPreviewHook} from "@/hooks/product-preview-hook";
import ProductGallery from "@/components/product-gallery";
import ProductDetails from "@/components/product-details";

const ProductPreviewModal:React.FC = () => {
  const useProductPreviewHook = productPreviewHook();
  const product = productPreviewHook((state) => state.data);

  if (!product) return null;

  return (
    <Modal
      open={useProductPreviewHook.isOpen}
      onClose={useProductPreviewHook.onClose}
    >
      <div className={"grid w-full grid-cols-1 items-center gap-x-6 gap-y-6 sm:grid-cols-12 lg:gap-x-8"}>
        <div className="sm:col-span-4 lg:col-span-5">
          <ProductGallery images={product.images} />
        </div>

        <div className={"col-span-8 lg:col-span-7"}>
          <ProductDetails data={product} />
        </div>
      </div>
    </Modal>
  )
}

export default ProductPreviewModal;
