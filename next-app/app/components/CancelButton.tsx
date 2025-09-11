import Link from "next/link";

export default function CancelButton() {
    return (
        <button className="absolute top-4 right-6 bg-gray-300 text-white px-4 py-2 rounded-full w-[264px] h-[97px] text-[30px] font-bold">
        <Link href="/top">
        キャンセル
        </Link>
        </button>
    );
}
