interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

const items: Item[] = [
    { id: 1, name: "ハンバーグ", price: 1000, imageUrl: "/img/hamburg/hamburg-1.jpg", quantity: 1 },
    { id: 2, name: "パスタ", price: 800, imageUrl: "/img/pasta/pasta.jpg", quantity: 1 },
    { id: 3, name: "スープ", price: 600, imageUrl: "/img/soup/soup-1.jpg", quantity: 1 },
    { id: 4, name: "パンケーキ", price: 600, imageUrl: "/img/dessert/dessert-1.jpg", quantity: 1 },
];

export default function OrderList() {
    return (
        <div className="bg-white">
            <div className="flex justify-between font-bold text-2xl border-b pb-2 px-5 mb-2 mt-5">
                {/* 左側 */}
                <span>商品</span>

                {/* 右側 */}
                <div className="flex gap-20 pr-5">
                <span className="pr-8">価格</span>
                <span>数量</span>
            </div>
        </div>


        {items.map((item) => (
            <div
            key={item.id}
            className="flex justify-between items-center gap-4 py-5 px-2 shadow-sm shadow-x-2 my-4 last:border-none rounded-xl"
            >
                <div className="flex items-center gap-2">
                    <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                    />
                    <span className="text-2xl font-bold pl-5">{item.name}</span>
                </div>
                <div className="flex justify-end gap-20">
                    <span className="text-2xl font-bold text-left">￥{item.price.toLocaleString()}(税込)</span>
                    <span className="text-2xl font-bold mr-12">{item.quantity}</span>
                </div>
            </div>
        ))}
        </div>
    );
}
