import { Categories } from "../entities/categories";

async function seedCategories() {
  try {
    await Categories.bulkCreate([
      { PID: "category_1659a988-3181-48c3-887c-67c9c244e001", Name: "Electronics", Description: "Electronic devices and accessories.", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "category_1659a988-3181-48c3-887c-67c9c244e002", Name: "Clothing", Description: "Fashionable clothing for all ages.", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "category_1659a988-3181-48c3-887c-67c9c244e003", Name: "Home & Kitchen", Description: "Furniture, appliances, and home goods.", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "category_1659a988-3181-48c3-887c-67c9c244e004", Name: "Books", Description: "Fiction, non-fiction, educational, and more.", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "category_1989a988-0000-68g3-997c-98c9c244e004", Name: "Others", Description: "Others", CreatedAt: new Date(), UpdatedAt: new Date() }
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedCategories };
