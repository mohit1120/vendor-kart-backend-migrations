import { Carts } from "../entities/carts";

async function seedCarts() {
  try {
    await Carts.bulkCreate([
      { PID: "cart_1659a988-3181-48c3-887c-67c9c244c001", UserID: "user_1659a988-3181-48c3-887c-67c9c244e446", Status: "active", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "cart_1659a988-3181-48c3-887c-67c9c244c002", UserID: "user_1659a988-3181-48c3-887c-67c9c244e876", Status: "completed", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "cart_1659a988-3181-48c3-887c-67c9c244c003", UserID: "user_1659a988-3000-48c3-887c-67c9c244e321", Status: "abandoned", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "cart_1659a988-3181-48c3-887c-67c9c244c004", UserID: "user_1659a988-3111-48c3-887c-67c9c244e123", Status: "active", CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedCarts };
