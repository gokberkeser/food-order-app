import Home from "./home";
import Header from "../components/layout/Header";


export default function Index() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <Header />
      <Home />
    </div>
  );
}
