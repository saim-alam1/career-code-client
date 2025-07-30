import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";

const MyApplications = () => {
  return (
    <div className="flex flex-col items-center justify-center my-9">
      <ApplicationStats />
      <Suspense fallback={"loading your application"}>
        <ApplicationList />
      </Suspense>
    </div>
  );
};

export default MyApplications;
