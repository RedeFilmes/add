function ProductList({ category, subcategory, onAddToCart }) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const loadProducts = () => {
            try {
                setLoading(true);
                setError(null);
                const categoryProducts = getProductsByCategory(category, subcategory);
                setProducts(categoryProducts);
            } catch (error) {
                reportError(error);
                setError('Erro ao carregar produtos. Por favor, tente novamente.');
            } finally {
                setTimeout(() => setLoading(false), 500); // Add minimal delay for smooth transition
            }
        };

        if (category) {
            loadProducts();
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [category, subcategory]);

    if (!category) {
        return (
            <div className="text-center py-12 animate-fade-in" data-name="empty-state">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Selecione uma categoria</h2>
                    <p className="text-gray-600">
                        Navegue pelo menu para encontrar os produtos que você precisa
                    </p>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-name="loading-grid">
                {[1, 2, 3, 4, 5, 6, 8].map(i => (
                    <div key={i} className="border rounded-lg p-4 animate-pulse" data-name="skeleton-card">
                        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 animate-fade-in" data-name="error-state">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-red-100">
                    <svg className="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{error}</h2>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        Tentar novamente
                    </button>
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-12 animate-fade-in" data-name="no-products">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Nenhum produto encontrado</h2>
                    <p className="text-gray-600">
                        Tente selecionar outra categoria ou subcategoria
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in" data-name="product-list">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        {category} {subcategory ? `- ${subcategory}` : ''}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {products.length} {products.length === 1 ? 'produto' : 'produtos'} disponíveis
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                        <span className="text-gray-600">Ordenar por</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={product.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fade-in">
                        <ProductCard product={product} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
}
