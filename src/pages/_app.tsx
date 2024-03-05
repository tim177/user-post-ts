import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </RecoilRoot>
  );
}
