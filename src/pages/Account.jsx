import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  const { user, isLoading } = useUser();

  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          <UpdateUserDataForm user={user} key={user?.avatar} />
        )}
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
