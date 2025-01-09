const mercadoPagoInit = () => {
    try {
        const mp = new MercadoPago('TEST-', {
            locale: 'pt-BR'
        });
        return mp;
    } catch (error) {
        reportError(error);
        return null;
    }
};

const formatOrderForWhatsApp = (items, formData, total) => {
    try {
        const orderDate = new Date().toLocaleString('pt-BR');
        let message = `🛒 *Novo Pedido - Market Delivery*\n`;
        message += `📅 ${orderDate}\n\n`;
        
        message += `📋 *Dados do Cliente*\n`;
        message += `Nome: ${formData.name}\n`;
        message += `Telefone: ${formData.phone}\n`;
        message += `Email: ${formData.email}\n\n`;
        
        message += `📍 *Endereço de Entrega*\n`;
        message += `${formData.address}, ${formData.number}\n`;
        message += formData.complement ? `Complemento: ${formData.complement}\n` : '';
        message += `Bairro: ${formData.neighborhood}\n`;
        message += `Cidade: ${formData.city}\n`;
        message += `Estado: ${formData.state}\n`;
        message += `CEP: ${formData.zipcode}\n`;
        message += `Ponto de Referência: ${formData.reference}\n\n`;
        
        message += `🛍️ *Itens do Pedido*\n`;
        items.forEach(item => {
            message += `▫️ ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });
        
        message += `\n💰 *Total do Pedido: R$ ${total.toFixed(2)}*\n`;
        message += `\n💳 *Forma de Pagamento*\n${formData.paymentMethod}`;

        return encodeURIComponent(message);
    } catch (error) {
        reportError(error);
        return '';
    }
};

const sendToWhatsApp = (items, formData, total) => {
    try {
        const message = formatOrderForWhatsApp(items, formData, total);
        const whatsappNumber = '5521971550633'; // Replace with your business WhatsApp number
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } catch (error) {
        reportError(error);
    }
};

const createPayment = async (items, payer) => {
    try {
        // Calculate total
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Send to WhatsApp first
        sendToWhatsApp(items, payer, total);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            success: true,
            orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            message: 'Pedido realizado com sucesso!',
            preferenceId: 'TEST-' + Math.random().toString(36).substr(2)
        };
    } catch (error) {
        reportError(error);
        throw new Error('Erro ao processar pedido. Por favor, tente novamente.');
    }
};
