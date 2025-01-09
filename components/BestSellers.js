function BestSellers({ onAddToCart }) {
    const bestSellers = [
        {
            id: 'best-1',
            name: 'Banana Prata',
            price: 3.99,
            image: 'https://source.unsplash.com/800x600/?banana',
            category: 'Hortifruti',
            sales: 150
        },
        {
            id: 'best-2',
            name: 'Picanha Premium',
            price: 89.90,
            image: 'https://source.unsplash.com/800x600/?meat',
            category: 'Carnes',
            sales: 120
        },
        {
            id: 'best-3',
            name: 'Leite Integral',
            price: 4.99,
            image: 'https://source.unsplash.com/800x600/?milk',
            category: 'Laticínios',
            sales: 200
        },
        {
            id: 'best-4',
            name: 'Pão Francês',
            price: 0.75,
            image: 'https://source.unsplash.com/800x600/?bread',
            category: 'Padaria',
            sales: 300
        }
    ];

    return (
        <div className="mb-8" data-name="best-sellers">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Mais Vendidos</h2>
                <div className="flex items-center text-green-600">
                    <span className="text-sm font-medium">Ver todos</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
                            TOP
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
