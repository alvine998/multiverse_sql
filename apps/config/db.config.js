module.exports = {
    HOST: "localhost",
    USER: "ptmultiv_verse",
    PASSWORD: 'ptmultiverse2022',
    DB: 'ptmultiv_node',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};