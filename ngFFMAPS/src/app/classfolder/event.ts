import { Contact } from './contact';
import { Location} from './location';

export class Event {
    id : number;
    startDate : string;
    endDate : string;
    location : Location;
    contact : Contact; 
}