import { Vendors } from "../entities/vendors";

async function seedVendors() {
  try {
    await Vendors.bulkCreate([
      { PID: "vendor_1659a988-3181-48c3-887c-67c9c244e001", Name: "TechWorld", Email: "techworld@gmail.com", Mobile: "9888776655", LegalEntityName: "TechWorld Pvt Ltd.", BusinessName: "TechWorld Electronics", GSTNo: "1234567890", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "vendor_1659a988-3181-48c3-887c-67c9c244e002", Name: "FashionStore", Email: "fashionstore@gmail.com", Mobile: "9777665544", LegalEntityName: "FashionStore Pvt Ltd.", BusinessName: "FashionStore Apparel", GSTNo: "0987654321", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "vendor_1659a988-3181-48c3-887c-67c9c244e003", Name: "HomeGoods", Email: "homegoods@gmail.com", Mobile: "9666554433", LegalEntityName: "HomeGoods Pvt Ltd.", BusinessName: "HomeGoods Furnishings", GSTNo: "1122334455", CreatedAt: new Date(), UpdatedAt: new Date() },
      { PID: "vendor_1659a988-3181-48c3-887c-67c9c244e004", Name: "BookStore", Email: "bookstore@gmail.com", Mobile: "9555443322", LegalEntityName: "BookStore Pvt Ltd.", BusinessName: "BookStore Publications", GSTNo: "6677889900", CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  } catch (error) {
    throw error;
  }
}

export { seedVendors };
