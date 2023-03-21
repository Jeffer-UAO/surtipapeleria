import { AuthProvider } from "@/contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/global.scss";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
