"use client";

import Image from "next/image";

interface OrderProductCardProps {
    name: string;
    price: string;
    image: string;
    }

export default function OrderProductCard({ name, price, image }: OrderProductCardProps) {
    return (
        <div className="rounded-xl shadow p-4 border text-black bg-white">
        <Image
            src={image}
            alt={name}
            width={600}
            height={350}
            className="rounded-lg w-full h-auto"
        />
        <div className="mt-4 flex justify-between items-center">
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-base text-black font-semibold">{price}</p>
        </div>
        </div>
    );
}
