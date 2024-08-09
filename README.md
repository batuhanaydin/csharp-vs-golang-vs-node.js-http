# csharp-vs-golang-vs-node.js
C# vs Node.js vs Golang — Which Language is Faster on a Standard Web Server?


## Performance Test with k6

The performance test results are summarized in the table below:

| Framework       | Requests per Second | Average Response Time (ms) | 95th Percentile Response Time (ms) |
|-----------------|----------------------|-----------------------------|------------------------------------|
| Golang          | 141,906.00           | 0.66                        | 1.98                               |
| C#              | 129,739.88           | 0.73                        | 2.01                               |
| Fastify Worker  | 126,510.51           | 0.74                        | 1.50                               |
| Fastify         | 31,970.55            | 3.09                        | 4.50                               |
| Node.js Express | 8,989.77             | 11.08                       | 14.00                              |



This script is used for performance testing with [k6](https://k6.io/). It sends HTTP GET requests to a specified endpoint and checks if the response status is 200.

### Test Script

```javascript
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

