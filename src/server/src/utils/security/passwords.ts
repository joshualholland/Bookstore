import * as bcrypt from 'bcrypt-nodejs';

export const ComparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};

export const HashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};