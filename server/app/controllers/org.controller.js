const responseHandler = require("../handlers/response.handler");
const { OrgModel } = require("../models/index");

exports.createOrg = async (req, res) => {
  try {
    const { name, img, desc } = req.body;
    if (!name || !img) return responseHandler.badrequest(res, {message : "Invalid"})
    const newOrg = new OrgModel({
      display_name: name,
      img: img,
      date_create: new Date(),
      description: desc ? desc : "",
    });
    await newOrg.save();
    return responseHandler.created(res, {
      message: "created org successfully",
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

exports.getAllOrg = async (req, res) => {
  try {
    const allOrg = await OrgModel.find({});
    return responseHandler.ok(res, allOrg);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

exports.deleteOrg = async (req, res) => {
  try {
    const {ids} = req.body;
    console.log(ids);
    const result = await OrgModel.deleteMany({ _id: { $in: ids } });
    if (result.deletedCount > 0) {
      responseHandler.ok(res, {message :  'Organizations deleted successfully'});
    } else {
      responseHandler.badrequest(res, {message : 'No organizations found with the provided IDs'});
    }
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

