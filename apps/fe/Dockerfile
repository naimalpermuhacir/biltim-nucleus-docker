FROM oven/bun:1.2.23 AS base
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY . .
RUN bun install --frozen-lockfile || bun install \
  && mkdir -p node_modules/next/dist/node_modules \
  && ln -sf ../../../babel-plugin-react-compiler node_modules/next/dist/node_modules/babel-plugin-react-compiler \
  && bun install --cwd apps/fe

EXPOSE 3000
CMD ["bun", "run", "--cwd", "apps/fe", "dev"]
