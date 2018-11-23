# Makedown 简单语法整理  
>整理转载自:  
1. <a href = "https://www.w3cschool.cn/markdownyfsm/" title = "w3school" target=_blank>w3cschool</a>  
2. <a href = "https://www.zybuluo.com/mdeditor#fn:latex" title = "作业部落" target=_blank>作业部落</a>
>>查看更详细的语法说明，可以参考 [Cmd Markdown 简明语法手册][简明语法手册]  
>>进阶用户可以参考 [Cmd Markdown 高阶语法手册][高阶语法手册] 了解更多高级功能  


# 1. Markdown 标题

```
#一级标题
##二级标题
###三级标题
####四级标题
#####五级标题

一级标题
===

二级标题
---
```

>**Markdown 使用星号 \*  和底线 \_  作为标记强调字词的符号,用两个 \* 或 \_ 包起来的话，则会加粗  
>但是如果你的 * 和 _ 两边都有空白的话，它们就只会被当成普通的符号。**

*斜体*  
_斜体_  
**加粗**  
__加粗__  
___斜体加粗___  
***斜体加粗***

>**如果要在文字前后直接插入普通的星号或底线，你可以用反斜线（转义符）：\*这是一段被星号包围的文字\***

***

# 2. 删除线

>使用 ~~ 表示删除线.  

~~这是一段错误的文本.~~
  
# 3. Markdown 列表
>Markdown 支持有序列表和无序列表.  
无序列表使用星号、加号或是减号作为列表标记：

####无序列表  
* 子项1  
+ 子项2  
- 子项3  

####有序列表
>列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

1. test1
2. test2
3. test3  
4. test4  
5. test5  

***
# 4. 超链接

>Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。  
不管是哪一种，链接文字都是用 [方括号] 来标记。  
要建立一个行内式的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，

#### 内嵌方式:
[百度1](http://www.baidu.com/ "百度链接test1")

#### 参考式方式:
>在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：  
>链接内容定义的形式为：  
>>* 方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字  
>* 接着一个冒号  
>* 接着一个以上的空格或制表符  
>* 接着链接的网址  
>* 选择性地接着 title 内容，可以用单引号、双引号或是括弧包着  

>链接网址也可以用尖括号包起来

[百度2][id]
[id]: http://www.baidu.com/ "百度test2"

>可以把 title 属性放到下一行，也可以加一些缩进，若网址太长的话，这样会比较好看  

[百度3][id1]
[id1]: http://www.baidu.com/ 
	"百度test3"

#### 隐式链接标记
>隐式链接标记功能让你可以省略指定链接标记，这种情形下，链接标记会视为等同于链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：

[百度4][]
[百度4]: http://www.baidu.com/ "百度test4" 

#### 参考式链接范例：

I get 10 times more traffic from [阿里云] [2] than from [百度云] [1] or [腾讯云] [3].  

[1]: http://cloud.baidu.com/        "百度云"
[2]: http://www.aliyun.com/  		"阿里云"
[3]: http://cloud.tencent.com/      "腾讯云"

#### 链接名称范例：

I get 10 times more traffic from [阿里云] [] than from [百度云] [] or [腾讯云] [].  

[阿里云]: http://cloud.baidu.com/        "百度云"
[百度云]: http://www.aliyun.com/  		"阿里云"
[腾讯云]: http://cloud.tencent.com/      "腾讯云"

#### 引用存储文件:
>链接到同样主机的资源，你可以使用相对路径：  

[本地存储测试](./readme.txt "本地引用存储文件")

#### Email 邮件:
<xx@qq.com>

***

# 5. 插入图片  

####* 行内式
> 详细叙述如下：  
	* 一个惊叹号 !  
	* 接着一个方括号，里面放上图片的替代文字  
	* 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。  

![xhy](./xhy.gif "小黄鸭")

![百度logo](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png "百度logo")

####* 参考式：

![baidu][logo]
[logo]: https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png  "baidu logo"
---
![duck][szy]
[szy]: ./szy.gif "szy引用方式"


>Markdown也支持传统的HTML标签。  
比如一个链接，你不太喜欢Markdown的写法，也可以直接写成

<a href="https://www.baidu.com/">百度</a>

***

# 6. 注脚[^注脚]

使用 [^keyword] 表示注脚。

这是一个注脚[^注脚1]的样例。

这是第二个注脚[^注脚2]的样例。

***

# 7. 语法高亮

```c++
	int main()
	{
		printf("Hello world!");
	}
```

```python
	@requires_authorization
	class SomeClass:
	    pass

	if __name__ == '__main__':
	    # A comment
	    print 'hello world'
```

#### Markdown 代码
>如果要标记一小段行内代码，你可以用反引号把它包起来(\`)  

Use the `printf()` function.  

>如果要在代码区段内插入反引号，你可以用多个反引号来开启和结束代码区段：

``There is a literal backtick (`) here.``

#### Block Code 代码分组(代码区块)：  
在该行开头缩进4个空格或一个制表符(tab)

	> Email-style angle brackets
	> are used for blockquotes.
	> > And, they can be nested.
	> #### Headers in blockquotes
	> * You can quote a list.
	> * Etc.

#### Hard Line Breaks 换行：
在一行的结尾处加上2个或2个以上的空格，也可以使用</br\>标签</br>
第一行文字</br>
第二行文字

#### Horizontal Rules 水平分割线：
***
* * *
- - -

#### Escape character 转义符(反斜杠)：

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果，你可以在星号的前面加上反斜杠：

\*literal asterisks\*

	Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
	
	\反斜杠  
	`反引号  
	*星号  
	_下划线  
	{}花括号  
	[]方括号  
	()括弧  
	#井字号  
	+加号  
	-减号  
	.英文句 
	!感叹号


# 8. 绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |


# 9. 待办事宜

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能


[简明语法手册]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown
[高阶语法手册]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#cmd-markdown-高阶语法手册


[^注脚]: 注脚 test   
[^注脚1]: 注脚1 test  
[^注脚2]: 注脚2 test  