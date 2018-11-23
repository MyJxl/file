# 1. Sublime Text 3 注册码

	----- BEGIN LICENSE -----
	sgbteam
	Single User License
	EA7E-1153259
	8891CBB9 F1513E4F 1A3405C1 A865D53F	
	115F202E 7B91AB2D 0D2A40ED 352B269B
	76E84F0B CD69BFC7 59F2DFEF E267328F
	215652A3 E88F9D8F 4C38E3BA 5B2DAAE4
	969624E7 DC9CD4D5 717FB40C 1B9738CF
	20B3C4F1 E917B5B3 87C38D9C ACCE7DD8
	5F7EF854 86B9743C FADC04AA FB0DA5C0
	F913BE58 42FEA319 F954EFDD AE881E0B
	------ END LICENSE ------

# 2. Package Control
>控制台输入命令:  
``` python
	import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

# 3. Install Package  
### 1. SublimeREPL
>*	Ctrl+shift+p 键入 install packages
>*	稍等片刻后 键入 SublimeREPL 安装即可
>*	通过选项Tools->SublimeREPL->Python就可以看到效果了

### 2. Terminal  
>*	打开一个命令窗口，用于各种命令操作  
>*	`ctrl+shift+t`

### 3. AutoPep8
>*	python开发规范pep8 
>*	`ctrl+shift+8`

### 4. Anaconda
>	自动匹配关键字等实用功能，有效提高开发效率  
	
>*	安装后写代码出现白框：可见原因是代码不符合PEP 8 规范。

>*	解决方法：
		直接关闭Anaconda的这项提示，Sublime > Preferences > Package Settings > Anaconda > Settings User 中添加如下代码：{"anaconda_linting": false} 或者 AutoPep8 format

>*	由于Anaconda插件本身无法知道Python安装的路径，所以需要设置Python主程序的实际位置。选择Settings-Default选项，搜寻“python_interpreter” key，并键入python主程序的磁盘位置。  
>	`{"python_interpreter": "D:/install/Python27/python.exe"}`

>*	选择Settings-Users选项，键入以下json数据, 基本配置。
```Json
	{
		"python_interpreter": "D:/install/Python27/python.exe",
		"suppress_word_completions": true,
	    "suppress_explicit_completions": true,
	    "complete_parameters": true,
	}
```

### 5. SublimeTmpl
>*	新建文件模板插件，可以支持多种语言例如Python、PHP等，下面的代码是我在配置文件中的配置信息
>*	在settings-user中设置上自己的信息 
```Json
	{  
        "disable_keymap_actions": false, 
        "date_format" : "%Y-%m-%d %H:%M:%S",  
        "attr": {  
            "author": "My_Jxl",  
            "email": "xx",  
            "link": "xx"  
        }  
	}
```

### 6. SideBarEnhancements
>	扩展了侧边栏中菜单选项的数量

### 7. ConvertToUTF8

### 8. AutoFileName
>	自动补全文件名

### 9. Soda 配色方案

### 10. Bracket​Highlighter 
>	Bracket​Highlighter 是一个括号、引号、标签高亮插件，支持 []、()、{}、""、'' 和 <tag></tag> 等，比 Sublime Text 自带的高亮要明显得多。

### 11. molokai 配色方案

### 12. 可以自由调整配色方案
[sublime配色网站](http://tmtheme-editor.herokuapp.com/#!/editor/local/Monokai)

### 13. SublimeCodeIntel
>	代码提示插件，可根据是python、java等自动代码提示

### 14. Markdown
[转载的原作者博客](https://blog.csdn.net/qq_20011607/article/details/81370236)  

#### \*1. MarkdownPreview  
>*	支持在浏览器中预览markdown文件  
>*	将md文件导出为html代码  

##### **将md文件用浏览器预览**
**\*1. 常规方法**

+ 组合键 `Ctrl+Shift+P` 调出命令面板  
+ 输入`mdp`找到并选中`Markdown Preview： Preview in Browser`    
+ 出现两个选项：`github`和`markdown`。任选其一即可，github是利用GitHub的在线API来解析.md文件，支持在线资源的预览，如在线图片它的解析速度取决于你的联网速度。该方式据说一天只能打开60次。markdown就是传统的本地打开，不支持在线资源的预览。  
+ 默认浏览器中显示结果

**\*2. 用快捷键打开**
>* Sublime Text支持自定义快捷键，`Markdown Preview`默认没有快捷键，我们可以自己为`Markdown Preview： Preview in Browser`设置快捷键。 方法是在`Preferences -> Key Bindings`打开的文件的右侧栏的中括号中添加一行代码：  

```Json
{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"}  }
```

	1. 打开配置文件 Preferences -> Package Settings -> MarkdownPreview->Settings，检查左侧enableautoreload条目是否为true，若是，跳过。若不是，右侧栏加一条下面这个后重启Sublime:
	{
		"enable_autoreload": true
	}	

#### \*2. LiveReload
>	实时自动刷新预览

**\*1. 配置Markdown Preview**
>如前`Markdown Preview`安装成功后，设置前文所述的快捷键（如需），打开其配置文件 `Preferences -> Package Settings -> Markdown Preview -> Settings`，检查左侧`enable_autoreload`条目是否为`true`，若是，跳过。若不是，右侧栏加一条下面这个后重启Sublime:

``` Json
{
    "enable_autoreload": true
}
```

**\*2. 安装并配置LiveReload**
> `Ctrl+Shift+p`, 输入 `Install Package`，输入`LiveReload`, 回车安装 
安装成功后, 再次`Ctrl+shift+p`, 输入`LiveReload: Enable/disable plug-ins`, 回车, 选择 `Simple Reload with delay (400ms)`或者`Simple Reload`，两者的区别仅仅在于后者没有延迟。

### 15. WordCount  
> 可以实时显示当前文件的字数  

### 16. IMESupport
>中文输入法跟随
>如果无法正常安装, 可在github上自行下载. https://github.com/fyyj/Sublime
