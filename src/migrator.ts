import { Users } from "./entities/users";
import { Orders } from "./entities/orders";
import { OrderItems } from "./entities/order_items";
import { Shipments } from "./entities/shipments";
import { Billings } from "./entities/billings";
import { Payments } from "./entities/payments";
import { CartLineItems } from "./entities/cart_line_items";
import { Vendors } from "./entities/vendors";  
import { Categories } from "./entities/categories"; 
import { Products } from "./entities/products";     
import { Carts } from "./entities/carts";  

// Define the migration objects
const migrations = [
  {
    tableName: Users.tableName,
    run: async () => {
      await Users.sync();
      console.log('Users table migrated successfully.');
    },
  },
  {
    tableName: Orders.tableName,
    run: async () => {
      await Orders.sync();
      console.log('Orders table migrated successfully.');
    },
  },
  {
    tableName: OrderItems.tableName,
    run: async () => {
      await OrderItems.sync();
      console.log('OrderItems table migrated successfully.');
    },
  },
  {
    tableName: Shipments.tableName,
    run: async () => {
      await Shipments.sync();
      console.log('Shipments table migrated successfully.');
    },
  },
  {
    tableName: Billings.tableName,
    run: async () => {
      await Billings.sync();
      console.log('Billings table migrated successfully.');
    },
  },
  {
    tableName: Payments.tableName,
    run: async () => {
      await Payments.sync();
      console.log('Payments table migrated successfully.');
    },
  },
  {
    tableName: CartLineItems.tableName,
    run: async () => {
      await CartLineItems.sync();
      console.log('CartLineItems table migrated successfully.');
    },
  },
  {
    tableName: Vendors.tableName,
    run: async () => {
      await Vendors.sync();
      console.log('Vendors table migrated successfully.');
    },
  },
  {
    tableName: Categories.tableName,
    run: async () => {
      await Categories.sync();
      console.log('Categories table migrated successfully.');
    },
  },
  {
    tableName: Products.tableName,
    run: async () => {
      await Products.sync();
      console.log('Products table migrated successfully.');
    },
  },
  {
    tableName: Carts.tableName,
    run: async () => {
      await Carts.sync();
      console.log('Cart table migrated successfully.');
    },
  },
];

export { migrations };
