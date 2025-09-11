"use client";

import CartItem from "./CartItem";

interface CartItemData {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

interface CartListProps {
    items: CartItemData[];
    onUpdate: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export default function CartList({ items, onUpdate, onRemove }: CartListProps) {
    return (
        <div className="mt-4">
            <div className="flex justify-between font-bold text-2xl border-b pb-2 px-5 mb-2 mt-5">
                <span>商品</span>
                <span>価格</span>
                <span>数量</span>
                <span></span>
            </div>
        {items.map((item) => (
            <CartItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onRemove={onRemove}
            />
        ))}
        </div>
    );
}
