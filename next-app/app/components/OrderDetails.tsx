"use client";

interface OrderDetailsProps {
    name: string;
}

export default function OrderDetails({ name }: OrderDetailsProps) {
    return (
        <div className="w-1/3 border-l border-black pl-6 flex flex-col ">
            <h2 className="font-bold text-3xl text-black mt-2 mx-3">{name}</h2>
        {/* オプションや数量選択をここに追加予定 */}
        </div>
    );
}
