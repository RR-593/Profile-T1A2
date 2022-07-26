FROM nginx:alpine

#config
COPY ./nginx.conf /etc/nginx/nginx.conf

# docker run -it -v $(pwd):/usr/share/nginx/html/ --name Portfolio -p 8082:80 portfolio:nginx-alpine 