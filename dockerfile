FROM node:latest AS builder
WORKDIR /usr/src/app
COPY ./frontend/package.json ./frontend
RUN yarn
COPY ./frontend ./frontend
RUN yarn build

FROM nginx
COPY --from=builder /usr/src/app//frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

FROM java
ADD backend/target/spring-boot-api-project-seed-1.0.jar app.jar
EXPOSE  3002/tcp
ENV LANG C.UTF-8
CMD exec java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app.jar