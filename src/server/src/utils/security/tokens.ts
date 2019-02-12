import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config';
import DB from '../../db';

export const createToken = async (payload: IPayload) => {
    let tokenID: any = await DB.Tokens.insert(payload.userid);
    payload.accesstokenid = tokenID.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await DB.Tokens.update(payload.accesstokenid, token);
    return token;
};

export const validToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await DB.Tokens.findOne(payload.accesstokenid, token);
    if (!accesstokenid) {
        throw new Error('invalid token')
    } else {
        return payload;
    }
};

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}