import Image from "next/image"

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:-[350px] sm:h-[450px] md:w-[400px]">
          <Image src='/documents.png' alt="" fill className="object-contain" />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image src='/reading.png' fill alt=""  className="object-contain"/>
        </div>
      </div>
    </div>
  )
}
