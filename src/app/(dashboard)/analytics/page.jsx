import { Suspense } from "react";
import SortProducts from "../../../../components/SortComponents";

export default function Analytics() {
  // in real life scenarios these will be errors regarding for example : fetching data from a server and then it will result in a failure on the fetch case
  // throw new Error("Error in analytics page");

  return (
    <div className="p-4 ">
      <h1 className="text-2xl">This is part of the Anatlytics page ! </h1>
      <p className="mt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sint
        quis enim explicabo quae dolore quaerat, rem molestiae aspernatur
        blanditiis est, possimus asperiores. Quia perspiciatis iure, adipisci
        hic rerum repellat!
      </p>

      <br />
      <br />
      <br />
      <br />

      <Suspense fallback={<div>Loading sorting...</div>}>
        <SortProducts />
      </Suspense>
    </div>
  );
}
