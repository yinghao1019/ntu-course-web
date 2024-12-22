// React 元件規則
// 1. 元件名稱必須大寫開頭
// 2. 元件必須回傳 JSX
// 3. 元件必須是純函式
// 4. 元件必須是無狀態的
// 5. 元件必須是無狀態的
export default function TripCard({ trip }) {
    const { name, price, discountPrice, isDiscounted, image } = trip
    return (
        <div className="card shadow-xl shadow-neutral-900/20 rounded-lg overflow-hidden">
            <img src={image} alt={name} />
            <div className="card-body p-3">
                <h3 className="text-xl font-bold truncate">{name}</h3>
                <div className="flex items-center gap-2">
                    {isDiscounted && (
                        <span className="text-red-500 line-through">${price}</span>
                    )}
                    <span className="text-lg font-semibold text-neutral-500">
                        ${isDiscounted ? discountPrice : price}
                    </span>
                </div>
            </div>
        </div>
    )
}
