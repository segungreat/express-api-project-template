# Express API Project Template

This repository is a basic template for starting and setting up an express js API application. This is a basic setup, it does not include database. You are free to use any database and ORM of your choice but you will need to that up yourself or check the other branches in this repo

## Project Setup

Follow these steps to set up the project locally:

### Clone the Repository

```bash
git clone https://github.com/segungreat/express-api-project-template.git
cd express-api-project-template
```

### Install Dependencies

The project uses yarn as the package manager. Install the required dependencies using:

```bash
yarn install
```

### Setup Environment Variables

Create a `.env` file in the root directory and configure it based on the required variables:

* `PORT`

### Run the Application

```bash
yarn run dev
```

### Access the API

The API will be available at: `http://localhost:<PORT>`

---

## Architecture

* **Backend Framework**: Express.js
* **Middleware**: Custom middlewares for error handling, 404 responses, and setting base URLs
* **Logging**: Morgan for HTTP request logging
* **Rate Limiting**: SlowDown for HTTP request rate limiting

---

## Error Handling

The repository includes a robust error-handling mechanism implemented using the `CustomError` class, located in the `src/handlers/error.ts` file. This class standardizes error responses and provides a consistent structure for handling various HTTP error cases.

### Key Features:

#### CustomError Class:

* Centralized error handling with attributes such as `status`, `statusMessage`, `message`, `success`, and `error`
* Predefined message codes via the `CustomMessageCode` enumeration for specific error scenarios (e.g., `InvalidAccessToken`, `AuthenticationRequired`)

#### Static Methods:

Provides reusable static methods for common HTTP errors, including:

* `badRequest`: Handles 400 Bad Request errors
* `unauthorizedRequest`: Handles 401 Unauthorized errors
* `notFound`: Handles 404 Not Found errors
* `internalServerError`: Handles 500 Internal Server errors
* Additional methods for unsupported media types, request timeouts, etc.

#### Middleware Integration:

Custom middlewares in the `src/middlewares` directory leverage the `CustomError` class for streamlined error handling. This approach ensures modularity, consistency, and ease of debugging in the application’s error management process.

---

## Folder Structure

* `src/controllers`: Controllers for handling API logic
* `src/routes`: Route definitions for API endpoints
* `src/middlewares`: Middleware functions for common tasks (e.g., error handling)
* `src/handlers`: Helper classes like `CustomError`

---

## Best Practices

### Code Structure

* We follow the **MVC (Model-View-Controller)** pattern:

  * **Controllers** (`src/controllers`) contain the business logic.
  * **Routes** (`src/routes`) define the API endpoints and map them to controllers.

### Coding Principles

* **Only abstract when absolutely necessary**. Avoid over-engineering — prioritize clarity and simplicity.
* Use **early return conditions** (guard clauses) to avoid deep nesting and improve readability.
* Use **`async/await`** consistently for handling asynchronous operations. Avoid `.then/.catch` in application logic.
* Keep functions **small**, **single-purpose**, and **testable**.
* Place reusable functions in the `src/helpers` directory with clear naming and proper documentation.

### Linting & Type Safety

* **ESLint** is configured and enforced across the codebase.
* All **ESLint messages must be resolved** — do not use `eslint-disable` unless approved.
* All **TypeScript errors must be resolved** — no `any`, no untyped catch blocks, and no unhandled errors.
* Use strict typing and aim for **zero `tsc` warnings**.

### Version Control & Deployment

* Developers must **test all code locally** before committing and pushing.
* Push only to the `stage` branch. All commits should use **conventional commit** messages:

  * `feat:` — A new feature
  * `fix:` — A bug fix
  * `docs:` — Documentation only changes
  * `style:` — Changes that do not affect meaning (white-space, formatting, etc.)
  * `refactor:` — Code change that neither fixes a bug nor adds a feature
  * `perf:` — Performance improvements
  * `test:` — Adding missing tests or correcting existing ones
  * `chore:` — Maintenance or non-user-facing changes
  * `revert:` — Reverts a previous commit
* The **main** branch is protected — code is reviewed and merged only by the repository maintainer.
* Keep pull requests focused and limited in scope for easier review.
