import { PlaceableType } from './placeabletype';

export class Placeable {
    id: number;
    employeeCapacity: number;
    name:string;
    size:number;
    ownerId: number;
    placeableType: PlaceableType;
}
