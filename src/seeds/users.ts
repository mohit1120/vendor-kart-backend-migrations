import { Users } from "../entities/users";

async function seedUsers() {
  try {
    await Users.bulkCreate([
      {
        PID: "user_1659a988-3181-48c3-887c-67c9c244e446",
        Name: "Anuj",
        Email: "anuj@gmail.com",
        Mobile: "7356432321",
        BillingAddress: "123 Main Street, City A, Country X, 12345",
        ShippingAddress: "456 Shipping Ave, City B, Country X, 67890",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "user_1659a988-3181-48c3-887c-67c9c244e876",
        Name: "Sumit",
        Email: "sumit@gmail.com",
        Mobile: "7356409321",
        BillingAddress: "789 Billing Road, City C, Country Y, 11223",
        ShippingAddress: "101 Shipping Blvd, City D, Country Y, 44556",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "user_1659a988-3000-48c3-887c-67c9c244e321",
        Name: "Ajay",
        Email: "ajay@gmail.com",
        Mobile: "7354532321",
        BillingAddress: "202 Billing Lane, City E, Country Z, 66778",
        ShippingAddress: "303 Shipping Court, City F, Country Z, 88990",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        PID: "user_1659a988-3111-48c3-887c-67c9c244e123",
        Name: "Avani",
        Email: "avani@gmail.com",
        Mobile: "7356400221",
        BillingAddress: "404 Billing Crescent, City G, Country W, 44567",
        ShippingAddress: "505 Shipping Park, City H, Country W, 55678",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    ]);

    console.log("Users seeded successfully!");
  } catch (error) {
    throw error;
  }
}

export { seedUsers };

