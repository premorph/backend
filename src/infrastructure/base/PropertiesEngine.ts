import { ENGINE } from "../../base/env.base";

export function getProperties() {
  const data: any = {
    NoSql: { id: "_id" },
    Sql: { id: "id" },
  };
  return data[ENGINE];
}
