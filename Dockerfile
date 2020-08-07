FROM registry.op.simbalink.cn/bigbang-open/simba_nginx:1.13.7

COPY ./dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN /bin/bash -c 'echo init success ok!'

EXPOSE 9530