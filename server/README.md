# Pokémon 3D Models - Backend API Documentation

This section documents the backend API for serving Pokémon 3D model data. The API is built using Node.js with Express.js and serves data from a single JSON file (`MergedOpt.json`).

<p align="center">
  <a href="https://github.com/LelouchFR/skill-icons">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=npm,nodejs,express,postman"/>
  </a>
</p>

---

## Table of Contents

- [Pokémon 3D Models - Backend API Documentation](#pokémon-3d-models---backend-api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [API Endpoint](#api-endpoint)
  - [Dependencies](#dependencies)
  - [Caching Details](#caching-details)
  - [Error Handling](#error-handling)
  - [Rate Limiting](#rate-limiting)
  - [CORS Configuration](#cors-configuration)

---

## Features
- Serves all Pokémon model data from a single JSON file (`MergedOpt.json`).
- Caches the JSON data for faster retrieval.
- Provides an endpoint to retrieve all Pokémon data.
- Uses rate limiting to prevent abuse.

## API Endpoint

-   **`/v1/pokemon`**: Returns an array of Pokémon objects, each containing model URLs and metadata.

Example of fetching data with JavaScript:

```javascript
fetch('https://pokemon-3d-api.onrender.com/v1/pokemon')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
```
## Dependencies
```
cd server 
npm i express nodemon dotenv express-rate-limit node-cache express-ipfilter cors
node server.js
```

`/ping`
- Method: `GET`
- Description: A simple health check endpoint. Returns a "pong" response to indicate that the server is running.
- Response:
  - Status Code: `200 OK`
  - Body: `pong`

## Caching Details
- The `/in/v1/pokemon` route uses NodeCache to cache the Pokémon data.
- TTL (Time To Live): 300 seconds (5 minutes).
- Check Period: 120 seconds (2 minutes).
- Cache Key: `pokemon-all`.

## Error Handling
The `/in/v1/pokemon` route returns a `500 Internal Server Error with an error message` if there's an issue reading or parsing the `MergedOpt.json` file.

## Rate Limiting
- The API uses `express-rate-limit` to prevent abuse.
- The default rate limit is 15 requests per minute.

## CORS Configuration
- The API uses `cors` to allow cross-origin requests.
- Ensure that your CORS configuration allows requests from the necessary origins.
