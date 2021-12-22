FROM klakegg/hugo:0.91.0-ext-alpine-ci AS builder

COPY . /website
WORKDIR /website
RUN hugo --verbose

FROM nginx:1.21-alpine
COPY --from=builder /website/public /usr/share/nginx/html
