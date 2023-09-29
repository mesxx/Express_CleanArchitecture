import dbPool from "../utils/db.js";

const getData = () => {
  const query =
    "SELECT user_id, name, email, password, created_at, updated_at FROM users";

  return dbPool.query(query);
};

const createData = (name, email, password) => {
  let createdAt = new Date();

  const query =
    "INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, ?)";
  const values = [name, email, password, createdAt];
  const result = dbPool.query(query, values);

  return result;
};

const updateData = (id, name, email) => {
  let updatedAt = new Date();

  const query = `UPDATE users SET name = '${name}', email = '${email}', updated_at = ? WHERE user_id = ${id}`;
  const result = dbPool.query(query, [updatedAt]);

  return result;
};

const deleteData = (id) => {
  const query = "DELETE FROM users WHERE user_id = ?";
  const result = dbPool.query(query, [id]);

  return result;
};

const getDataById = (id) => {
  const query = `SELECT user_id, name, email, password, created_at, updated_at FROM users WHERE user_id=${id}`;

  return dbPool.query(query);
};

export { createData, updateData, getData, getDataById, deleteData };
