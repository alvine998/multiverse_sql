const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users")(sequelize, Sequelize);
db.categories = require("./categories")(sequelize, Sequelize);
db.products = require("./products")(sequelize, Sequelize);
db.profiles = require("./profiles")(sequelize, Sequelize);
// db.storages = require("./storages")(sequelize, Sequelize);
// db.purchases = require("./purchases")(sequelize, Sequelize);
// db.notifications = require("./notifications")(sequelize, Sequelize);

// db.partners.belongsTo(db.users, {foreignKey:'user_id', as:'users'})
// db.sessions.belongsTo(db.users, {foreignKey:'user_id', as:'users'})
// db.users.belongsTo(db.partners, {foreignKey:'user_id'})

module.exports = db;