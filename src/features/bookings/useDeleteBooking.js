import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (booking) => {
      toast.success(`Booking Successfully Deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => `There was an error deleting booking`,
  });
  return { deleteBooking, isDeleting };
}
