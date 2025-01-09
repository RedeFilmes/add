const products = {
    "Vitaminas": [
        { id: 1, name: "Vitamina De Morango", price: 5.00, image: "https://www.sabornamesa.com.br/media/k2/items/cache/f7c6b266b48b52b888acd15686984fae_XL.jpg", category: "Garrafa de 300ML Da Fruta" },
        { id: 2, name: "Vitamiva de Maracujá Com Ortelâ 300ML", price: 5.00, image: "https://www.sabornamesa.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg", category: "Garrafa de 300ML Da Fruta" },
        { id: 3, name: "Alface Crespa", price: 2.99, image: "https://placeholder.com/150", category: "Verduras" },
        { id: 4, name: "Tomate", price: 6.99, image: "https://placeholder.com/150", category: "Legumes" },
        { id: 5, name: "Cenoura", price: 3.50, image: "https://placeholder.com/150", category: "Legumes" },
        { id: 6, name: "Laranja Pera", price: 4.99, image: "https://placeholder.com/150", category: "Frutas" },
        { id: 7, name: "Couve", price: 2.50, image: "https://placeholder.com/150", category: "Verduras" },
        { id: 8, name: "Batata", price: 5.99, image: "https://placeholder.com/150", category: "Legumes" },
        { id: 9, name: "Manga", price: 6.99, image: "https://placeholder.com/150", category: "Frutas" },
        { id: 10, name: "Rúcula", price: 3.99, image: "https://placeholder.com/150", category: "Verduras" }
    ],
    "Carnes": [
        { id: 11, name: "Picanha", price: 89.90, image: "https://placeholder.com/150", category: "Bovina" },
        { id: 12, name: "Frango Inteiro", price: 15.99, image: "https://placeholder.com/150", category: "Frango" },
        { id: 13, name: "Costela Suína", price: 29.90, image: "https://placeholder.com/150", category: "Suína" },
        { id: 14, name: "Salmão", price: 59.90, image: "https://placeholder.com/150", category: "Peixes" },
        { id: 15, name: "Contra Filé", price: 45.90, image: "https://placeholder.com/150", category: "Bovina" },
        { id: 16, name: "Coxa de Frango", price: 12.99, image: "https://placeholder.com/150", category: "Frango" },
        { id: 17, name: "Linguiça", price: 19.90, image: "https://placeholder.com/150", category: "Suína" },
        { id: 18, name: "Tilápia", price: 39.90, image: "https://placeholder.com/150", category: "Peixes" },
        { id: 19, name: "Alcatra", price: 49.90, image: "https://placeholder.com/150", category: "Bovina" },
        { id: 20, name: "Asa de Frango", price: 14.99, image: "https://placeholder.com/150", category: "Frango" }
    ],
    "Laticínios": [
        { id: 21, name: "Leite Integral", price: 4.99, image: "https://placeholder.com/150", category: "Leite" },
        { id: 22, name: "Queijo Mussarela", price: 32.90, image: "https://placeholder.com/150", category: "Queijos" },
        { id: 23, name: "Iogurte Natural", price: 5.99, image: "https://placeholder.com/150", category: "Iogurtes" },
        { id: 24, name: "Leite Desnatado", price: 4.99, image: "https://placeholder.com/150", category: "Leite" },
        { id: 25, name: "Queijo Prato", price: 29.90, image: "https://placeholder.com/150", category: "Queijos" },
        { id: 26, name: "Iogurte Grego", price: 7.99, image: "https://placeholder.com/150", category: "Iogurtes" },
        { id: 27, name: "Leite Semidesnatado", price: 4.99, image: "https://placeholder.com/150", category: "Leite" },
        { id: 28, name: "Queijo Provolone", price: 45.90, image: "https://placeholder.com/150", category: "Queijos" },
        { id: 29, name: "Iogurte de Morango", price: 6.99, image: "https://placeholder.com/150", category: "Iogurtes" },
        { id: 30, name: "Requeijão", price: 8.99, image: "https://placeholder.com/150", category: "Queijos" }
    ],
    "Padaria": [
        { id: 31, name: "Pão Francês", price: 0.75, image: "https://placeholder.com/150", category: "Pães" },
        { id: 32, name: "Bolo de Chocolate", price: 25.90, image: "https://placeholder.com/150", category: "Bolos" },
        { id: 33, name: "Brigadeiro", price: 2.50, image: "https://placeholder.com/150", category: "Doces" },
        { id: 34, name: "Pão de Forma", price: 7.99, image: "https://placeholder.com/150", category: "Pães" },
        { id: 35, name: "Bolo de Cenoura", price: 22.90, image: "https://placeholder.com/150", category: "Bolos" },
        { id: 36, name: "Beijinho", price: 2.50, image: "https://placeholder.com/150", category: "Doces" },
        { id: 37, name: "Pão Integral", price: 8.99, image: "https://placeholder.com/150", category: "Pães" },
        { id: 38, name: "Bolo de Fubá", price: 20.90, image: "https://placeholder.com/150", category: "Bolos" },
        { id: 39, name: "Trufa", price: 4.50, image: "https://placeholder.com/150", category: "Doces" },
        { id: 40, name: "Croissant", price: 5.99, image: "https://placeholder.com/150", category: "Pães" }
    ],
    "Bebidas": [
        { id: 41, name: "Água Mineral", price: 2.99, image: "https://placeholder.com/150", category: "Água" },
        { id: 42, name: "Coca-Cola 2L", price: 8.99, image: "https://placeholder.com/150", category: "Refrigerantes" },
        { id: 43, name: "Suco de Laranja", price: 7.99, image: "https://placeholder.com/150", category: "Sucos" },
        { id: 44, name: "Cerveja Heineken", price: 6.99, image: "https://placeholder.com/150", category: "Cervejas" },
        { id: 45, name: "Água com Gás", price: 3.49, image: "https://placeholder.com/150", category: "Água" },
        { id: 46, name: "Guaraná 2L", price: 7.99, image: "https://placeholder.com/150", category: "Refrigerantes" },
        { id: 47, name: "Suco de Uva", price: 8.99, image: "https://placeholder.com/150", category: "Sucos" },
        { id: 48, name: "Cerveja Stella", price: 7.99, image: "https://placeholder.com/150", category: "Cervejas" },
        { id: 49, name: "Água de Coco", price: 5.99, image: "https://placeholder.com/150", category: "Água" },
        { id: 50, name: "Fanta 2L", price: 7.99, image: "https://placeholder.com/150", category: "Refrigerantes" }
    ],
    "Mercearia": [
        { id: 51, name: "Arroz 5kg", price: 24.90, image: "https://placeholder.com/150", category: "Arroz" },
        { id: 52, name: "Feijão Carioca 1kg", price: 7.99, image: "https://placeholder.com/150", category: "Feijão" },
        { id: 53, name: "Macarrão Espaguete", price: 4.99, image: "https://placeholder.com/150", category: "Massas" },
        { id: 54, name: "Molho de Tomate", price: 3.99, image: "https://placeholder.com/150", category: "Molhos" },
        { id: 55, name: "Arroz Integral 1kg", price: 7.99, image: "https://placeholder.com/150", category: "Arroz" },
        { id: 56, name: "Feijão Preto 1kg", price: 7.99, image: "https://placeholder.com/150", category: "Feijão" },
        { id: 57, name: "Macarrão Penne", price: 4.99, image: "https://placeholder.com/150", category: "Massas" },
        { id: 58, name: "Molho Branco", price: 4.99, image: "https://placeholder.com/150", category: "Molhos" },
        { id: 59, name: "Arroz Japonês 1kg", price: 12.99, image: "https://placeholder.com/150", category: "Arroz" },
        { id: 60, name: "Feijão Fradinho 1kg", price: 8.99, image: "https://placeholder.com/150", category: "Feijão" }
    ]
};

const getProductsByCategory = (category, subcategory = null) => {
    try {
        if (!products[category]) {
            return [];
        }
        
        if (subcategory) {
            return products[category].filter(product => product.category === subcategory);
        }
        
        return products[category];
    } catch (error) {
        reportError(error);
        return [];
    }
};
