import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = ({ className }: { className: string }) => {
  const { loginWithRedirect } = useAuth0();

  return <button className={className} onClick={() => loginWithRedirect()}>Log In</button>;
};
