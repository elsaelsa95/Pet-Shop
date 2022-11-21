const { Pet } = require("./../models");

const authorizationPet = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const findPet = await Pet.findOne({ where: { id } });
  
      if (!findPet) {
        throw { name: "Data not found" };
      }
  
      if (findPet.UserId !== req.user.id) {
        throw { name: "Forbidden" };
      }
  
      next();
    } catch (error) {
      next(error);
    }
  };

  module.exports = authorizationPet