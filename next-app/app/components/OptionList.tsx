"use client";

import Image from "next/image";

const options = [
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/img/set/rice.jpg" },
];

export default function OptionList() {
    return (
        <>
        {options.map((opt, i) => (
            <div
            key={i}
            className="rounded-xl shadow border-3xl bg-white flex flex-col"
            >
            <Image
                src={opt.image}
                alt={opt.name}
                width={300}
                height={100}
                className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-2">
                <h2 className="font-bold text-2xl text-black text-left pl-1">{opt.name}</h2>
                <p className="text-ms text-black mt-14 ml-38 font-bold">{opt.price}</p>
            </div>
            </div>
        ))}
        </>
    );
}
