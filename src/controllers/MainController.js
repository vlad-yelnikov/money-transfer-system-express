class MainController {
  constructor(serviceName) {
    this.service = serviceName;
  }

  responseCheck(response) {
    if (!response) {
      const err = new Error('Not found');
      err.status = 404;
      throw err;
    }
  }

  async get({ params: { id } = {} }, res, next) {
    try {
      const response = await this.service.get(id);
      this.responseCheck(response);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  async create({ body }, res, next) {
    try {
      const user = await this.service.create(body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async update({ params: { id } = {}, body }, res, next) {
    try {
      const response = await this.service.update(id, body);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await this.service.getAll();
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  async delete({ params: { id } = {} }, res, next) {
    try {
      const response = await this.service.delete(id);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }

  async search({ query } = {}, res, next) {
    try {
      const response = await this.service.search(query);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = MainController;
