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


var productsList = [];

productsList.push(new Products(1,"Cilantro", 5.99, "Verdura", 50, 39, 160));
productsList.push(new Products(2, "Juan", 12, "Persona", 25, 10, 40));

let elProducto = new tienditaDAO(productsList);

/*for(var i = 1; i < 11; i++)
{
    products.push(new ProductsDAO (i, "Cilantro", 4.99, "Verdura", 50, 39, 160));
}
*/


console.log("1. El numero de productos con existencia mayor a 20 es: ");
console.log(elProducto.existenciaMayor(20));

console.log("2. El numero de productos con existencia menor a 15 es: ");
console.log(elProducto.existenciaMenor(15));

console.log("3. La lista de productos con el precio mayor a 15.50 y la misma clasificacion es: ");
console.log(elProducto.mismaClasificacionPrecio("Verdura", 15.50));

console.log("4. Las lista de productos con el precio mayor a 20.30 y menor a 45 es: ");
console.log(elProducto.entrePrecio(20.30, 45.00));

console.log("5. El numero de productos agrupados por su clasificacion es: ");
console.log(elProducto.mismaClasificacion("Verdura"));
