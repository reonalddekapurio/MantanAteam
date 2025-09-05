
import StepBar from "@/app/components/StepBar";
import CancelButton from "@/app/components/CancelButton";
import ProductImage from "@/app/components/ProductImage";
import OrderOptions from "@/app/components/OrderOptions";
import BottomButtons from "@/app/components/BottomButtons";

export default function OrderPage() {
    return (
        <div className="relative min-h-screen flex flex-col">
        {/* 上部 */}
        <StepBar current="amount" />
        <CancelButton />

        {/* 中央エリア */}
        <div className="flex flex-1 px-12 py-8 gap-12">
            <ProductImage
            imageUrl="/hamburg.jpg"
            name="ハンバーグ"
            price={1000}
            />
            <OrderOptions />
        </div>

        {/* 下部ボタン */}
        <BottomButtons />
        </div>
    );
}
