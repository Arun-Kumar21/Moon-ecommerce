'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Image as ImageType} from "@/type";

import {cn} from "@/lib/utils";

interface ProductGalleryProps {
  images : ImageType[]
}

const ProductGallery : React.FC<ProductGalleryProps> = ({images}) => {
  const [activeTab , setActiveTab] = useState(images[0].url);

  useEffect(() => {

  }, [activeTab]);

  return (
      <div className={"my-6 flex md:flex-row flex-col-reverse gap-y-4 gap-x-4 h-full relative"}>
        <div className="relative overflow-hidden">
          {images.map((image)=>(
            <div className="aspect-square w-24 bg-neutral-100 hover:cursor-pointer relative" key={image.id}
                 onMouseEnter={()=>setActiveTab(image.url)}
                 onClick={()=>setActiveTab(image.url)}
            >
              <Image
                src={image.url}
                fill
                alt="image"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="relative md:w-[500px] md:h-[500px] bg-neutral-100 w-full h-[500px] mx-auto border">
          <Image
            src={activeTab}
            alt="image"
            fill
            className="object-contain"
          />
        </div>
      </div>
  )
}

export default ProductGallery;