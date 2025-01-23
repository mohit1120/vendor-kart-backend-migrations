import { Billings } from "../entities/billings";

async function seedBillings() {
  try {
    await Billings.bulkCreate([
      {
        PID: "billing_1659a988-3181-48c3-887c-67c9c244b001", 
        Amount: "2400.00", 
        ShipmentID: "shipment_1659a988-3181-48c3-887c-67c9c244s001",  
        Status: "Paid",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "billing_1659a988-3181-48c3-887c-67c9c244b002",  
        Amount: "800.00",  
        ShipmentID: "shipment_1659a988-3181-48c3-887c-67c9c244s002", 
        Status: "Pending",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "billing_1659a988-3000-48c3-887c-67c9c244b003", 
        Amount: "79.95",  
        ShipmentID: "shipment_1659a988-3000-48c3-887c-67c9c244s003",  
        Status: "Failed",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "billing_1659a988-3111-48c3-887c-67c9c244b004", 
        Amount: "105.00",  
        ShipmentID: "shipment_1659a988-3111-48c3-887c-67c9c244s004", 
        Status: "Paid",  
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    ]);

    console.log("Billings seeded successfully!");
  } catch (error) {
    console.error("Error seeding Billings:", error);
    throw error;
  }
}

export { seedBillings };
