import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 50 },    // warm-up
    { duration: '3m', target: 200 },   // steady load (observe CPU rise)
    { duration: '3m', target: 500 },   // sustained stress (HPA should react here)
    { duration: '2m', target: 500 },   // keep pressure (important for scaling stability)
    { duration: '2m', target: 0 },    // cool down
  ],

  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://auth.samuelpepple.online');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}