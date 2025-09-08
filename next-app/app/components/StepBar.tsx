"use client";

interface Props {
    current?: "menu" | "option" | "amount";
}

export default function OrderTop({ current = "menu" }: Props) {
  // ステップ情報
    const steps = [
        { key: "menu", label: "メニュー選択" },
        { key: "option", label: "オプション選択" },
        { key: "amount", label: "数量選択" },
    ] as const;

    return (
        <div className="relative p-4 h-[120px] font-bold ml-5">
            {steps.map((step, index) => (
                <div
                    key={step.key}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                        left: `${index * 250}px`, // 横に少しずつずらす
                        zIndex: steps.length - index, // 左側ほど z-index を大きく
                    }}
                >
                <div className="relative w-[307px] h-[100px]">
                    {/* 外側の白い枠線 */}
                    <div className="absolute top-1/2 left-0 w-[307px] h-[100px] -translate-y-1/2 clip-arrow bg-white" />

                    {/* 内側のオレンジ背景 */}
                    <div
                        className={`absolute top-1/2 left-[2px] w-[301px] h-[91px] -translate-y-1/2 clip-arrow-inner ${
                        current === step.key ? "bg-orange-500" : "bg-orange-200 opacity-80"
                        }`}
                    />

                    {/* テキスト */}
                    <span className="absolute inset-0 flex items-center justify-start pl-15 ml-5 text-xl text-white">
                        {step.label}
                    </span>
                    </div>

                </div>
            ))}
        </div>
    );
}
