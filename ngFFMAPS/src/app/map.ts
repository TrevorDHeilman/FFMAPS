import { Placeable } from './placeable';
import { Event } from './classfolder/event';

export class Map {
    id: number;
    mapId: number;
    placeable: Placeable;
    event: Event;
    transform: string;
}