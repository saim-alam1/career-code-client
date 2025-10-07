import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = UseAuth();
  console.log("firebase token:", user.accessToken);

  return (
    <div className="flex flex-col items-center justify-center my-9">
      <ApplicationStats />
      <Suspense fallback={"loading your application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
