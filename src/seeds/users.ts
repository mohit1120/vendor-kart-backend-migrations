import { v4 as uuidv4 } from "uuid";
import { Users } from "../entities/users";

async function seedusers() {
  try {
    await Users.bulkCreate([
      { PID: "users_1659a988-3181-48c3-887c-67c9c244e446", Name: "Anuj", Email: "anuj@gmail.com", Role: 1, IsDeleted: false, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "users_1659a988-3181-48c3-887c-67c9c244e876", Name: "Sumit",Email: "sumit@gmail.com", Role: 2, IsDeleted: false, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "users_1659a988-3000-48c3-887c-67c9c244e321", Name: "Ajay", Email: "ajay@gmail.com", Role: 3, IsDeleted: false, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "users_1659a988-3111-48c3-887c-67c9c244e123", Name: "Avani", Email: "avani@gmail.com", Role: 1, IsDeleted: false, CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedusers };
