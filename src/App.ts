import { UserApi } from "./UserApi";

// sample do work routine
(async () => {
  // make the call to get the data
  const userAgentResponse = UserApi.getUserAgent();

  // wait for it
  try {
    const userAgent = await userAgentResponse.promise;

    // userAgent is of AxiosResponse => should have all the data
    // like `data`, `headers`, etc...
    console.log("SUCCESS: ", userAgent.data);
  } catch (err) {
    console.log("ERROR: ", err);
  }
})();
