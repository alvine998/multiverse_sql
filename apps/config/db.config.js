module.exports = {
    HOST: "localhost",
    USER: "root" || "ptmultiv_roun382",
    PASSWORD: '',
    DB: 'multiverse' || 'ptmultiv_node',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};