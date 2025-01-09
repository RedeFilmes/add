function Header({ onMenuToggle, onCartClick, cartItemsCount, onLogoClick }) {
    return (
        <header className="bg-green-600 text-white py-4" data-name="header">
            <div className="container flex items-center justify-between">
                <div className="flex items-center" data-name="header-left">
                    <button 
                        onClick={onMenuToggle}
                        className="mr-4 p-2"
                        data-name="menu-toggle"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div 
                        className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={onLogoClick}
                        data-name="logo-title"
                    >
                        <svg 
                            className="w-8 h-8" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            data-name="market-logo"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <h1 className="text-2xl font-bold flex items-center" data-name="site-title">
                            Sabor
                        </h1>
                    </div>
                </div>
                <div className="flex items-center" data-name="header-right">
                    <button 
                        onClick={onCartClick}
                        className="p-2 relative"
                        data-name="cart-button"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
