# 从 nginx 镜像开始构建
FROM registry.cn-hangzhou.aliyuncs.com/library/nginx

# 将项目根目录下的 dist 目录中的内容复制到容器的 /usr/share/nginx/html 目录中，作为静态文件目录
COPY ./dist /usr/share/nginx/html

# 将项目目录下的 nginx.conf 文件复制到容器的 /etc/nginx/nginx.conf 路径下，以配置 nginx
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 80 端口，使容器可以通过此端口对外提供服务
EXPOSE 80

# 启动 nginx，并以前台模式运行（-g "daemon off;" 表示在前台运行）
CMD ["nginx", "-g", "daemon off;"]
