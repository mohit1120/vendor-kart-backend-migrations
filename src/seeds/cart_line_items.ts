import { CartLineItems } from "../entities/cart_line_items";

async function seedCartLineItems() {
  try {
    await CartLineItems.bulkCreate([
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli001",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c001", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e446", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p001", 
        Price: 1200.00,
        Qty: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli002",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c001", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e446", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p003", 
        Price: 31.98,
        Qty: 2, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli003",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c002", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e876", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p004", 
        Price: 35.00,
        Qty: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli004",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c003", 
        UserID: "users_1659a988-3000-48c3-887c-67c9c244e321", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p005", 
        Price: 99.99,
        Qty: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli005",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c003", 
        UserID: "users_1659a988-3000-48c3-887c-67c9c244e321", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p007", 
        Price: 29.97,
        Qty: 3, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_item_1659a988-3181-48c3-887c-67c9c244cli006",  // Unique PID
        CartID: "cart_1659a988-3181-48c3-887c-67c9c244c004", 
        UserID: "user_1659a988-3111-48c3-887c-67c9c244e123", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p006",
        Price: 99.98, 
        Qty: 2, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedCartLineItems };
