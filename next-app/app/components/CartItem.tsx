"use client";

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    onUpdate: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export default function CartItem({
    id,
    name,
    price,
    imageUrl,
    quantity,
    onUpdate,
    onRemove,
}: CartItemProps) {
    return (
        <div className="grid grid-cols-4 items-center gap-4 py-3 border-b last:border-none">
        {/* 商品名 + 画像 */}
        <div className="flex items-center gap-2">
            <img src={imageUrl} alt={name} className="w-12 h-12 rounded-md object-cover" />
            <span>{name}</span>
        </div>

        {/* 価格 */}
        <span>￥{price.toLocaleString()}(税込)</span>

        {/* 数量操作 */}
        <div className="flex items-center gap-2">
            <button
            onClick={() => onUpdate(id, Math.max(1, quantity - 1))}
            className="px-2 py-1 border rounded-full"
            >
            －
            </button>
            <span className="font-bold">{quantity}</span>
            <button
            onClick={() => onUpdate(id, quantity + 1)}
            className="px-2 py-1 border rounded-full"
            >
            ＋
            </button>
        </div>

        {/* 削除 */}
        <button
            onClick={() => onRemove(id)}
            className="bg-gray-300 px-4 py-2 rounded-lg shadow"
        >
            削除
        </button>
        </div>
    );
}
