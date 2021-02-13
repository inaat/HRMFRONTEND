import { Permission } from "./permission.";

export class Role {
  constructor(id = 0, name = "", permissions = []) {
    this.id = id;
    this.name = name;
    this.permissions = permissions;
  }
}
