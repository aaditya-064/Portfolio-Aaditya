import contactModel from "../model/contact.model.js";
import contactModel2 from "../model/contact2.model.js";

export const postInfo = async (req, res) => {
  try {
    const postData = await contactModel.create({ ...req.body });
    res.json(postData);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};

export const addInfo = async (req, res) => {
  try {
    const postData = await contactModel2.create({ ...req.body });
    res.json(postData);
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};

export const getInfo = async (req, res) => {
  try {
    const getData = await contactModel.find();
    const getSingleData = await contactModel.find({ email: req.body.email });
    res.json({ all: getData, particular: getSingleData });
  } catch (err) {
    res.status(err?.statusCode || 500).json({ msg: err?.message });
  }
};
