import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1-load auth user
  const { isAuthenticated, isLoading } = useUser();

  //2-if there is no autrh return to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //3-while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />s
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
