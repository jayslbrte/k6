import http from "k6/http";
import { check, sleep } from "k6";
import { generateData } from "./generateData.js";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m", target: 10 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  const url = "https://petstore.swagger.io/v2/pet";

  const payload = generateData();

  const data = JSON.stringify(payload);

  const params = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  let response = http.post(url, data, params);

  console.log(`response: ${JSON.stringify(response)}`);
}
