import { Placeable } from './../placeable';
import { User } from './../user';
import { Event } from '../classfolder/event';

export class Schedule {
    id: number;
    event: Event;
    user: User;
    scheduleDay: string;
    placeable: Placeable;
}
