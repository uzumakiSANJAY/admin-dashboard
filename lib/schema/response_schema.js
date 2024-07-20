exports.Response = ({
  res,
  resource = null,
  message = "Success",
  statusCode = 200,
  status = true,
}) => {
  res.status(statusCode).json({
    statusCode,
    status,
    message: message,
    resource,
  });
};

exports.RESPONSE_ERROR = ({
  res,
  message = "Oops, Something Went Wrong",
  statusCode = 500,
  status = false,
}) => {
  res.status(statusCode).json({
    statusCode,
    status,
    errors: message,
  });
};

exports.UNAUTHENTICATED = ({
  res,
  errors = "Authentication Failed!",
  statusCode = 401,
  status = false,
}) => {
  res.status(401).json({
    statusCode,
    status,
    errors,
  });
};

exports.UNAUTHORIZED = ({
  res,
  errors = "Access Forbidden!",
  statusCode = 403,
  status = false,
}) => {
  res.status(403).json({
    statusCode,
    status,
    errors,
  });
};

exports.BAD = ({
  res,
  errors = "Bad Request",
  statusCode = 400,
  status = false,
}) => {
  // @ts-ignore
  res.status(400).json({
    statusCode,
    status,
    errors,
  });
};

exports.NOT_FOUND = ({
  res,
  errors = "Page not found",
  statusCode = 404,
  status = false,
}) => {
  // @ts-ignore
  res.status(404).json({
    statusCode,
    status,
    errors,
  });
};
