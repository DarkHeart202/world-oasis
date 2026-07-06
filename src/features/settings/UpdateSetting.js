import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function UpdateSetting() {
  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    mutate: updateSetting,
    error,
  } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Cabin Successfully Updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, error, updateSetting };
}
