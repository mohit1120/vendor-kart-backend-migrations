import { CartLineItems } from "../entities/cart_line_items";

async function seedCartLineItems() {
  try {
    await CartLineItems.bulkCreate([
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli001",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c001", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e446", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p001", 
        Quantity: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli002",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c001", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e446", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p003", 
        Quantity: 2, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli003",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c002", 
        UserID: "users_1659a988-3181-48c3-887c-67c9c244e876", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p004", 
        Quantity: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli004",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c003", 
        UserID: "users_1659a988-3000-48c3-887c-67c9c244e321", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p005", 
        Quantity: 1, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli005",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c003", 
        UserID: "users_1659a988-3000-48c3-887c-67c9c244e321", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p007", 
        Quantity: 3, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },

      { 
        PID: "cart_line_items_1659a988-3181-48c3-887c-67c9c244cli006",  // Unique PID
        CartID: "carts_1659a988-3181-48c3-887c-67c9c244c004", 
        UserID: "users_1659a988-3111-48c3-887c-67c9c244e123", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p006", 
        Quantity: 2, 
        CreatedAt: new Date(), 
        UpdatedAt: new Date() 
      },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedCartLineItems };
