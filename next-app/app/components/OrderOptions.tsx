export default function OrderOptions() {
    return (
        <div className="w-1/3 border-l border-black pl-10 flex flex-col gap-6">
            <div>
                <p className="font-bold text-black text-3xl mb-5">個数</p>
                <div className="flex items-center gap-4 mt-2">
                    <button className="px-3 py-1 bg-gray-200 rounded">−</button>
                    <span className="font-bold text-lg">1</span>
                    <button className="px-3 py-1 bg-gray-200 rounded">＋</button>
                </div>
            </div>

            <div>
                <p className="font-bold text-3xl text-black">オプション</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="mt-10 pl-3 font-bold text-xl">text</li>
                    <li className="mt-10 pl-3 font-bold text-xl">text</li>
                    <li className="mt-10 pl-3 font-bold text-xl">text</li>
                </ul>
            </div>

            <div className="mt-4">
                <p className="font-bold text-3xl text-black">合計</p>
                <p className="text-4xl font-bold text-black mt-10 pl-25">￥1,100(税込)</p>
            </div>
        </div>
    );
}
