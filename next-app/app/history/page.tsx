import BackButton from "@/app/components/BackButton";
import Products from "@/app/components/HistoryProduct";
import SideMenu from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";

export default function OrdersPage() {
    return (
        <div className="flex flex-col h-[800px] mx-auto bg-white">
        {/* 上部ボタン */}
        <div className="absolute top-4 left-4">
            <BackButton />
        </div>

        {/* 注文リスト */}
        <div className="absolute top-20 left-6 right-48 bottom-20 overflow-y-auto">
            <Products />
        </div>

        {/* 右メニュー */}
        <div className="absolute top-20 right-6 flex flex-col gap-4">
            <SideMenu />
        </div>

        {/* 左下インジケーター */}
        <div className="absolute bottom-6 left-6">
            <Number />
        </div>
        </div>
    );
}
