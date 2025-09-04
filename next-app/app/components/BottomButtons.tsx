export default function BottomButtons() {
    return (
        <div className="flex justify-between mt-8 px-8">
        <button className="bg-gray-300 text-black px-6 py-3 rounded-lg shadow">
            戻る
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow">
            注文カゴに入れる
        </button>
        </div>
    );
}
