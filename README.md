
# SparkAéro Proxy Server

This Node.js server fetches aviation news using NewsAPI and serves it to your FlutterFlow app.

## How to use

1. Add your NewsAPI key in a `.env` file like this:

```
NEWS_API_KEY=your_actual_api_key_here
```

2. Deploy this server to Render (https://render.com) or any Node-compatible platform.

3. Use the `/aviation-news` endpoint in FlutterFlow to get the latest aviation news.
