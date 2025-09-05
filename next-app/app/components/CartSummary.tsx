interface CartSummaryProps {
    total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
    return (
        <div className="flex items-center gap-4">
        <div className="bg-white border px-6 py-2 rounded-lg shadow text-lg font-bold">
            合計 ￥{total.toLocaleString()}(税込)
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg shadow">
            注文を確定する
        </button>
        </div>
    );
}
