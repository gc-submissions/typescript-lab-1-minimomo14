console.log("this is working ~")

export interface Product { 
    name: string;
    price: number
};

    let products: Product[] = [
        {name: "motor",
        price:10.00
        },{
        name:"sensor",
        price:12.50
        },{
        name:"LED",
        price:1.00
        }
    ];

export  function calcAverageProductPrice (products: Product[]):number {
    //sum of price of each item the array
    let sum = 0;
    for (let i=0; i<products.length; i++) {
        sum += products[i].price;
        }
        //avg = sum/length
    if(products.length === 0){
    return 0;
}
    return sum/products.length;
    
}
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
let emptyProducts: Product[];
console.log(calcAverageProductPrice(emptyProducts));
