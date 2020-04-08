import {Organization} from "./Organization";
import {Contact} from "./Contact";
import {Tag} from "./Tag";
import {EventCampaign} from "./EventCampaign";
import {Timeslot} from "./Timeslot";

export class Event {

id: number;
title: string;
summary: string;
description: string;
featured_image_url: string;
high_priority: boolean;
sponsor: Organization;
timeslots: Timeslot[];
location: Location;
timezone: string;
event_type: EventType;
browser_url: string;
created_date: number;
modified_date: number;
visibility: Visibility;
address_visibility: Visibility;
created_by_volunteer_host: boolean;
is_virtual: boolean;
virual_action_url: string;
contact: Contact;
accessibility_status: AccessibilityStatus;
accessibility_notes: string;
tags: Tag[];
event_campaign: EventCampaign;

}

export enum EventType {
  CANVASS, PHONE_BANK, TEXT_BANK, MEETING, COMMUNITY, FUNDRAISER, MEET_GREET, HOUSE_PARTY, VOTER_REG, TRAINING, FRIEND_TO_FRIEND_OUTREACH, DEBATE_WATCH_PARTY, ADVOCACY_CALL, RALLY, TOWN_HALL, OFFICE_OPENING, BARNSTORM, SOLIDARITY_EVENT, COMMUNITY_CANVASS, SIGNATURE_GATHERING, CARPOOL, OTHER
}

export enum Visibility {
  PUBLIC,
  PRIVATE
}

export enum AccessibilityStatus{
  ACCESSIBLE, NOT_ACCESSIBLE, NOT_SURE, null
}

