# Biltim Nucleus — Docker

Biltim Nucleus uygulamasının Docker ile production kurulumu.

## Gereksinimler

- Docker ve Docker Compose v2

## Hızlı başlangıç

```bash
cp .env.example .env
# .env içinde POSTGRES_PASSWORD ve BIND_IP değerlerini düzenleyin

docker compose -f docker-compose.prod.yml up -d --build
```

Uygulama varsayılan olarak `http://<BIND_IP>` üzerinden nginx ile yayınlanır (port 80).

## Ortam dosyaları

| Dosya | Açıklama |
|-------|----------|
| `.env` | Postgres şifresi ve bind IP (compose için, repoya eklenmez) |
| `apps/be/.env.production` | Backend production ayarları |
| `apps/fe/.env.production` | Frontend production ayarları |
| `apps/be/.env.docker` | Geliştirme compose (`docker-compose.yml`) |
| `apps/fe/.env.docker` | Geliştirme compose |

Production deploy öncesi `JWT_SECRET`, `JWT_REFRESH_SECRET` ve `GODMIN_PASSWORD` değerlerini mutlaka değiştirin.

## Servisler

- **postgres** — PostgreSQL 16
- **redis** — Redis 7
- **be** — Backend API (port 1001, internal)
- **fe** — Next.js frontend (port 3000, internal)
- **nginx** — Reverse proxy (port 80)

## Geliştirme

```bash
docker compose up -d --build
```
