export default function OrderOptions() {
    return (
        <div className="flex flex-col gap-4">
        <div>
            <p className="font-bold">個数</p>
            <div className="flex items-center gap-4 mt-2">
            <button className="px-3 py-1 bg-gray-200 rounded">−</button>
            <span className="font-bold text-lg">1</span>
            <button className="px-3 py-1 bg-gray-200 rounded">＋</button>
            </div>
        </div>

        <div>
            <p className="font-bold">オプション</p>
            <ul className="list-disc list-inside text-gray-700">
            <li>text</li>
            <li>text</li>
            <li>text</li>
            </ul>
        </div>

        <div className="mt-4">
            <p className="font-bold">合計</p>
            <p className="text-xl font-bold text-red-500">￥1,100(税込)</p>
        </div>
        </div>
    );
}
