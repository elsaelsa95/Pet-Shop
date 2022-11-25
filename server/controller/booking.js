const { Booking } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { PetId, ServiceId, dateAndTime, note } = req.body;
      const createBooking = await Booking.create({
        UserId: req.user.id,
        PetId,
        ServiceId,
        dateAndTime,
        note,
      });
      res.status(201).json({
        message: `id:${createBooking.id}, name:${createBooking.UserId}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllBookings = await Booking.findAll({
        where: { UserId: req.user.id },
      });
      if (!findAllBookings) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllBookings);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findBooking = await Booking.findByPk(id);

      if (!findBooking) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findBooking });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findBooking = await Booking.findByPk(id);

      if (!findBooking) {
        throw { name: "Data not found" };
      } else {
        const { PetId, ServiceId, dateAndTime, note } = req.body;
        findBooking = await Booking.update(
          { PetId, ServiceId, dateAndTime, note },
          { where: { id } }
        );
      }
      res.status(200).json(`Booking with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findBooking = await Booking.findByPk(id);

      if (!findBooking) {
        throw { name: "Data not found" };
      } else {
        findBooking = await Booking.destroy({ where: { id } });
      }
      res.status(200).json(`Booking with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
