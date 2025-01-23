import { Payments } from "../entities/payments";

async function seedPayments() {
  try {
    await Payments.bulkCreate([
      {
        PID: "payment_1659a988-3181-48c3-887c-67c9c244p001",  
        Amount: "2400.00",  
        OrderID: "order_1659a988-3181-48c3-887c-67c9c244e446",  // Associated Order ID
        Status: "Completed",  // Payment status (e.g., Completed, Pending, Failed)
        CreatedAt: new Date(),  // Created timestamp
        UpdatedAt: new Date(),  // Updated timestamp
      },
      {
        PID: "payment_1659a988-3181-48c3-887c-67c9c244p002",  // Unique Payment ID
        Amount: "800.00",  // Payment amount
        OrderID: "order_1659a988-3181-48c3-887c-67c9c244e876",  // Associated Order ID
        Status: "Pending",  // Payment status (Pending)
        CreatedAt: new Date(),  // Created timestamp
        UpdatedAt: new Date(),  // Updated timestamp
      },
      {
        PID: "payment_1659a988-3000-48c3-887c-67c9c244p003",  // Unique Payment ID
        Amount: "79.95",  // Payment amount
        OrderID: "order_1659a988-3000-48c3-887c-67c9c244e321",  // Associated Order ID
        Status: "Completed",  // Payment status (Completed)
        CreatedAt: new Date(),  // Created timestamp
        UpdatedAt: new Date(),  // Updated timestamp
      },
      {
        PID: "payment_1659a988-3111-48c3-887c-67c9c244p004",  // Unique Payment ID
        Amount: "105.00",  // Payment amount
        OrderID: "order_1659a988-3111-48c3-887c-67c9c244e123",  // Associated Order ID
        Status: "Failed",  // Payment status (Failed)
        CreatedAt: new Date(),  // Created timestamp
        UpdatedAt: new Date(),  // Updated timestamp
      },
    ]);

    console.log("Payments seeded successfully!");
  } catch (error) {
    console.error("Error seeding Payments:", error);
    throw error;
  }
}

export { seedPayments };
