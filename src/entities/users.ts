import { Model, DataType, DataTypes, Sequelize } from "sequelize";
import { Database } from "../connection";

interface User {
  ID?: Number;
  PID?: string;
  Name?: string;
  Email?: string;
  Role?: number;
  IsDeleted?: boolean;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}

class Users extends Model<User> {}

try {
  Users.init(
    {
      ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, field: "users_id" },
      PID: { type: DataTypes.STRING(50), allowNull: false, unique: true, field: "users_pid" },
      Name: { type: DataTypes.STRING(50), allowNull: false, field: "users_name" },
      Email: { type: DataTypes.STRING(50), allowNull: false, field: "users_email" },
      Role: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 2, field: "users_role" },
      IsDeleted: { type: DataTypes.BOOLEAN, defaultValue: false, field: "is_deleted" },
      CreatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, field: "created_at" },
      UpdatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, field: "updated_at" },
    },
    { sequelize: Database.getInstance().getSequelize(), modelName: "User", tableName: "users", timestamps: false },
  );
} catch (error) {
  console.error("Error initializing model [Users]:", error);
}

export { User, Users };
