import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import { useSocialLogin } from "./useSocialLogin";
import { useLogin } from "./useLogin.js";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import {
  SocialMediaContainer,
  SocialIconBtn,
} from "../../ui/SocialMediaButton.jsx";
import { Divider } from "../../ui/Divider.jsx";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const { socialLogin, isSocialLoading } = useSocialLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  const loading = isLoading || isSocialLoading;

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          disabled={loading}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          disabled={loading}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
      <Divider>or login with</Divider>
      <SocialMediaContainer>
        <SocialIconBtn
          onClick={() => socialLogin("discord")}
          type="button"
          disabled={loading}
        >
          <FaDiscord />
        </SocialIconBtn>
        <SocialIconBtn
          onClick={() => socialLogin("google")}
          type="button"
          disabled={loading}
        >
          <FaGoogle />
        </SocialIconBtn>
        <SocialIconBtn
          onClick={() => socialLogin("github")}
          type="button"
          disabled={loading}
        >
          <FaGithub />
        </SocialIconBtn>
      </SocialMediaContainer>
    </Form>
  );
}

export default LoginForm;
