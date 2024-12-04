import http from "k6/http";
import { check } from 'k6';
import { generatePetData } from "../.github/workflows/data-seed/generateData.js";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m", target: 10 },
    { duration: "20s", target: 0 },
  ],

  thresholds:{
    http_req_duration: ['p(99)<300'], //99% of requests should be below 300ms
  },
};

export default function () {
  const url = "https://petstore.swagger.io/v2/pet";

  const payload = generatePetData();

  const data = JSON.stringify(payload);

  const params = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  let response = http.post(url, data, params);

  check(response, {
    'is status 200': (r) => r.status === 200
  })

  console.log(`response: ${JSON.stringify(response)}`);
}
