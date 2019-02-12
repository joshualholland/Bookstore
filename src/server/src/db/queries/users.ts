import { Query } from '../index';

const addUser = async (columns: any, values: any[]) => Query(`INSERT INTO users(${columns}) VALUES(?)`, values);

const findByEmail = (email: string) => Query(`SELECT * FROM users WHERE email = "${email}" LIMIT 1`);

const deleteUser = async (id: number) => Query(`DELETE FROM users WHERE id = ${id}`);

const getUsers = async () => Query(`SELECT * FROM users`);

const getUser = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id}`);

export default {
    addUser,
    findByEmail,
    deleteUser,
    getUsers,
    getUser
};