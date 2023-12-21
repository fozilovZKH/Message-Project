import bcrypt from "bcrypt";

export async function hashPassword(data) {
  const salt = 10;

  return await bcrypt.hash(data, salt);
}
export async function verifyPassword(data, hashData) {
  return await bcrypt.compare(data, hashData);
}
