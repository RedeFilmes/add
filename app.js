function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = React.useState(null);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [showCheckout, setShowCheckout] = React.useState(false);

    const handleMenuToggle = () => {
        try {
            setIsMenuOpen(!isMenuOpen);
        } catch (error) {
            reportError(error);
        }
    };

    const handleLogoClick = () => {
        try {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
            setShowCheckout(false);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCategorySelect = (category, subcategory = null) => {
        try {
            setSelectedCategory(category);
            setSelectedSubcategory(subcategory);
            setShowCheckout(false);
            setIsMenuOpen(false);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCartToggle = () => {
        try {
            setIsCartOpen(!isCartOpen);
        } catch (error) {
            reportError(error);
        }
    };

    const handleAddToCart = (product) => {
        try {
            setCartItems(prev => {
                const existingItem = prev.find(item => item.id === product.id);
                if (existingItem) {
                    return prev.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + product.quantity }
                            : item
                    );
                }
                return [...prev, product];
            });
            setIsCartOpen(true);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCheckout = () => {
        try {
            setIsCartOpen(false);
            setShowCheckout(true);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app">
            <Header 
                onMenuToggle={handleMenuToggle} 
                onCartClick={handleCartToggle} 
                cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                onLogoClick={handleLogoClick}
            />
            
            <Menu 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                onCategorySelect={handleCategorySelect}
            />
            
            <Cart 
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCheckout={handleCheckout}
            />

            <main className="page-content" data-name="main-content">
                <div className="container">
                    {showCheckout ? (
                        <Checkout 
                            cartItems={cartItems}
                            onBack={() => setShowCheckout(false)}
                        />
                    ) : selectedCategory ? (
                        <ProductList 
                            category={selectedCategory}
                            subcategory={selectedSubcategory}
                            onAddToCart={handleAddToCart}
                        />
                    ) : (
                        <div>
                            <BestSellers onAddToCart={handleAddToCart} />
                            <div className="categories-grid" data-name="categories-grid">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.name)}
                                        className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{category.icon}</span>
                                            <div>
                                                <h3 className="font-semibold text-lg">{category.name}</h3>
                                                <p className="text-sm text-gray-500">
                                                    {category.subcategories.length} subcategorias
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
