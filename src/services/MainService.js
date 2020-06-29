class MainService {
  constructor(modelSchema) {
    this.Model = modelSchema;
  }

  get(id) {
    return this.Model.findById(id);
  }

  create(Data) {
    return this.Model.create(Data);
  }

  update(id, body) {
    return this.Model.findByIdAndUpdate(id, body);
  }

  getAll() {
    return this.Model.find();
  }

  delete(id) {
    return this.Model.findByIdAndRemove(id);
  }

  search({
    page, size, order, sort,
  }, filter = {}) {
    const skip = (page - 1) * size;
    return this.Model.find(filter, null, {
      limit: +size,
      skip,
      sort: { [sort]: order },
    });
  }
}

module.exports = MainService;
