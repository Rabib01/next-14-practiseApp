"use client";

import { useRouter } from "next/navigation";

export default function AnalyticsButton({ children }) {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/dashboard/analytics");
  };
  return (
    <button
      onClick={handleRoute}
      className="mt-6 bg-amber-600 font-extrabold px-3 py-2 rounded text-gray-50"
    >
      {children}
    </button>
  );

  //   searchparams - ascending and desceding - 26:43
  // important shit for implementing pagination and for sorting and filtering
}
