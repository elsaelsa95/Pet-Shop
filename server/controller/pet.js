const { Pet } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { name, bod, category } = req.body;
      const createPet = await Pet.create({
        UserId: req.user.id,
        name,
        bod,
        category,
      });
      res
        .status(201)
        .json({ message: `id:${createPet.id}, name:${createPet.name}` });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllPet = await Pet.findAll({ where: { UserId: req.user.id } });
      if (!findAllPet) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllPet);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findPet = await Pet.findByPk(id);

      if (!findPet) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findPet });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findPet = await Pet.findByPk(id);

      if (!findPet) {
        throw { name: "Data not found" };
      } else {
        const { name, bod } = req.body;
        findPet = await Pet.update({ name, bod }, { where: { id } });
      }
      res.status(200).json(`Pet with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findPet = await Pet.findByPk(id);

      if (!findPet) {
        throw { name: "Data not found" };
      } else {
        findPet = await Pet.destroy({ where: { id } });
      }
      res.status(200).json(`Pet with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
