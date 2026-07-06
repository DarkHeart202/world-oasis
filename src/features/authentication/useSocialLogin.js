import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithSocialMedia } from "../../services/apiSocialLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSocialLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: socialLogin, isLoading: isSocialLoading } = useMutation({
    mutationFn: (provider) => loginWithSocialMedia(provider),

    onSuccess: (user) => {
      toast.success("Redirecting to login page...");
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return { socialLogin, isSocialLoading };
}
