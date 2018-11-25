# 1. python ubuntu16.04软件安装
>使用的系统是Ubuntu 16.04, 系统自带Python3.5

+ 升级python包管理工具pip

```
pip install --upgrade pip
备注：当你想升级一个包的时候 pip install --upgrade 包名

```

+ 使用pip3时出现问题

```
Traceback (most recent call last):
  File "/usr/bin/pip3", line 9, in <module>
    from pip import main
ImportError: cannot import name 'main'
```

>解决方法如下:
修改	`/usr/bin/pip`文件将

```
from pip import main
if __name__ == '__main__':
    sys.exit(main())
```

>修改为：

```
from pip import __main__
if __name__ == '__main__':
    sys.exit(__main__._main())
```

+ python虚拟环境安装

```
sudo apt-get install python-virtualenv
sudo easy_install virtualenvwrapper
上述工具装好后找不到mkvirtualenv命令，需要执行以下环境变量设置。
```

+ 创建目录用来存放虚拟环境

```
mkdir $HOME/.virtualenvs
```

+ 在`~/.bashrc`中添加行

```
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

+ 运行:

```
source ~/.bashrc
```

+ 创建python虚拟环境

```
mkvirtualenv [虚拟环境名称]
workon [虚拟环境名称]
```

+ 退出虚拟环境

```
deactivate
```

+ 删除(慎用)

```
rmvirtualenv [虚拟环境名称]
```

+ 查看虚拟环境中已经安装的包

```
pip list
pip freeze
```

# 2. 创建两个虚拟环境, 在Python2 和 Python3环境之间切换


1.分别创建python2和python3的虚拟环境

```
mkvirtualenv -p /usr/bin/python2.7 python27_env
mkvirtualenv -p /usr/bin/python3.5 python35_env
```

2.python2和python3之间的切换

```
#使用python2
workon python27_env
#退出python2
source deactivate
#使用python3
workon python35_env
#退出python3
source deactivate
```

# 3. Django环境

## 安装django


* 建议安装1.8.2版本，这是一个稳定性高、使用广、文档多的版本  
```
pip install django==1.8.2
```

* 查看版本：进入python shell，运行如下代码
```
import django
django.get_version()
```

* 说明：使用pip install django命令进行安装时，会自动删除旧版本，再安装新版本


## 创建项目

```
django-admin startproject test1
```

* manage.py：一个命令行工具，可以使你用多种方式对Django项目进行交互
* 内层的目录：项目的真正的Python包
* _init _.py：一个空文件，它告诉Python这个目录应该被看做一个Python包
* settings.py：项目的配置
* urls.py：项目的URL声明
* wsgi.py：项目与WSGI兼容的Web服务器入口

### 创建应用

创建应用
在一个项目中可以创建一到多个应用，每个应用进行一种业务处理
创建应用的命令：  
> python manage.py startapp booktest

### 更多内容  
转载自 [itcast](./django/index.html)

# 4. 
