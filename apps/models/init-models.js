var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _products = require("./products");
var _profiles = require("./profiles");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    categories,
    products,
    profiles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
