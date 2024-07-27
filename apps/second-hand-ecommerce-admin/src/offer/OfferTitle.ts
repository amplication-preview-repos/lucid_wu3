import { Offer as TOffer } from "../api/offer/Offer";

export const OFFER_TITLE_FIELD = "buyer";

export const OfferTitle = (record: TOffer): string => {
  return record.buyer?.toString() || String(record.id);
};
