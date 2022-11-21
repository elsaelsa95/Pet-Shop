const { User } = require("./../models");

const authorizationUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id, "<<<<<")

    const findUser = await User.findOne({ where: { id } });

    if (!findUser) {
      throw { name: "Data not found" };
    }

    if (findUser.id !== req.user.id) {
      throw { name: "Forbidden" };
    }

    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};


module.exports = authorizationUser
