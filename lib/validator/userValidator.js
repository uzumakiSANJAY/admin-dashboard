const Joi = require("joi");
const { BAD } = require("../schema/response_schema");

const userRegisterValidator = (req, res, next) => {
  try {
    const requiredBodyDetails = {
      name: req.body.flat_number,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      blood_group: req.body.blood_group,
      dob: req.body.dob,
      martial_status: req.body.martial_status,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      aadhar_no: req.body.aadhar_no,
      password: req.body.password,
      is_admin: req.body.is_admin,
      role: req.body.role,
    };

    const schema = Joi.object({
      name: Joi.string().max(200).required(),
      email: Joi.string().email().max(200).required(),
      phone: Joi.number().required(),
      gender: Joi.string().required(),
      blood_group: Joi.string(),
      dob: Joi.string(),
      martial_status: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      pincode: Joi.string(),
      aadhar_no: Joi.string(),
      password: Joi.string().required(),
      is_admin: Joi.string().required(),
      role: Joi.string().required(),
    });
    const { error, value } = schema.validate(requiredBodyDetails, {
      abortEarly: false,
    });

    if (error) {
      let errors = error.details.map((item) => item.message);
      return BAD({ res, errors });
    }
    req.validatedData = value;
    next();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  userRegisterValidator,
};
