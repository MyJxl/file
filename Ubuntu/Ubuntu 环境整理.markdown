## 1. VMware 安装 Ubuntu16.4 64位系统  
## 2. 首次登陆系统, 设置root密码
## 3. 安装 VMware Tools.
>光盘默认安装位置是 /media/jiexl/VMware Tools/

## 4. 安装ssh
[百度经验安装ssh](https://jingyan.baidu.com/article/359911f5a5b74857fe0306c4.html "安装ssh")
> 1. 首先看看自己的Ubuntu是不是已经安装或启用了ssh服务，执行`ps -e |grep ssh`.  
> ssh-agent 是ssh-client客户端服务，如果有sshd，证明你已经装好了ssh-server并已启用，就可以不用往下看了  
> 2. 如果没有安装执行`sudo apt install openssh-server`开始安装，输入`yes`回车  
> 3. 然后再执行`ps -e |grep ssh`，发现多了`sshd`,远程连接本电脑就已经启用了  

## 5. 设置虚拟机为nat联网, linux为静态IP
[原作者博客](http://www.cnblogs.com/lanxuezaipiao/p/3613497.html)  
[支持16.04](https://blog.csdn.net/u012845099/article/details/80055049)  
[本地保存的源文件](./Ubuntu虚拟机设置固定IP上网(配置IP、网关、DNS、防止resolv.conf被重写).html)

```
	sudo gedit /etc/resolv.conf

	iface ens33 inet static
	address 192.168.25.150
	netmask 255.255.255.0
	gateway 192.168.25.2
	dns-nameservers 8.8.8.8

	sudo /etc/init.d/networking restart
```

## 6. 安装Vim
>安装命令：`sudo apt-get install vim`  
查看是否安装成功：`vim --version`   

## 7. 更新ubuntu源  
[原作者博客](https://blog.csdn.net/maizousidemao/article/details/79127695)  

1. 备份原来的更新源  
```
	cp /etc/apt/sources.list /etc/apt/sources.list.backup  
```
	如果提示权限不够就输入下面两行，先进入到超级用户，再备份  
```
	sudo -s  
	cp /etc/apt/sources.list /etc/apt/sources.list.backup  
```

2. 打开sources.list (这就是存放更新源的文件)  
	[清华Ubuntu镜像](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
```  
	gedit /etc/apt/sources.list
```  
	将下面所有内容复制，粘贴并覆盖sources.list文件中的所有内容
```
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
```
3. 让更新源生效  
```
	sudo apt-get update
```

## 8. 挂载Windows共享目录

```
	1. 安装cifs
	sudo apt-get install cifs-utils
	2. 挂载目录
	sudo mount  -t cifs //192.168.25.1/code  ./code  -o username=Jxl,passwd=123456,iocharset=utf8,rw,dir_mode=0777,file_mode=0777 #
```
```
通过linux 的mount命令挂载windows下的共享目录，挂载后目录权限为755，普通用户没有权限写入。chmod给目录加权限出现错误，和普通的目录不同。

通过linux的 man mount.cifs 简单的了解下。

NAME
       mount.cifs - mount using the Common Internet File System (CIFS)
       cifs的意思是通用网络文件系统。
DESCRIPTION
       This tool is part of the cifs-utils suite.
       

       mount.cifs mounts a Linux CIFS filesystem. It is usually invoked indirectly by the mount(8) command when using the "-t cifs" option. This command only works in Linux, and the kernel must support the cifs filesystem. The CIFS protocol is the successor to the SMB protocol and is supported by most Windows servers and many other commercial servers and Network Attached Storage appliances as well as by the popular Open Source server Samba.
      mount.cifs用于挂载linux的CIFS文件系统，当用-t cifs命令的时候间接的涉及了mount(8)命令。这个命令只能在linux上执行，以及内核必须支持cifs文件系统。cifs协议的前身是smb协议，被大部分的windows、商业服务器、存储应用支持。（mount.cifs跟mount -t cifs唯一的区别就是mount.cifs在samba软件包里，而mount在util-linux软件包里。)

       The mount.cifs utility attaches the UNC name (exported network resource) specified as service (using //server/share syntax, where "server" is the server name or IP address and "share" is the name of the share) to the local directory mount-point.
       mount -t cifs 192.168.50.34:temp /root/aa 通过类似的形式使用。192.168.50.34是windows的ip地址，temp目录是windows的共享目录。


       Options to mount.cifs are specified as a comma-separated list of key=value pairs. It is possible to send options other than those listed here, assuming that the cifs filesystem kernel module (cifs.ko) supports them. Unrecognized cifs mount options passed to the cifs vfs kernel code will be logged to the kernel log.


       mount.cifs causes the cifs vfs to launch a thread named cifsd. After mounting it keeps running until the mounted resource is unmounted (usually via the umount utility).
         mount.cifs 挂载后会有一个cifsd进程出现。
```

>继续查看下mount.cifs的语法.  

| file_mode=arg | If the server does not support the CIFS Unix extensions this overrides the default file mode.  |
| --------   | -----:  |
| dir_mode=arg | If the server does not support the CIFS Unix extensions this overrides the default file mode.|

>可以通过file_mode 和dir_mode 来设置权限，覆盖默认的755权限。

```
jiexl@Virtual:~$ sudo mount  -t cifs //192.168.25.1/code  ./code  -o username=Jxl,passwd=123456,iocharset=utf8,rw,dir_mode=0777,file_mode=0777 #
jiexl@Virtual:~$
jiexl@Virtual:~$
jiexl@Virtual:~$ ls -l | grep code
drwxrwxrwx 2 root  root     0 11月 24 18:51 code
```

