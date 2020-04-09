export class Organization {
  id: number;
  name: string;
  slug: string;
  is_coordinated: boolean;
  is_independent: boolean;
  race_type: RaceType;
  is_primary_campaign: boolean;
  state: string;
  district: string;
  candidate_name: string;
  event_feed_url: string;
  created_date: number;
  modified_date: number;
  org_type: OrganizationType;
}

export enum RaceType {
  GOVERNOR, CONGRESSIONAL, SENATE, STATE_SENATE, STATE_LEG, SEC_STATE, ATTY_GENERAL, OTHER_LOCAL, OTHER_STATEWIDE
}

export enum OrganizationType {
  STATE_PARTY, COORDINATED, INDEPENDENT
}
