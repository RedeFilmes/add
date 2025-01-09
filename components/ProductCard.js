function ProductCard({ product, onAddToCart }) {
    const [quantity, setQuantity] = React.useState(1);
    const [isAdding, setIsAdding] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);
    const [toastConfig, setToastConfig] = React.useState({ message: '', type: 'success' });

    const handleIncrement = () => {
        try {
            setQuantity(prev => prev + 1);
        } catch (error) {
            reportError(error);
        }
    };

    const handleDecrement = () => {
        try {
            setQuantity(prev => Math.max(1, prev - 1));
        } catch (error) {
            reportError(error);
        }
    };

    const handleAddToCart = async () => {
        try {
            setIsAdding(true);
            await onAddToCart({ ...product, quantity });
            setQuantity(1);
            setToastConfig({
                message: 'Produto adicionado ao carrinho',
                type: 'success'
            });
            setShowToast(true);
        } catch (error) {
            reportError(error);
            setToastConfig({
                message: 'Erro ao adicionar produto',
                type: 'error'
            });
            setShowToast(true);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <div className="relative group animate-fade-in" data-name="product-card">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover-scale">
                <div className="relative overflow-hidden rounded-lg">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        data-name="product-image"
                    />
                    <span className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600 shadow-sm">
                        {product.category}
                    </span>
                </div>
                <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold line-clamp-2" data-name="product-name">
                        {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-green-600" data-name="product-price">
                        R$ {product.price.toFixed(2)}
                    </p>
                    <div className="space-y-3" data-name="product-actions">
                        <div className="flex items-center justify-center border rounded-lg bg-gray-50">
                            <button 
                                onClick={handleDecrement}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                                data-name="decrease-quantity"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                </svg>
                            </button>
                            <span className="px-4 py-2 font-medium" data-name="quantity">{quantity}</span>
                            <button 
                                onClick={handleIncrement}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                                data-name="increase-quantity"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            disabled={isAdding}
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                            data-name="add-to-cart"
                        >
                            {isAdding ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Adicionar ao Carrinho
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {showToast && (
                <Toast 
                    message={toastConfig.message}
                    type={toastConfig.type}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
}
