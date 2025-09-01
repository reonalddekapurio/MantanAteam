"use client";

import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
    return (
        <div className="rounded-xl shadow p-2 border bg-white">
        <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            className="rounded-lg"
        />
        <div className="mt-2">
            <h2 className="font-bold truncate">{name}</h2>
            <p className="text-sm">{price}</p>
        </div>
        </div>
    );
}
