import dbPool from "../utils/db.js";

const getData = () => {
  const query = "SELECT * FROM tasks";

  return dbPool.query(query);
};

const getDataById = (id) => {
  const query = `SELECT task_id, user_id, title, is_done, created_at, updated_at FROM tasks WHERE task_id=${id}`;

  return dbPool.query(query);
};

const createData = (user_id, title, is_done) => {
  let created_at = new Date();

  const query =
    "INSERT INTO tasks (user_id, title, is_done, created_at) VALUES (?, ?, ?, ?)";
  const values = [user_id, title, is_done, created_at];
  const result = dbPool.query(query, values);

  return result;
};

const updateData = (id, title, is_done) => {
  let updated_at = new Date();

  const query = `UPDATE tasks SET title = '${title}',is_done = '${is_done}', updated_at = ? WHERE task_id = ${id}`;
  const result = dbPool.query(query, [updated_at]);

  return result;
};

const deleteData = (id) => {
  const query = "DELETE FROM tasks WHERE task_id = ?";
  const result = dbPool.query(query, [id]);

  return result;
};

export { getData, getDataById, createData, updateData, deleteData };
