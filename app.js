class Products
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

class tienditaDAO{
    constructor (productsList){
        this.productsList = productsList;
    }

    existenciaMayor(value){
        return this.productsList.filter(products => products.stock > value);
    }

    existenciaMenor(value){
        return this.productsList.filter(products => products.stock < value);
    }

    mismaClasificacionPrecio(category, price){
        return this.productsList.filter(products => products.price > price && products.category === category);
    }

    entrePrecio(n1, n2){
        return this.productsList.filter(products => products.price > n1 && product.price < n2);
    }

    mismaClasificacion(category){
        return this.productsList.filter(products => products.category === category);
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