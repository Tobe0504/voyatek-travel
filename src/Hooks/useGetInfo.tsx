import useGetHook from "./useGetHook";

export const useFlights = (date: string) => {
  const url = `/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=NGN&departDate=${date}`;

  return useGetHook(url, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
    refreshInterval: 10000,
  });
};

export const useHotels = () => {
  const url = `hotels/searchHotels?dest_id=-2092174&search_type=CITY&adults=1&children_age=0%2C17&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=NGN`;

  return useGetHook(url, {
    revalidateOnFocus: false,
  });
};
