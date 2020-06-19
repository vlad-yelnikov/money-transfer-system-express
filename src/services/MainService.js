class MainService {
  constructor(modelSchema) {
    this.Model = modelSchema;
  }

  get(id) {
    return this.Model.findById(id);
  }

  create(Data) {
    const user = new this.Model(Data);
    user.save();
    return user;
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
    page,
    size,
    order,
    sort,
  }) {
    const skip = (page - 1) * size;
    return this.Model.find({}, null, { limit: +size, skip }).sort({
      [sort]: order,
    });
  }
}

module.exports = MainService;
