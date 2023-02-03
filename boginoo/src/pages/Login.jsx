import { Header } from "../components/folder/Header";
import { Body } from "../components/folder/Body";
import { Footer } from "../components/folder/Footer";

import { useAuthContext } from "../RealContext";
export const Login = () => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
  }
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
