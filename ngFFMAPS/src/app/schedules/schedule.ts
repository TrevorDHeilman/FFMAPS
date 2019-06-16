import { Placeable } from './../placeable';
import { User } from './../user';

export class Schedule {
    id: number;
    user: User;
    scheduleDate: string;
    placeable: Placeable;
}
