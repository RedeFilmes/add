function Menu({ isOpen, onClose, onCategorySelect }) {
    const handleCategoryClick = (category, subcategory) => {
        try {
            onCategorySelect(category, subcategory);
            onClose();
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div 
            className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
            data-name="menu"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} data-name="menu-overlay"></div>
            <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl" data-name="menu-content">
                <div className="flex items-center justify-between p-4 border-b" data-name="menu-header">
                    <h2 className="text-xl font-bold">Categorias</h2>
                    <button onClick={onClose} className="p-2" data-name="menu-close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="menu-content" data-name="menu-nav">
                    {categories.map(category => (
                        <div key={category.id} className="category-item" data-name={`category-${category.id}`}>
                            <h3 
                                className="text-lg font-semibold mb-2 cursor-pointer hover:text-green-600 flex items-center gap-2"
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.icon} {category.name}
                            </h3>
                            <ul className="subcategory-list">
                                {category.subcategories.map((sub, index) => (
                                    <li key={index} className="subcategory-item">
                                        <button 
                                            onClick={() => handleCategoryClick(category.name, sub)}
                                            className="text-gray-600 hover:text-green-600 w-full text-left"
                                        >
                                            {sub}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}
