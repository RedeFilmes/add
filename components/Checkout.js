function Checkout({ cartItems, onBack }) {
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [orderComplete, setOrderComplete] = React.useState(false);
    const [orderDetails, setOrderDetails] = React.useState(null);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        number: '',
        complement: '',
        reference: '',
        neighborhood: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const calculateTotal = () => {
        try {
            return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        } catch (error) {
            reportError(error);
            return 0;
        }
    };

    const handleInputChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (!paymentMethod) {
                throw new Error('Selecione um método de pagamento');
            }

            const response = await createPayment(cartItems, {
                ...formData,
                paymentMethod
            });

            setOrderDetails(response);
            setOrderComplete(true);
        } catch (error) {
            reportError(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderPaymentDetails = () => {
        switch (paymentMethod) {
            case 'pix':
                return (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg" data-name="pix-details">
                        <h4 className="font-semibold mb-4">Pagamento via PIX - Enviar o Comprovante Apos o Pagamento</h4>
                        <div className="flex flex-col items-center space-y-4">
                            <img 
                                src="img/qrcode.jpeg" 
                                alt="QR Code PIX"
                                className="w-48 h-48"
                                data-name="pix-qr-code"
                            />
                            <div className="text-center">
                                <p className="font-medium mb-2">Chave PIX:</p>
                                <div className="flex items-center justify-center gap-2">
                                    <code className="bg-white px-4 py-2 rounded border">
                                    00020101021126580014br.gov.bcb.pix0136adc2092f-9c77-4d83-8e95-021bba6dd2e25204000053039865802BR5923ALEXANDRO M DOS S NAPOL6013SAO JOAO DE M62070503***6304BDE2
                                    </code>
                                    <button 
                                        onClick={() => navigator.clipboard.writeText('market.delivery@email.com')}
                                        className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                                        title="Copiar chave PIX"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Após realizar o pagamento, enviaremos a confirmação para seu WhatsApp
                            </p>
                        </div>
                    </div>
                );
            case 'card-machine':
                return (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg" data-name="card-machine-details">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Pagamento na Entrega com Maquininha</h4>
                                <p className="text-gray-600">
                                    O entregador levará a maquininha de cartão. Aceitamos:
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-gray-500">
                                    <li>• Cartão de Crédito </li>
                                    <li>• Cartão de Débito</li>
                                    <li>• Pix </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    if (orderComplete && orderDetails) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-2xl" data-name="order-success">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Pedido Realizado!</h2>
                    <p className="text-gray-600 mb-6">
                        Seu pedido #{orderDetails.orderId} foi confirmado e está sendo processado.
                    </p>
                    <div className="border-t border-b py-4 mb-6">
                        <p className="text-gray-600">
                            Você será redirecionado para o WhatsApp para confirmar seu pedido.
                        </p>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Continuar Comprando
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8" data-name="checkout">
            <button 
                onClick={onBack}
                className="mb-4 flex items-center text-green-600"
                data-name="back-button"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Voltar ao carrinho
            </button>

            <h2 className="text-2xl font-bold mb-6">Finalizar Pedido</h2>

            <form onSubmit={handleSubmit} className="max-w-2xl" data-name="checkout-form">
                <div className="mb-6" data-name="payment-methods">
                    <h3 className="text-lg font-semibold mb-4">Forma de Pagamento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('pix')}
                            className={`p-4 border rounded-lg text-center ${paymentMethod === 'pix' ? 'border-green-600 text-green-600' : ''}`}
                            data-name="pix-option"
                        >
                            PIX
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('card-machine')}
                            className={`p-4 border rounded-lg text-center ${paymentMethod === 'card-machine' ? 'border-green-600 text-green-600' : ''}`}
                            data-name="card-machine-option"
                        >
                            Maquininha
                        </button>
                    </div>
                    
                    {renderPaymentDetails()}
                </div>

                <div className="space-y-4" data-name="delivery-info">
                    <h3 className="text-lg font-semibold">Informações de Entrega</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome completo"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="name-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="email-input"
                        />
                    </div>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                        data-name="phone-input"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Endereço"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="address-input"
                        />
                        <input
                            type="text"
                            name="number"
                            placeholder="Número"
                            value={formData.number}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="number-input"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="complement"
                            placeholder="Complemento"
                            value={formData.complement}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            data-name="complement-input"
                        />
                        <input
                            type="text"
                            name="reference"
                            placeholder="Ponto de Referência"
                            value={formData.reference}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="reference-input"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="neighborhood"
                            placeholder="Bairro"
                            value={formData.neighborhood}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="neighborhood-input"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="Cidade"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="city-input"
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="Estado"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="state-input"
                        />
                    </div>

                    <input
                        type="text"
                        name="zipcode"
                        placeholder="CEP"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                        data-name="zipcode-input"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || !paymentMethod}
                    className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center justify-center"
                    data-name="submit-button"
                >
                    {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                        'Finalizar Compra'
                    )}
                </button>
            </form>
        </div>
    );
}
