//product.ts
//import { calcAverageProductPrice } from "./products";
import { Product, calcAverageProductPrice } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;

}

export let inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

console.log(inventory[0].product.price); // grab a property from the product value

export function calcInventoryValue (inventoryItems: InventoryItem[]): number {
/// sum of the pricequantity for each product
let sum: number = 0;
for (let i=0; i<inventoryItems.length; i++) {
    sum = (inventoryItems[i].product.price * inventoryItems[i].quantity);
    }
    return sum;
}
let inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);