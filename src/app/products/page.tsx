"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ProductList() {
  const productId = 100;
  const router = useRouter();

  const handleClick = () => {
    router.push("/") //navigate to root page after clicking
    //router.resplace("/") to clear the history
    //router.back to go to the previous page
    //router.forward to go to the next page
  }
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>Product 3</Link> 
        {/* replace word clears the history and whin clicking back in the browser, it will navigate to the root page*/}
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>

      <button onClick={handleClick}>click</button>
    </>
  );
}