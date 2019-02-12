import { Query } from '../index';

const getCategories = () => Query(`SELECT * FROM categories`);

const getCategory = (id: number) => Query(`SELECT * FROM categories WHERE id = ${id}`);

export default {
    getCategories,
    getCategory
};