"use client";

export default function OptionCart() {
    const selected = [
        { name: "ライス（普通盛り）", price: "¥1,000(税込)" },
        { name: "ライス（普通盛り）", price: "¥1,000(税込)" },
        { name: "ライス（普通盛り）", price: "¥1,000(税込)" },
        { name: "ライス（普通盛り）", price: "¥1,000(税込)" },
    ];

    return (
        <div>
        <h2 className="font-bold text-3xl mb-8 text-black">選んだ商品</h2>
        <ul className="space-y-2">
            {selected.map((item, i) => (
            <li
                key={i}
                className="flex justify-between items-center border-b border-black pb-1 pt-5 w-90">

                    <span className="text-lg font-bold text-black">{item.name}</span>
                    <span className="text-lg font-bold text-black">{item.price}</span>
                <button className="text-black font-bold">×</button>
            </li>
            ))}
        </ul>
        </div>
    );
}
