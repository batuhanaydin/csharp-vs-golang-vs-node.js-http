import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 100, 
  duration: '30s', 
};

export default function () {
  const res = http.get('http://127.0.0.1:8082'); 
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}