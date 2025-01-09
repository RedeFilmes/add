function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8" data-name="footer">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="footer-content">
                    <div data-name="footer-about">
                        <h3 className="text-lg font-bold mb-4">Sobre nós</h3>
                        <p className="text-gray-400">
                            Entregamos produtos frescos e de qualidade diretamente na sua casa.
                        </p>
                    </div>
                    <div data-name="footer-contact">
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <p className="text-gray-400">Email: contato@marketdelivery.com</p>
                        <p className="text-gray-400">Telefone: (11) 9999-9999</p>
                    </div>
                    <div data-name="footer-social">
                        <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400" data-name="footer-bottom">
                    <p>&copy; 2024 Market Delivery. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
