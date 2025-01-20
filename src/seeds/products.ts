import { Products } from "../entities/products";

async function seedProducts() {
  try {
    await Products.bulkCreate([
      // Electronics Products
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p001", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e001", Name: "Laptop", Description: "A powerful gaming laptop with 16GB RAM and 512GB SSD.", Price: 1200.00, Qty: 10, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e001", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p002", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e001", Name: "Smartphone", Description: "Latest smartphone with high-end features and a 48MP camera.", Price: 800.00, Qty: 20, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e001", CreatedAt: new Date(), UpdatedAt: new Date() },

      // Clothing Products
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p003", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e002", Name: "T-shirt", Description: "Comfortable cotton t-shirt with modern print design.", Price: 15.99, Qty: 50, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e002", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p004", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e002", Name: "Jeans", Description: "Slim-fit denim jeans in a classic blue color.", Price: 35.00, Qty: 30, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e002", CreatedAt: new Date(), UpdatedAt: new Date() },

      // Home & Kitchen Products
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p005", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e003", Name: "Coffee Maker", Description: "Automatic coffee maker with a built-in grinder.", Price: 99.99, Qty: 15, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e003", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p006", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e003", Name: "Blender", Description: "High-speed blender with multi-speed settings.", Price: 49.99, Qty: 25, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e003", CreatedAt: new Date(), UpdatedAt: new Date() },

      // Books Products
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p007", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e004", Name: "The Great Gatsby", Description: "Classic novel by F. Scott Fitzgerald.", Price: 9.99, Qty: 100, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e004", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "products_1659a988-3181-48c3-887c-67c9c244p008", CategoryID: "categories_1659a988-3181-48c3-887c-67c9c244e004", Name: "1984", Description: "Dystopian novel by George Orwell.", Price: 12.99, Qty: 80, VendorID: "vendors_1659a988-3181-48c3-887c-67c9c244e004", CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedProducts };
