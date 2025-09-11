    interface CartSummaryProps {
    total: number;
    }

    import {useRouter} from "next/navigation";

    export default function CartSummary({ total }: CartSummaryProps) {

    const router = useRouter();

    return (
        <div className="flex items-center gap-4">
        <div className="bg-white border pt-3 px-5 rounded-lg h-15 shadow text-black text-xl font-bold">
            合計 ￥{total.toLocaleString()}(税込)
        </div>
        <button
            onClick={() => router.push('/top')}
            className="bg-red-500 hover:bg-red-600 text-white h-15 w-70 font-bold text-4xl rounded-4xl text-lg shadow"
        >
            注文を確定する
        </button>
        </div>
    );
    }
