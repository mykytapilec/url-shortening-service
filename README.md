# URL Shortening Service

Simple URL Shortening Service built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## Features

- Shorten long URLs
- Redirect short URLs to original URLs
- Access count tracking
- Retrieve all URLs or single URL by code

---

## Setup

git clone https://github.com/mykytapilec/url-shortening-service.git
cd url-shortening-service
npm install
npm run dev

Server: http://localhost:3000

---

## API

Create short URL:
curl -X POST http://localhost:3000/shorten -H "Content-Type: application/json" -d '{"url":"https://example.com"}'

Get URL by code:
curl http://localhost:3000/shorten/CODE

Redirect short URL:
curl -v http://localhost:3000/CODE

Get all URLs (optional if implemented):
curl http://localhost:3000/shorten/urls

---

## Notes

- Access count increments on each redirect
- Data persists in MongoDB
- Short codes are 6-character alphanumeric strings
- Invalid or non-existent codes return a 404 error

---

## Project

https://roadmap.sh/projects/url-shortening-service