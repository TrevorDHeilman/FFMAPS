import { Contact } from './contact';
import { Location} from './location';
import { Eventstatus } from '../eventstatus';

export class Event {
    id : number;
    startDate : string;
    endDate : string;
    location : Location;
    contact : Contact;
    eventStatus : Eventstatus;
}