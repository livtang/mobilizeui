import { Optional } from "@angular/core";

export class Timeslot{
  id: number;
  start_date: number;
  end_date: number;
  max_attendees: Optional;
  is_full: boolean;
}