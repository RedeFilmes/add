function Toast({ message, type = 'success', onClose }) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const baseClasses = "fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in";
    const typeClasses = {
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
        info: "bg-blue-600 text-white"
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]}`} data-name="toast">
            <div className="flex items-center">
                {type === 'success' && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                )}
                {type === 'error' && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                {type === 'info' && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
                <span>{message}</span>
            </div>
        </div>
    );
}
