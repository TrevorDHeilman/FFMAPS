import { Item } from './item';

export class Stock {
    id: number;
    itemId: number;
    placeableId: number;
    stockAvailable: number;
    item: Item;
}
