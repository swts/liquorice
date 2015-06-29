# Sweets
Next Web builder toolkit

## Liquorice
**Request proxy candy**

This proxy was made for CORS requests

### proxy
#### get
##### request
* __url__ — request url;
* _method_ — default: `get`, request method: `get`, `put`, `post`, `delete`;
* _headers_ — additional request headers;
* _body_ — request body. If method is `get` then body will become a query string;
* _json_ default: false, the same as in the settings but applies to this request.

##### response 
* __status__ — status of the __original__ response;
* __body__ — body of the __original__ response;

### Settings
```js
    this.proxy = {
        maxRedirects: 10,
        json: false
    }
```

* __maxRedirects__ — the maximum number of redirects to follow
* __json__ —  sets `body` but to JSON representation of value and adds `Content-type: application/json` header. Additionally, parses the response body as JSON.
