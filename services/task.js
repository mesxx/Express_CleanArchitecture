import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../repositories/tasks.js";
import { successResponse } from "../utils/response.js";

export const getTasks = async (req, res, next) => {
  try {
    const [result] = await getData();
    successResponse(res, "success", result);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await getDataById(id);
    successResponse(res, "success", ...result);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { user_id, title, is_done } = req.body;
  try {
    const [created] = await createData(user_id, title, is_done);
    const [result] = await getDataById(created.insertId);
    successResponse(res, "success", ...result, 201);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (request, response, next) => {
  const { id } = request.params;
  const { title, is_done } = request.body;
  try {
    await updateData(id, title, is_done);
    const [result] = await getDataById(id);
    successResponse(response, "success", ...result);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (request, response, next) => {
  const { id } = request.params;
  try {
    const [result] = await getDataById(id);
    await deleteData(id);
    successResponse(response, "success", ...result);
  } catch (error) {
    next(error);
  }
};
