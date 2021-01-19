## 常用js工具类

> ​	这是一些我们常用的js代码
>
> ​	**使用只需 :**
>
> ​	kits.方法名() 即可



##### randomInt	

> ` 封装一个获得指定区间的随机整数的方法`

```js
    @param {Number} n 最小值  
    
    @param {Number} m 最大值  
    
    @return [n,m]区间的随机数 
    
    @example kits.randomInt(2,10)=>[2,10]
```



##### formateDate	 

> `封装格式化时间`

```js
    @return 返回一个现在的时间
    
    @example formatTime('2019-7-18 22:03:30')  =>返回 { year,month,day,hour,minute,second }
```



##### countDownDate

> `倒计时`  将开始与结束的差值传入即可

```js
	@param {data} 需要转成成时分秒的时间戳
    @return 返回{hours--小时 min--分钟  sec--秒  millisec--毫秒}
```





##### InitTime

> `倒计时`

```js
    @param { Date || "yyyy-hh-dd" } endtime 
    @param { Date || "yyyy-hh-dd" } dateNow 
    @returns {str}  ( hour + ":" + minute + ":" + second )
```



##### primaryKey

> `封装的是一个可以生成唯一id的方法`

```js
	@return 返回一个12位数的随机id
	@example formatID() 获得 545454+""+565789
```



##### arrlevel

> `封装将数据生成多级嵌套数组(多级菜单) 根据数据生成树状对象数组`

```js
    @param  {arr}   数据数组
    @param  {fjid}  父级id
    @param  {parentId} 数据中的属性parentId 例{id: 1,text: '一级菜单A',parentId: null}
    @return {shuzu} 返回数组-多级对象
```



##### getSearchParams

> `封装获取URL参数中的属性`

```js
	/**
	*	URL参数?切割出来,然后用&分割成 [id=1234,name=1234] 的形式,
	*	然后再次用=分割成[id,1234] [name,12344]的形式,
	*	然后以键等于值创建prams对象 params[id]=1234,params[name]=1234
	*/  
    
  	@return {object} params 
    
    @example www.baidu.com?name=jack  获得 { name:jack }
```



##### setSaveMode

> `封装禁用事件`
>
> ctrl+c || ctrl+v禁用
> ctrl+shift+I(调用控制台)禁用
> F12禁用
> 禁止右键菜单
> 禁止文本被选中



##### setStore

> `存储localStorage`

```js
    @param {string} name  localStorage的key
    @param {any} content localStorage的value
```



##### getStore

> `获取localStorage`

```js
	@param {string} name key
    
    @return JSON.parse(name)
```



##### removeStore

> `删除localStorage`

```js
	@param {string} name key
```



##### getRandomColor

> `生成随机颜色值`

```js
	@example '#fff'
```



##### checkPhone

> `验证手机号是否正确`

```js
    @param el 号码输入input
    @returns {boolean}
```



##### isWeiXin

> `判断是否为微信浏览器环境`

```js
	@return {Boolean} true 为微信浏览器
```



##### isWifi

> `判断当前网络环境是否为wifi`



##### fistLetterUpper

> `首字母大写`

```js
    @param str
    @return {string}
```



##### illegalFilter

> `过滤非法字符串,检测是否有非法字符串` 
>
> 包括一下字符:
>
> **~!@#$%^&*()_+<>?:"{},./;'[ ]** 

```js
	@param {Boolean} true 为不含非法字符串
```



##### moneyturn

> `数字金额大写转换(可以处理整数,小数,负数) `

```js
	@param {number} n 
```



##### toDx

> `数字转中文`

```js
	@param {String} num 
    @example kits.toDx("1") => 壹 
```

