//honest_index, honest_detail, honest_create, honest_delete
const HonestList = require("../models/honestlist");

const honest_index = (req, res) => {
  HonestList.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("honestlist", { title: "Honest List", honestlist: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const honest_detail = (req, res) => {
  const id = req.params.id;
  HonestList.findById(id)
    .then((result) => {
      res.render("detail", { title: "Full Details", detail: result });
    })
    .catch((err) => console.log(err));
};

const honest_create = (req, res) => {
  const list = new HonestList(req.body);
  list
    .save()
    .then((result) => {
      res.redirect("/honestlist");
    })
    .catch((err) => {
      console.log(err);
    });
};

const honest_delete = (req, res) => {
  const id = req.params.id;
  HonestList.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/honestlist" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  honest_index,
  honest_detail,
  honest_create,
  honest_delete,
};
