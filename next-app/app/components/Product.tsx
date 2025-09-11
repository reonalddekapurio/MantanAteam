"use client";


import Image from "next/image";

interface OrderProductCardProps {
    name: string;
    price: string;
    image: string;
}

export default function OrderProductCard({ name, price, image }: OrderProductCardProps) {
    return (
        <div className="rounded-xl shadow p-2 border bg-white">
        <Image
            src={image}
            alt={name}
            width={600}
            height={350} 
            className="rounded-lg w-full h-auto"
        />
        <div className="mt-2">
            <h2 className="font-bold truncate">{name}</h2>
            <p className="text-sm">{price}</p>
        </div>
        </div>
    );
}
