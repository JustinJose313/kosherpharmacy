import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Seo = ({ data = {} }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{data.title ? data.title : "Kosher Pharmaceuticals"}</title>
      <meta
        name="description"
        content={data.desc ? data.desc : "Kosher Pharmaceuticals"}
      ></meta>
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
      ></meta>
      <meta
        property="og:title"
        content={data.title ? data.title : "Kosher Pharmaceuticals"}
      ></meta>
      <meta
        property="og:description"
        content={data.desc ? data.desc : "Kosher Pharmaceuticals"}
      ></meta>
      <meta
        name="author"
        content={data.author ? data.author : "Author Name"}
      ></meta>
      <meta
        property="og:image"
        content={
          data.ogImg
            ? data.ogImg
            : `${process.env.NEXT_PUBLIC_URL}/assets/ph.jpeg`
        }
      ></meta>
      <meta
        property="og:image:alt"
        content={data.ogImgAlt ? data.ogImgAlt : "Author Name"}
      ></meta>
      <link rel="canonical" href={`https://kosherpharmaceuticals.com/${data.page ? data.page : ""}`}></link>
    </Head>
  );
};

export default Seo;
