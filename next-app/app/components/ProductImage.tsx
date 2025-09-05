interface Props {
    imageUrl: string;
    name: string;
    price: number;
}

export default function ProductImage({ imageUrl, name, price }: Props) {
    return (
        <div className="flex flex-col items-center">
        <img
            src={imageUrl}
            alt={name}
            className="w-[400px] rounded-lg shadow-md"
        />
        <div className="flex justify-between w-full px-4 mt-2">
            <span className="font-bold">{name}</span>
            <span>￥{price.toLocaleString()}(税込)</span>
        </div>
        </div>
    );
}
