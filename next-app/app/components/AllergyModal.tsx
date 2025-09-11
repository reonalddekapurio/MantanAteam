
   "use client";
   import Image from "next/image";

   type GuideModalProps = {
  onClose: () => void;
};
   
   export default function AllergyModal({onClose}: GuideModalProps) {
        return (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white w-[925px] h-[680px] relative flex flex-col items-center justify-start rounded-xl pt-8">
        <p className="text-4xl font-bold text-center">
          アレルギー表
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>

            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>

            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>

            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>

            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>

            <div className="bg-[#FFBD6F] w-60 h-44 rounded-3xl text-4xl text-white flex flex-col justify-center items-center gap-4 ">
                <Image
                src="/usiicon.svg"
                alt="allergy-usi"
                width={60}
                height={60}
                />
                牛肉
            </div>
        </div>
        


       
        <button
          onClick={onClose}
          className="absolute bottom-10 text-black text-3xl font-bold mt-28 bg-gray-300 text-white w-[191px] h-24 rounded-full shadow"
        >
          戻る
        </button>

        
      </div>
    </div>
        );
    }