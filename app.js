class ProductsDAO
{
    constructor(id, name, price, category, stock, minStock, maxStock)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.minStock = minStock;
        this.maxStock = maxStock;
    }
}

var product1 = new ProductsDAO(1,"Cilantro", 5.99, "Verdura", 50, 39, 160);
var product2 = new ProductsDAO(2, "Juan", 12, "Persona", 25, 10, 40);

var products = [];

for(var i = 1; i < 11; i++)
{
    products.push(new ProductsDAO (i, "Cilantro", 4.99, "Verdura", 50, 39, 160));
}

console.log(products);