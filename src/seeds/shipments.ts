import { Shipments } from "../entities/shipments";

async function seedShipments() {
  try {
    await Shipments.bulkCreate([
      {
        shipment_pid: "shipment_1659a988-3181-48c3-887c-67c9c244s001",  
        order_id: "order_1659a988-3181-48c3-887c-67c9c244e446",  
        order_item_id: "order_item_1659a988-3181-48c3-887c-67c9c244i001",  
        status: "Shipped",  
        tracking_number: "TRK123456789",  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        shipment_pid: "shipment_1659a988-3181-48c3-887c-67c9c244s002", 
        order_id: "order_1659a988-3181-48c3-887c-67c9c244e876", 
        order_item_id: "order_item_1659a988-3181-48c3-887c-67c9c244i002",  
        status: "Delivered",
        tracking_number: "TRK987654321", 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        shipment_pid: "shipment_1659a988-3181-48c3-887c-67c9c244s003", 
        order_id: "order_1659a988-3000-48c3-887c-67c9c244e321",  
        order_item_id: "order_item_1659a988-3181-48c3-887c-67c9c244i003",  
        status: "Pending", 
        tracking_number: "TRK111222333",  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        shipment_pid: "shipment_1659a988-3181-48c3-887c-67c9c244s004",  
        order_id: "order_1659a988-3111-48c3-887c-67c9c244e123",  
        order_item_id: "order_item_1659a988-3181-48c3-887c-67c9c244i004",  
        status: "Shipped",  
        tracking_number: "TRK444555666",  
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    console.log("Shipments seeded successfully!");
  } catch (error) {
    console.error("Error seeding Shipments:", error);
    throw error;
  }
}

export { seedShipments };
