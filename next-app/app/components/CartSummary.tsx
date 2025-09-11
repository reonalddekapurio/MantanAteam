interface CartSummaryProps {
    total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
    return (
        <div className="flex items-center gap-4">
        <div className="flex items-center  bg-white border px-9 rounded-lg shadow text-[30px] font-bold w-[338px] h-[67px]">
            合計 ￥{total.toLocaleString()}(税込)
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-[30px] font-bold  shadow w-[357px] h-[67px]">
            注文を確定する
        </button>
        </div>
    );
}
