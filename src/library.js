const getcategories = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await response.json();
    return data;  // ✅ API already returns an array
};

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;  // ✅ API already returns an array
};

export { getcategories, getProducts };