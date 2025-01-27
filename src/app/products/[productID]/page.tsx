import { Metadata } from "next";

type Props = {
  params: {
    productID: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  //use with async await with requests

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productID}`);
    }, 1000);
  });
  return {
    title: `product ${title}`,
  };
};

export default function ProductPage({ params }: Props) {
  return <h1>Product Page {params.productID}</h1>;
}
