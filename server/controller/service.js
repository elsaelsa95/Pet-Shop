const { Service } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { name, description, estimatedTime, price } = req.body;
      const createService = await Service.create({
        name,
        description,
        estimatedTime,
        price,
      });
      res.status(201).json({
        message: `id:${createService.id}, name:${createService.name}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllServices = await Service.findAll();
      if (!findAllServices) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllServices);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findService = await Service.findByPk(id);

      if (!findService) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findService });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findService = await Service.findByPk(id);

      if (!findService) {
        throw { name: "Data not found" };
      } else {
        const { name, description, estimatedTime, price } = req.body;
        findService = await Service.update(
          { name, description, estimatedTime, price },
          { where: { id } }
        );
      }
      res.status(200).json(`Service with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findService = await Service.findByPk(id);

      if (!findService) {
        throw { name: "Data not found" };
      } else {
        findService = await Service.destroy({ where: { id } });
      }
      res.status(200).json(`Service with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
