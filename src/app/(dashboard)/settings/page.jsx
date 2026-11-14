import AnalyticsButton from "../../../../components/GoToAnalyticsButton";

export default function Settings() {
  console.log("Settings page is renderingg ! ");

  return (
    <div className="p-4">
      <h1 className="text-2xl">This is part of the settings page ! </h1>
      <p className="mt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sint
        quis enim explicabo quae dolore quaerat, rem molestiae aspernatur
        blanditiis est, possimus asperiores. Quia perspiciatis iure, adipisci
        hic rerum repellat!
      </p>

      <AnalyticsButton>Go to Analytics Page</AnalyticsButton>
    </div>
  );
}
