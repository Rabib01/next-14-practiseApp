import { Suspense } from "react";
import Posts from "../../../components/Posts";

export default function HeavyPage() {
  return (
    <div>
      <h1 className="text-6xl">Hello world</h1>
      <Suspense
        fallback={<h1 className="text-4xl">Shit is about to load ...</h1>}
      >
        <Posts />
      </Suspense>
    </div>
  );
}
