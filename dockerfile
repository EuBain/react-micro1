
# 配置 nginx 代理
FROM nginx:latest

RUN  mkdir /etc/nginx/ssl

# 复制 nginx 配置文件到容器目录
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将Vue项目的构建产物复制到新建的目录
COPY dist /usr/share/nginx/html

# 暴露Nginx的80端口
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]