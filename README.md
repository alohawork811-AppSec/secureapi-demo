# SecureAPI

A production-ready REST API with authentication, rate limiting, and security best practices.

## Quick Start

```bash
npm install
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Create account
- `POST /api/v1/auth/login` - Sign in

### Users
- `GET /api/v1/users/me` - Get profile (requires auth)
- `PUT /api/v1/users/me` - Update profile (requires auth)

### Health
- `GET /health` - Service health check

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `JWT_SECRET` | Token signing key | dev-secret |
| `ALLOWED_ORIGINS` | CORS origins (comma-sep) | * |
| `NODE_ENV` | Environment | development |

## Security Features

- Helmet.js security headers
- CORS configuration
- JWT authentication
- bcrypt password hashing (12 rounds)
- Request body size limits
- Input validation

## Contributing

1. Create a feature branch
2. Make changes with tests
3. Submit a PR referencing the issue

## License

MIT
