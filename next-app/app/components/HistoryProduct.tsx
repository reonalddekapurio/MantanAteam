interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

const items: Item[] = [
    { id: 1, name: "ハンバーグ", price: 1000, imageUrl: "/hamburg.jpg", quantity: 1 },
    { id: 2, name: "パスタ", price: 800, imageUrl: "/pasta.jpg", quantity: 1 },
    { id: 3, name: "スープ", price: 600, imageUrl: "/soup.jpg", quantity: 1 },
    { id: 4, name: "パンケーキ", price: 600, imageUrl: "/pancake.jpg", quantity: 1 },
];

export default function OrderList() {
    return (
        <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-3 font-bold border-b pb-2 mb-2">
            <span>商品</span>
            <span>価格</span>
            <span>数量</span>
        </div>

        {items.map((item) => (
            <div
            key={item.id}
            className="grid grid-cols-3 items-center gap-4 py-3 border-b last:border-none"
            >
            <div className="flex items-center gap-2">
                <img
                src={item.imageUrl}
                alt={item.name}
                className="w-12 h-12 rounded-md object-cover"
                />
                <span>{item.name}</span>
            </div>
            <span>￥{item.price.toLocaleString()}(税込)</span>
            <span>{item.quantity}</span>
            </div>
        ))}
        </div>
    );
}
