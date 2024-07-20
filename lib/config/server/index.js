const Joi = require("joi");

const schema = Joi.object({
  API_PORT: Joi.number().default(5000).required(),
  MONGO_ATLAS_URI: Joi.string().required(),
  USER_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
}).unknown(true);
const { error, value } = schema.validate(process.env, { abortEarly: true });

if (error) {
  console.log("first", error.message);
  throw new Error(`Environment variable validation error: ${error.message}`);
}

//add all keys from schema here, just for auto completion in other files
//these dummy values will be overwritten in next step.

const env = {
  API_PORT: 0,
  USER_VERIFICATION_TOKEN_SECRET: "",
};

//reset values of env object here to the validated values
Object.keys(schema.describe().keys).forEach((key) => {
  env[key] = value[key];
});

// add configuration for express server here later

module.exports = { env };
