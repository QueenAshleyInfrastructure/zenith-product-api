## SBA: Build a Product API (Zenith)

This SBA implements a RESTful Product API for the fictional e-commerce company "Zenith" using Node.js, Express, and Mongoose. The API manages product data and supports full CRUD operations plus advanced querying for filtering, sorting, and pagination.

### How to Run

1. Install dependencies:
   - `npm install`
2. Create a `.env` file using `.env.example` as a guide and set `MONGO_URI` and a `PORT`.
3. Start the server:
   - `npm start`
4. Use an API client to test endpoints under `/api/products`, including:
   - `POST /api/products`
   - `GET /api/products/:id`
   - `PUT /api/products/:id`
   - `DELETE /api/products/:id`
   - `GET /api/products` with optional query parameters such as `category`, `minPrice`, `maxPrice`, `sortBy`, `page`, and `limit`.

### Reflection Questions

**1. How does a well-structured project (with separate directories for connection logic, models, and routes) help maintain and scale an API like this Product API?**

Having separate directories for configuration/connection logic, Mongoose models, and Express routes enforces a clean separation of concerns. This organization makes it easier to locate and modify specific behavior, onboard new developers, and add new features without tangling unrelated parts of the codebase. As the API grows to support more resources or complex logic, this structure reduces coupling and helps prevent regressions.

**2. Why is validation in the `Product` schema (for example, `required` fields and a minimum `price`) important for the reliability of the API?**

Schema validation ensures that only well-formed and meaningful data is stored in the database. Required fields prevent incomplete records, and constraints like a minimum `price` guard against invalid values that could break business logic or analytics later. Putting validation in the schema centralizes these rules so they are consistently enforced regardless of where the data comes from.

**3. What are some benefits of supporting advanced querying (filtering, sorting, and pagination) on the `GET /api/products` endpoint?**

Advanced querying makes the API more efficient and flexible for clients. Filtering allows clients to request only the relevant subset of products (for example, by category or price range), sorting helps present data in a useful order (such as lowest to highest price), and pagination limits the amount of data returned per request, improving performance and user experience. Together, these features reduce bandwidth usage and server load while giving clients more control over how they consume product data.

