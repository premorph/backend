import('dotenv/config')
export const ENGINE= <string> process.env.ENGINE || 'NoSql';
export const NODE_ENV=  <string> process.env.NODE_ENV;
export const DB_URI= <string>process.env.DB_URI;
export const DB_URI_DEVELOMPENT= <string> process.env.DB_URI_DEVELPMENT;
export const SQL_HOST= <string> process.env.SQL_HOST;
export const SQL_PORT= <string> process.env.SQL_PORT;
 