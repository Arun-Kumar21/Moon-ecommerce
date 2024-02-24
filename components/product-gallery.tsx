'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Image as ImageType} from "@/type";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {cn} from "@/lib/utils";

interface ProductGalleryProps {
  images : ImageType[]
}

const ProductGallery : React.FC<ProductGalleryProps> = ({images}) => {
  const [activeTab , setActiveTab] = useState(images[0].url);

  return (
      <div className={"my-4"}>
        <Tabs defaultValue={images[0].url} className="flex flex-col-reverse h-full gap-y-4">
          <TabsList className={"flex gap-x-4 p-2 h-full"}>
            {images.map((image) => (
              <TabsTrigger value={image.url} key={image.id} className={cn("bg-slate-200 border h-full rounded-xl transition" , activeTab === image.url && "border border-black")}
                onClick={()=>setActiveTab(image.url)}
              >
                <Image
                  src={image.url}
                  alt={"image"}
                  width={112}
                  height={112}
                  quality={100}
                  className="object-cover object-top w-28 h-28 rounded-xl aspect-square"
                />
              </TabsTrigger>
            ))}
          </TabsList>
          {images.map((image) => (
            <TabsContent value={image.url} key={image.id}>
              <div className={"relative sm:rounded-lg overflow-hidden rounded-xl border max-h-96 items-center w-full"}>
                <Image
                  src={image.url}
                  alt="Image"
                  width={400}
                  height={200}
                  quality={100}
                  className="object-contain rounded-xl w-full max-h-96"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
  )
}

export default ProductGallery;