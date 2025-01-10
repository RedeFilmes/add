function BestSellers({ onAddToCart }) {
    const bestSellers = [
        {
            id: 'best-1',
            name: 'Maracuja Com Hortelã (Feito Com Poupa e Leite Integral)',
            price: 5.50,
            image: 'img/Maracujacom.png',
            category: 'Vitaminas',
            sales: 150
        },
        {
            id: 'best-2',
            name: 'Uva Verde Sem Hortelã (Feito Com a Fruta e Leite Integral)',
            price: 5.50,
            image: 'img/uvaverdesem.png',
            category: 'Vitaminas',
            sales: 120
        },
        {
            id: 'best-3',
            name: 'Morango Sem Hortelã (Feito Com Poupa e Leite Integral)',
            price: 5.50,
            image: 'img/morangosem.png',
            category: 'Vitaminas',
            sales: 200
        },
        {
            id: 'best-4',
            name: 'Laranja Com Hortelã (Feito Com Poupa e Leite Integral)',
            price: 5.50,
            image: 'img/laranjacom.png',
            category: 'Vitaminas',
            sales: 300
        }
    ];

    return (
        <div className="mb-8" data-name="best-sellers">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Mais Vendidos</h2>
                <div className="flex items-center text-green-600">
                    <span className="text-sm font-medium">       </span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="      " />
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestSellers.map(product => (
                    <div 
                        key={product.id} 
                        className="relative bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                        data-name={`best-seller-${product.id}`}
                    >
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            TOP 300ML
                        </div>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-green-600">
                                    R$ {product.price.toFixed(2)}
                                </span>
                                <button
                                    onClick={() => onAddToCart({ ...product, quantity: 1 })}
                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
