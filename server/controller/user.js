const { User } = require("./../models");
const { compare } = require("./../helpers/bcrypt");
const { createToken } = require("./../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password, username, address, phone } = req.body;
      const createUser = await User.create({
        email,
        password,
        username,
        address,
        phone,
        role: "customer",
      });
      res
        .status(201)
        .json({ message: `id:${createUser.id}, email:${createUser.email}` });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "Required" };
      }
      if (!password) {
        throw { name: "Required" };
      }

      const findUser = await User.findOne({ where: { email } });

      if (!findUser) {
        throw { name: "Invalid Input" };
      }
      const checkPassword = compare(password, findUser.password);

      if (!checkPassword) {
        throw { name: "Invalid Input" };
      }

      const payload = {
        id: findUser.id,
      };
      const access_token = createToken(payload);

      res.status(200).json({ access_token, findUser });
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const {id} = req.params;
      const findId = await User.findByPk(id);

      if (!findId) {
        throw { name: "Data not found" };
      }

      res.status(200).json({ findId });
    } catch (error) {
        console.log(error)
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findId = await User.findByPk(id);
      if (!findId) {
        throw { name: "Data not found" };
      } else {
        const { email, password, username, address, phone } = req.body;
        findId = await User.update(
          { email, password, username, address, phone, role: "customer" },
          { where: { id } }
        );
      }
      res.status(200).json(`User with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findId = await User.findByPk(id);
      if (!findId) {
        throw { name: "Data not found" };
      } else {
        findId = await User.destroy({ where: { id } });
      }
      res.status(200).json(`User with ${id} has been delete`);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller;
