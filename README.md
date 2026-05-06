<div align="center">

# 🖥️ SmartDesk

### Modern Angular Ticketing & Support Application

[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Angular Material](https://img.shields.io/badge/Angular_Material-757575?style=for-the-badge&logo=material-design&logoColor=white)](https://material.angular.io/)
[![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Vercel](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://smart-desk-kappa.vercel.app)

**Enterprise-grade Angular starter — built for portfolios, interviews, and real-world learning.**

[🔗 View Live Demo](https://smart-desk-kappa.vercel.app/login) · [📁 Project Structure](#-project-structure) · [🚀 Getting Started](#-getting-started)

</div>

---

## 📸 Screenshots

<div align="center">

### 🔐 Login Page

![Login Page](docs/screenshots/Login-Page.png)

### 📊 Dashboard — Admin View

![Admin Dashboard](docs/screenshots/Admin-Dashboard.png)

### 📊 Dashboard — Agent View

![Dashboard Agents](docs/screenshots/Dashboard-Agents.png)

### 🎫 Tickets Management

![Tickets Page](docs/screenshots/Tickets-Page.png)

### 👥 Users Administration

![Users Page](docs/screenshots/Users-Page.png)

</div>

---

## ✨ Overview

**SmartDesk** is a production-ready Angular starter simulating a real helpdesk and ticketing platform. It showcases an enterprise architecture with authentication, role-based access, KPI dashboards, ticket workflows, user administration, reactive forms, Angular Signals, and a fully responsive Material UI.

> 🎯 Designed to be shown in technical interviews and used as a strong portfolio project.

---

## 💡 Why This Project Stands Out for Interviews

| Feature                   | What it demonstrates                                          |
| ------------------------- | ------------------------------------------------------------- |
| **Standalone Components** | Modern Angular architecture without NgModules                 |
| **Route Guards**          | `AuthGuard` + `RoleGuard` for protected routes                |
| **Angular Signals**       | Reactive state with `signal()` and `computed()`               |
| **Reactive Forms**        | Full validation, error handling, UX patterns                  |
| **Mock Data Service**     | `localStorage`-backed service — ready to swap with a real API |
| **Angular Material**      | Professional, responsive UI out of the box                    |
| **Clean Architecture**    | Core / Features / Shared separation                           |
| **Code Organization**     | Route-based code splitting, lazy loading ready                |

---

## 🛠️ Tech Stack

```
Angular 17+          → Standalone components, routing, lazy loading
TypeScript           → Strict typing, strongly-typed models
Angular Material     → Enterprise-ready UI components
RxJS + Signals       → Reactive state management
Reactive Forms       → Validation & advanced UX
Jasmine / Karma      → Unit test starter
JSON Server          → Optional mock REST API
```

---

## 🖥️ Screens Included

| Screen                | Role  | Description                               |
| --------------------- | ----- | ----------------------------------------- |
| **Login**             | All   | Auth with role-based redirection          |
| **Dashboard (Admin)** | Admin | Full KPIs, metrics, activity summary      |
| **Dashboard (Agent)** | Agent | Filtered view for agent scope             |
| **Tickets**           | Both  | Full CRUD — statuses, priorities, filters |
| **Users**             | Admin | User management & role assignment         |
| **Profile**           | Both  | Reactive profile form                     |
| **Admin Settings**    | Admin | App configuration panel                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/mekid-asmaa-hayat/smartdesk.git
cd smartdesk

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:4200](http://localhost:4200)

### 🔑 Demo Credentials

| Role      | Email                 | Password   |
| --------- | --------------------- | ---------- |
| **Admin** | `admin@smartdesk.dev` | `admin123` |
| **Agent** | `agent@smartdesk.dev` | `agent123` |

---

## 🔌 Optional — JSON Server Mock API

A `mock-api/db.json` file is included to replace the in-memory service with a real REST API.

```bash
npm run mock:api
```

Serves a REST API on `http://localhost:3000`

---

## 📁 Project Structure

```
src/app
├── core/
│   ├── guards/          ← AuthGuard, RoleGuard
│   ├── layout/          ← Shell, Sidebar, Navigation
│   ├── models/          ← TypeScript interfaces
│   └── services/        ← AuthService, TicketService
│
├── features/
│   ├── admin/           ← Admin settings panel
│   ├── auth/            ← Login / Logout
│   ├── dashboard/       ← KPIs & metrics
│   ├── profile/         ← User profile management
│   ├── tickets/         ← Ticket CRUD & workflow
│   └── users/           ← User administration
│
└── shared/              ← Reusable components & pipes
```

---

## 🗺️ Roadmap — Version 2.0

- [ ] Real backend with JWT authentication (NestJS / Firebase / Spring Boot)
- [ ] Unit tests for services and guards
- [ ] URL query params for filtering (status, priority, date)
- [ ] Charts & analytics (Chart.js / ngx-charts)
- [ ] Dark mode via Angular Material theming
- [ ] CI/CD pipeline with GitHub Actions
- [ ] PWA support

---

## 🌐 Live Demo

> **[🔗 https://smart-desk-kappa.vercel.app](https://smart-desk-kappa.vercel.app/login)**

Use the demo credentials above to explore both Admin and Agent views.

---

<div align="center">

**Built with ❤️ using Angular · TypeScript · Angular Material**

_Feel free to fork, star ⭐, and use this project as a base for your own applications._

</div>
