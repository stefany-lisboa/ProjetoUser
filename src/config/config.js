// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-a62804096daeeea36eac57e32fdf9a7212c79b35.cnxcoxpvfuya.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '-.CCUH04CY5Nt9H?cNb^$,`ertl(5j{R'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}