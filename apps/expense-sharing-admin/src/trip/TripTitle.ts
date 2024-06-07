import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "name";

export const TripTitle = (record: TTrip): string => {
  return record.name?.toString() || String(record.id);
};
