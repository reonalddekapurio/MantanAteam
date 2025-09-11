"use client";

export default function CallStaffModalButton({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white w-[925px] h-[680px] relative flex flex-col items-center justify-start rounded-xl pt-8">
        <p className="text-4xl font-bold text-center">
          店員呼び出しメニュー
        </p>
        
        <div className="flex  gap-9 mt-24">
            <button className="bg-[#FFAA49] text-white rounded-xl font-bold shadow text-3xl w-[300px] h-[155px]">
                店員さんを呼ぶ
            </button>

            <button　 className="bg-[#FFAA49] text-white rounded-xl font-bold shadow text-3xl w-[300px] h-[155px]">
                デザートを<br/>持ってきてほしい
            </button>
        </div>


       
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

