import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../repositories/users.js";
import { successResponse } from "../utils/response.js";

export const getUsers = async (req, res, next) => {
  try {
    const [result] = await getData();
    successResponse(res, "success", result);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await getDataById(id);
    successResponse(res, "success", ...result);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const [created] = await createData(name, email, password);
    const [result] = await getDataById(created.insertId);
    successResponse(res, "success", ...result, 201);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (request, response, next) => {
  const { id } = request.params;
  const { name, email } = request.body;
  try {
    await updateData(id, name, email);
    const [result] = await getDataById(id);
    successResponse(response, "success", ...result);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (request, response, next) => {
  const { id } = request.params;
  try {
    const [result] = await getDataById(id);
    await deleteData(id);
    successResponse(response, "success", ...result);
  } catch (error) {
    next(error);
  }
};
