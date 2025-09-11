
   "use client";

   type GuideModalProps = {
  onClose: () => void;
};
   
   export default function GuideModal({onClose}: GuideModalProps) {
        return (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white w-[925px] h-[680px] relative flex flex-col items-center justify-start rounded-xl pt-8">
        <p className="text-4xl font-bold text-center">
          操作ガイド
        </p>
        


       
        <button
          onClick={onClose}
          className=" text-black text-3xl font-bold mt-28 bg-gray-300 text-white w-[191px] h-24 rounded-full shadow"
        >
          戻る
        </button>

        
      </div>
    </div>
        );
    }