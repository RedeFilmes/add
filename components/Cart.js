function Cart({ isOpen, onClose, cartItems, setCartItems, onCheckout }) {
    const [loading, setLoading] = React.useState(false);

    const calculateTotal = () => {
        try {
            return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        } catch (error) {
            reportError(error);
            return 0;
        }
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        try {
            if (newQuantity === 0) {
                handleRemoveItem(itemId);
                return;
            }
            
            setCartItems(items =>
                items.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: Math.max(0, newQuantity) }
                        : item
                )
            );
        } catch (error) {
            reportError(error);
        }
    };

    const handleRemoveItem = (itemId) => {
        try {
            setCartItems(items => items.filter(item => item.id !== itemId));
        } catch (error) {
            reportError(error);
        }
    };

    const handleCheckout = async () => {
        try {
            setLoading(true);
            onCheckout();
        } catch (error) {
            reportError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
            data-name="cart"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} data-name="cart-overlay"></div>
            <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col" data-name="cart-content">
                <div className="flex items-center justify-between p-4 border-b" data-name="cart-header">
                    <h2 className="text-xl font-bold flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Carrinho
                        <span className="ml-2 text-sm text-gray-500">
                            ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens Entrega R$3,00 Reais)
                        </span>
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        data-name="cart-close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4" data-name="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-8" data-name="empty-cart">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Seu carrinho está vazio</h3>
                            <p className="text-gray-500">Adicione itens para começar suas compras</p>
                            <button 
                                onClick={onClose}
                                className="mt-4 text-green-600 font-medium hover:text-green-700"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div 
                                    key={item.id} 
                                    className="flex items-center gap-4 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                                    data-name={`cart-item-${item.id}`}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                        data-name="item-image"
                                    />
                                    <div className="flex-1 min-w-0" data-name="item-details">
                                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <p className="text-green-600 font-semibold">
                                            R$ {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button 
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                                data-name="decrease-quantity"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                                </svg>
                                            </button>
                                            <span className="w-8 text-center" data-name="item-quantity">{item.quantity}</span>
                                            <button 
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                                data-name="increase-quantity"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        data-name="remove-item"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="border-t p-4 space-y-4 bg-gray-50" data-name="cart-footer">
                        <div className="flex justify-between items-center text-sm text-gray-500" data-name="cart-subtotal">
                            <span>Subtotal</span>
                            <span>R$ {calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500" data-name="cart-delivery">
                            <span>Entrega</span>
                            <span>Adicione R$3,00 Reais Da Entrega Com Total</span>
                        </div>
                        <div className="flex justify-between items-center font-semibold text-lg" data-name="cart-total">
                            <span>Total</span>
                            <span>R$ {calculateTotal().toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                            data-name="checkout-button"
                        >
                            {loading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <div className="flex items-center">
                                    <span>Finalizar Compra</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
