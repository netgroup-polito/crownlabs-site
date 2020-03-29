FROM palexster/hugo AS builder

ADD . /website
WORKDIR /website
RUN hugo --verbose

FROM nginx
COPY --from=builder /website/public /usr/share/nginx/html

