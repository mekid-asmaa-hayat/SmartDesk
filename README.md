# SmartDesk

SmartDesk is a modern Angular ticketing and support application starter designed for junior front-end applications and portfolio use. It demonstrates a realistic enterprise structure with authentication, route guards, dashboard KPIs, ticket workflows, user administration, profile management, settings, reactive forms, signals, and Angular Material.

## Why this project is good for interviews

- Enterprise-style Angular architecture
- Standalone components and route-based code organization
- Signals + computed state
- Route guards for authentication and role-based access
- Reactive forms with validation
- Reusable mock data service backed by localStorage
- Angular Material UI with responsive layout
- Ready to evolve toward JSON Server, NestJS, Firebase, or Spring Boot

## Tech stack

- Angular 21-style project structure
- Angular Material
- RxJS + Signals
- Routing + Guards
- Reactive Forms
- Jasmine/Karma test starter
- Optional JSON Server mock API

## Screens included

- Login
- Dashboard
- Tickets
- Users
- Profile
- Admin Settings

## Getting started

```bash
npm install
npm start
```

Open `http://localhost:4200`.

### Demo credentials

- **Admin**: `admin@smartdesk.dev` / `admin123`
- **Agent**: `agent@smartdesk.dev` / `agent123`

## Optional JSON Server

A sample `mock-api/db.json` file is included if you want to replace the local in-memory service later.

```bash
npm run mock:api
```

This serves a REST API on `http://localhost:3000`.

## Suggested GitHub repo description

> SmartDesk is a modern Angular support and ticketing app built with standalone components, signals, route guards, reactive forms, and Angular Material.

## Suggested improvements for a second version

- Connect to a real backend with JWT authentication
- Add unit tests for services and guards
- Add filtering by status, priority, and date in URL query params
- Add charts with analytics
- Add dark mode
- Add CI with GitHub Actions
- Deploy on Firebase Hosting, Vercel, or Netlify

## Project structure

```text
src/app
├── core
│   ├── guards
│   ├── layout
│   ├── models
│   └── services
├── features
│   ├── admin
│   ├── auth
│   ├── dashboard
│   ├── profile
│   ├── tickets
│   └── users
└── shared
```
