# Sweets
Flexible declarative web framework for real-time projects

## Liquorice
**Request proxy**

This proxy was made for CORS requests

---

### proxy.call
#### request
* __url__ — request url;
* _method_ — default: `get`, request method: `get`, `post`;
* _headers_ — additional request headers;
* _body_ — request body. If method is `get` then body will become a query string;
* _json_ default: false, the same as in the settings but applies to this request.

#### response
* __status__ — status of the __original__ response;
* __body__ — body of the __original__ response;

---

### Settings
#### proxy
* __maxRedirects__ — the maximum number of redirects to follow
* __json__ —  sets `body` but to JSON representation of value and adds `Content-type: application/json` header. Additionally, parses the response body as JSON.
