import { IProduct } from './product';

export interface IStore {
    items: Array<IProduct>,
    cart: Array<IProduct>,
};