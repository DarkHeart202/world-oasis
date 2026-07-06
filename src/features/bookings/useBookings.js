import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const clientQuery = useQueryClient();
  const [searchParams] = useSearchParams();
  //filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ["bookings", filter, sortBy, page],
  });
  if (!isLoading && count) {
    const pageCount = Math.ceil(count / PAGE_SIZE);
    console.log(pageCount);
    //prefetching
    if (page < pageCount)
      clientQuery.prefetchQuery({
        queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
        queryKey: ["bookings", filter, sortBy, page + 1],
      });

    if (page > 1)
      clientQuery.prefetchQuery({
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
        queryKey: ["bookings", filter, sortBy, page - 1],
      });
  }
  return { isLoading, bookings, error, count };
}
