import { Suspense } from "react";
import Posts from "../../../components/Posts";

export default function HeavyPage() {
  return (
    <div>
      <h1 className="text-6xl">Hello world</h1>
      {/* Extra note - If there was a suspense boundary here and the correct loading.js on the correct hierarchy - the susppenser boundary that was the near most would work  */}
      <Suspense
        fallback={<h1 className="text-4xl">Shit is about to load ...</h1>}
      >
        <Posts />
      </Suspense>
    </div>
  );
}
