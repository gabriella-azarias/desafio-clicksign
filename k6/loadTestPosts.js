import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 5 },
    { duration: "30s", target: 20 },
    { duration: "30s", target: 20 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<500"],
  },
};

export default function () {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = http.get(url);

  check(res, {
    "status é 200": (r) => r.status === 200,
    "tem conteúdo": (r) => r.body && r.body.length > 0,
    "content-type json": (r) =>
      (r.headers["Content-Type"] || "").includes("application/json"),
  });

  sleep(1);
}
