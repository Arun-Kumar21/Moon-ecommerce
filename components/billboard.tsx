import {Billboard as BillboardType} from "@/type";

interface BillboardProps {
  data : BillboardType
}

const Billboard = ({data} : BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})`}} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
              {data.label}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard;