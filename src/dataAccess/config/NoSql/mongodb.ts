import { Connection, connect, connection } from "mongoose";
import { NODE_ENV, DB_URI_DEVELOMPENT, DB_URI } from "../../../base/env.base";

export class DbMongo {
  DB_URI: string;
  constructor() {
    NODE_ENV == "DEVELOPMENT"
      ? (this.DB_URI = DB_URI_DEVELOMPENT)
      : (this.DB_URI = DB_URI);
  }
   start() {
    connect(this.DB_URI, {}, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Mongo ATLAS RUNNING IN ${NODE_ENV} mode`);
    });
  }
  stop() {}
}
