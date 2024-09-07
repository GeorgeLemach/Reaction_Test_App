FROM nginx:alpine

COPY ./about.html /usr/share/nginx/html/
COPY ./index.html /usr/share/nginx/html/
COPY ./test.html /usr/share/nginx/html/
COPY ./css /usr/share/nginx/html/
COPY ./js/nav.js /usr/share/nginx/html/
COPY ./js/tes.js /usr/share/nginx/html/

#Changing the configurations to a custom one for NGINX.
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]