import { errorResponse } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {
  let status = 500;
  let error = "[Internal server error] initial server error";

  if (err.message === "page not found") {
    status = 404;
    error = `[Not found] ${err.message}`;
  } else if (
    err.message.includes("Unknown column") ||
    err.message.includes("cannot be null") ||
    err.message.includes("You have an error in your SQL syntax")
  ) {
    status = 400;
    error = `[Bad Request] ${err.message}`;
  }

  errorResponse(res, error, status);
};

export default errorHandler;
