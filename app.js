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
        return this.productsList.filter(products => products.price > n1 && products.price < n2);
    }

    mismaClasificacion(category){
        return this.productsList.filter(products => products.category === category);
    }

}


var productsList = [];

//Y asi podriamos seguir agregando mas productos al carrito y funcionaria
productsList.push(new Products(1,"Cilantro", 5.99, "Verdura", 50, 39, 160));
productsList.push(new Products(2, "Platano Chiapas", 5.90, "Fruta", 24, 10, 50));
productsList.push(new Products(3,"Cebolla", 5.99, "Verdura", 12, 9, 20));
productsList.push(new Products(4, "Chile Chilaca", 8.80, "Verdura", 18, 10, 40));
productsList.push(new Products(5,"Patata", 2.90, "Verdura", 8, 5, 12));
productsList.push(new Products(6, "Lechuga", 4.78, "Verdura", 9, 6, 15));
productsList.push(new Products(7, "Melon", 27.80, "Fruta", 12, 10, 50));
productsList.push(new Products(8, "Tomate", 15.80, "Verdura", 19, 12, 40));

let elProducto = new tienditaDAO(productsList);

/*for(var i = 1; i < 11; i++)
{
    products.push(new ProductsDAO (i, "Cilantro", 4.99, "Verdura", 50, 39, 160));
}
*/


console.log("1. Los productos con existencia mayor a 20 son: ");
console.log(elProducto.existenciaMayor(20));

console.log("2. Los productos con existencia menor a 15 son: ");
console.log(elProducto.existenciaMenor(15));

console.log("3. La lista de productos con el precio mayor a 15.50 y la misma clasificacion son: ");
console.log(elProducto.mismaClasificacionPrecio("Verdura", 15.50));

console.log("4. Las lista de productos con el precio mayor a 20.30 y menor a 45 son: ");
console.log(elProducto.entrePrecio(20.30, 45.00));

console.log("5. Los productos agrupados por su clasificacion son: ");
console.log(elProducto.mismaClasificacion("Verdura"));
