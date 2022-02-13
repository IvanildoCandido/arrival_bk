const Student = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      studentName: DataTypes.STRING,
      className: DataTypes.STRING,
    }
  );

  return Student;
};

module.exports = Student;
