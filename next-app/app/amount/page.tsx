import StepBar from "@/app/components/StepBar";
import CancelButton from "@/app/components/CancelButton";
import OrderProduct from "@/app/components/OrderProduct";
import OrderOptions from "@/app/components/OrderOptions";
import BottomButtons from "@/app/components/BottomButtons";

export default function OrderPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col bg-white max-w-[1280px] max-h-[800px] w-full h-full mx-auto shadow-lg rounded-xl overflow-hidden">
                {/* 上部 */}
                <StepBar current="amount" />
                <CancelButton />

                {/* 中央エリア */}
                <div className="flex flex-1 px-6 py-4 gap-6">
                    {/* 左：商品カード */}
                    <div className="flex-1">
                        <OrderProduct
                            name="ハンバーグ"
                            price="¥1,000(税込)"
                            image="/img/hamburg/hamburg-1.jpg"
                        />
                    </div>
                    <OrderOptions />
                </div>

                {/* 下部ボタン */}
                <BottomButtons />
            </div>
        </div>
    );
}
