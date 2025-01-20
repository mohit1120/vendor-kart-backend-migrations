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

import { seedUsers } from "./seeds/users";
import { seedOrders } from "./seeds/orders";
import { seedOrderItems } from "./seeds/orders_items";
import { seedShipments } from "./seeds/shipments";
import { seedBillings } from "./seeds/billings";
import { seedPayments } from "./seeds/payments";
import { seedCartLineItems } from "./seeds/cart_line_items";
import { seedVendors } from "./seeds/vendors";
import { seedCategories } from "./seeds/categories";
import { seedProducts } from "./seeds/products";

// Define the seed objects
const seeds = [
  {
    tableName: Users.tableName,
    run: async () => {
      await seedUsers();
    },
  },
  {
    tableName: Orders.tableName,
    run: async () => {
      await seedOrders();
    },
  },
  {
    tableName: OrderItems.tableName,
    run: async () => {
      await seedOrderItems();
    },
  },
  {
    tableName: Shipments.tableName,
    run: async () => {
      await seedShipments();
    },
  },
  {
    tableName: Billings.tableName,
    run: async () => {
      await seedBillings();
    },
  },
  {
    tableName: Payments.tableName,
    run: async () => {
      await seedPayments();
    },
  },
  {
    tableName: CartLineItems.tableName,
    run: async () => {
      await seedCartLineItems();
    },
  },
  {
    tableName: Vendors.tableName,
    run: async () => {
      await seedVendors();
    },
  },
  {
    tableName: Categories.tableName,
    run: async () => {
      await seedCategories();
    },
  },
  {
    tableName: Products.tableName,
    run: async () => {
      await seedProducts();
    },
  },
];

export { seeds };
