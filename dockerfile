FROM node:latest AS builder
WORKDIR /usr/src/app
COPY ./frontend/package.json ./frontend
RUN yarn
COPY ./frontend ./frontend
RUN yarn build

FROM nginx
COPY --from=builder /usr/src/app//frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

FROM java
ADD backend/target/spring-boot-api-project-seed-1.0.jar app.jar
# 开放tcp端口
EXPOSE  3001/tcp
ENV LANG C.UTF-8
# 镜像启动的时候执行这个命令
CMD exec java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app.jar

# 网络 --network cspid_net  172 /Ftpfile/root/:/home  120 /video/root:/home