import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_URL}/kosher.ico`}
          type="image/x-icon"
          sizes="any"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@kosherpharmacy" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="kosherpharmaceuticals" />
        
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
