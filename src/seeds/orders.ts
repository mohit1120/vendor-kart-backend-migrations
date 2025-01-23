import { Orders } from "../entities/orders";

async function seedOrders() {
  try {
    await Orders.bulkCreate([
      {
        PID: "order_1659a988-3181-48c3-887c-67c9c244e446",  
        UserID: "user_1659a988-3181-48c3-887c-67c9c244e446",  
        TotalAmount: 2400.00, 
        Status: "Completed",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_1659a988-3181-48c3-887c-67c9c244e876",  
        UserID: "user_1659a988-3181-48c3-887c-67c9c244e876",  
        TotalAmount: 800.00, 
        Status: "Completed",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_1659a988-3000-48c3-887c-67c9c244e321", 
        UserID: "user_1659a988-3000-48c3-887c-67c9c244e321", 
        TotalAmount: 79.95, 
        Status: "Processing",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "order_1659a988-3111-48c3-887c-67c9c244e123",  
        UserID: "user_1659a988-3111-48c3-887c-67c9c244e123",  
        TotalAmount: 105.00,
        Status: "Pending",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    ]);

    console.log("Orders seeded successfully!");
  } catch (error) {
    console.error("Error seeding Orders:", error);
    throw error;
  }
}

export { seedOrders };
