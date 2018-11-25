# 1. 备份原来的更新源

> cp /etc/apt/sources.list /etc/apt/sources.list.backup

>如果提示权限不够就输入下面两行，先进入到超级用户，再备份
`sudo -s`
`cp /etc/apt/sources.list /etc/apt/sources.list.backup`

# 2. 打开sources.list (这就是存放更新源的文件)

[清华Ubuntu镜像](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

>`gedit /etc/apt/sources.list`

> 将下面所有内容复制，粘贴并覆盖sources.list文件中的所有内容

	# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
	deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse
	# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse
	deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
	# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
	deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
	# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
	deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
	# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse

	# 预发布软件源，不建议启用
	# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
	# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse

# 3. 让更新源生效

	sudo apt-get update