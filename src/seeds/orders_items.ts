import { OrderItems } from "../entities/order_items";

async function seedOrderItems() {
  try {
    await OrderItems.bulkCreate([
      {
        PID: "order_item_1659a988-3181-48c3-887c-67c9c244i001", 
        OrderID: "order_1659a988-3181-48c3-887c-67c9c244e446",  
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p001", 
        Price: 1200.00,  
        Quantity: 2,  
        UserID: "user_1659a988-3181-48c3-887c-67c9c244e446",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_item_1659a988-3181-48c3-887c-67c9c244i002",  
        OrderID: "order_1659a988-3181-48c3-887c-67c9c244e876", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p002",  
        Price: 800.00,  
        Quantity: 1,  
        UserID: "user_1659a988-3181-48c3-887c-67c9c244e876",   
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_item_1659a988-3181-48c3-887c-67c9c244i003",  
        OrderID: "order_1659a988-3000-48c3-887c-67c9c244e321",  
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p003",  
        Price: 15.99,  
        Quantity: 5,  
        UserID: "user_1659a988-3000-48c3-887c-67c9c244e321",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_item_1659a988-3181-48c3-887c-67c9c244i004",  
        OrderID: "order_1659a988-3111-48c3-887c-67c9c244e123", 
        ProductID: "product_1659a988-3181-48c3-887c-67c9c244p004", 
        Price: 35.00,  
        Quantity: 3, 
        UserID: "user_1659a988-3111-48c3-887c-67c9c244e123",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    ]);

    console.log("Order Items seeded successfully!");
  } catch (error) {
    console.error("Error seeding Order Items:", error);
    throw error;
  }
}

export { seedOrderItems };  
