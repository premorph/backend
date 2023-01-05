import { ENGINE } from "../../base/env.base"

const path = (ENGINE=="NoSql")?`./NoSql`:`./Sql`

const models={
    UserModel:require(`${path}/user.model`),
}
module.exports=models