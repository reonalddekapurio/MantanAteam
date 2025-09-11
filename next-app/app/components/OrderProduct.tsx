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
            className="rounded-lg w-full h-[400px] object-cover"
        />
        <div className="mt-4 flex justify-between items-center">
            <h2 className="font-bold pb-20 text-3xl">{name}</h2>
            <p className="font-bold text-xl text-black font-semibold mt-20 mr-3">{price}</p>
        </div>
        </div>
    );
}
