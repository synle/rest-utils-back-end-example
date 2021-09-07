import { makeRestApi, RestApiResponse } from "synle-rest-utils";

export interface UserAgentResponse {
  "user-agent": string;
}

export class UserApi {
  static getUserAgent(): RestApiResponse<UserAgentResponse> {
    return makeRestApi("https://httpbin.org/user-agent");
  }
}
