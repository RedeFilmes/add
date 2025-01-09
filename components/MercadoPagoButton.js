function MercadoPagoButton({ preferenceId }) {
    const buttonRef = React.useRef(null);
    
    React.useEffect(() => {
        try {
            if (preferenceId && buttonRef.current) {
                const mp = mercadoPagoInit();
                if (mp) {
                    mp.checkout({
                        preference: {
                            id: preferenceId
                        },
                        render: {
                            container: buttonRef.current,
                            label: 'Pagar com Mercado Pago',
                        }
                    });
                }
            }
        } catch (error) {
            reportError(error);
        }
    }, [preferenceId]);

    return (
        <div ref={buttonRef} className="w-full" data-name="mp-button"></div>
    );
}
