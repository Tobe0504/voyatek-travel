export type airline = {
  count: number;
  iataCode: string;
  logoUrl: string;
  minPrice: priceType;
  name: string;
};

export type priceType = { currencyCode: string; units: number; nanos: number };

export type flightsType = {
  aggregation: {
    airlines: airline[];
  };
};

export type activitiesType = {
  name: string;
  address: string;
  location: string;
  price: number;
  date: string;
  duration: string;
};

export type notificationsType =
  | {
      title: string;
      severity: "success" | "error" | "mid";
      description?: string;
      id: string | number;
    }[]
  | null
  | undefined;
