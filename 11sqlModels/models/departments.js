module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define("Department", {
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 40]
      }
    }
  }
  ,{
    paranoid:true,
  });

  Department.associate = function(models) {
    Department.belongsToMany(models.Region, {
      through: "RegionDepartments"
    });
  };
  return Department;
};
