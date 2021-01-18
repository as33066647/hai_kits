/* 这里封装一些我们常用的js代码 */

let kits = {};

/**
 * 封装一个获得指定区间的随机整数的方法
 *
 * @return [n,m]区间的随机数
 * @example kits.randomInt(2,10)=>[2,10]
 */
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

/**
 * 封装格式化时间
 *
 * @return 返回一个现在的时间
 * @example formatTime('2019-7-18 22:03:30',y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s)
 */
kits.formateDate = function () {
  let date = new Date();
  let y = date.getFullYear();
  let M = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  M = M < 10 ? "0" + M : M;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  return y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
};

/**
 *  @param {data} 需要转成成时分秒的时间戳
 *
 *  @return 返回{hours--小时 min--分钟  sec--秒  millisec--毫秒}
 */
kits.countDownDate = function (date) {
  var hours = parseInt((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var min = parseInt((date % (1000 * 60 * 60)) / (1000 * 60));

  var sec = parseInt((date % (1000 * 60)) / 1000);

  var millisec = parseInt(date % 1000); //可根据需要的个数除以10

  hours = hours < 10 ? "0" + hours : hours;

  min = min < 10 ? "0" + min : min;

  sec = sec < 10 ? "0" + sec : sec;

  millisec = millisec < 10 ? "0" + millisec : millisec;

  return {
    hours,
    min,
    sec,
    millisec: millisec
  };
};

/**
 * 封装的是一个可以生成唯一id的方法
 *
 * @return 返回一个12位数的随机id
 * @example formatID(545454+""565789)
 */
kits.primaryKey = function () {
  // 我们通过时间戳 + 大范围的随机数来生成id
  let now = Date.now(); //得到是从1970年到现在为止的总的毫秒数
  // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
  let r = kits.randomInt(100000, 999999);
  // console.log(r);
  // 把两个得到的结果，拼接起来
  return now + "" + r;
};

/**
 * 封装将数据生成多级嵌套数组(多级菜单) 根据数据生成树状对象数组
 *
 * @param  {arr}   数据数组
 * @param  {fjid}  父级id
 * @param  {parentId} 数据中的属性parentId 例{id: 1,text: '一级菜单A',parentId: null}
 * @return {shuzu} 返回数组-多级对象
 */
kits.arrlevel = function (arr, fjid, parentId) {
  let shuzu = [];
  arr.forEach((e, i) => {
    if (e.parentId == fjid) {
      shuzu.push(e);
      e.child = fn1(arr, e.id);
    }
  });
  return shuzu;
};

/**
 * 封装获取URL参数中的属性
 *
 * 思路URL参数?切割出来,然后用&分割成 [id=1234,name=1234] 的形式,
 * 然后再次用=分割成[id,1234] [name,12344]的形式,
 * 然后以键等于值创建prams对象 prams[id]=1234,prams[name]=1234
 */
kits.getSearchId = function () {
  let arr = location.search.substr(1).split("&");
  let prams = {};
  arr.forEach((e) => {
    arr = e.split("=");
    prams[arr[0]] = arr[1];
  });
  return prams;
};

/**
 * 封装禁用事件
 *
 *
 */
kits.setSaveMode = () => {
  //绑定按键事件
  document.onkeydown = (e) => {
    //ctrl+c || ctrl+v禁用
    e.ctrlKey && (e.key === 67 || e.key === 86) ?
      (e.returnValue = false) :
      "";
    //ctrl+shift+I(调用控制台)禁用
    e.ctrlKey && e.shiftKey && e.key === 73 ? (e.returnValue = false) : "";
    //F12禁用
    e.key === 123 ? (e.returnValue = false) : "";
  };
  document.oncontextmenu = (e) => {
    //禁止右键菜单
    e.preventDefault();
    // e.returnValue =true;恢复
  };
  //禁止文本被选中
  document.querySelector("html").setAttribute("onselectstart", "return false");
  return true;
};

/**
 * 存储localStorage
 */
kits.setStore = (name, content) => {
  if (!name) return;
  window.localStorage.setItem(name, JSON.stringify(content));
};

/**
 * 获取localStorage
 */
kits.getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name) !== 'undefined' ? JSON.parse(window.localStorage.getItem(name)) : null;
};

/**
 * 删除localStorage
 */
kits.removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};


/**
 * 获取url后参数
 */
kits.GetRequest = () => {
  let url = location.search; //获取url中"?"符后的字串
  let theRequest = new Object();
  if (url.indexOf('?') != -1) {
    let str = url.substr(1);
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return theRequest;
};

/**
 * 生成随机颜色值
 */
kits.getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length === 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
};


/**
 * 验证手机号
 * @param el 号码输入input
 * @returns {boolean}
 */
kits.checkPhone = el => {
  let txtval = el;
  let reg = /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
  return reg.test(txtval);
};


/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
kits.isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

/**
 * 判断当前网络环境
 */
kits.isWifi = () => {
  try {
    let wifi = true;
    let ua = window.navigator.userAgent;
    let con = window.navigator.connection;
    // 如果是微信
    if (/MicroMessenger/.test(ua)) {
      if (ua.indexOf('WIFI') >= 0) {
        return true;
      } else {
        wifi = false;
      }
      // 如果支持navigator.connection
    } else if (con) {
      let network = con.type;
      if (network !== 'wifi' && network !== '2' && network !== 'unknown') {
        wifi = false;
      }
    }
    return wifi;
  } catch (e) {
    return false;
  }
};


/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
kits.fistLetterUpper = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 过滤非法字符串
 */
kits.illegalFilter = str => {
  let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
  let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

  if (regEn.test(str) || regCn.test(str)) return false;
  return true;
};


/** 数字金额大写转换(可以处理整数,小数,负数) */

kits.moneyturn = n => {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元')
  );
};

// 数字转中文
kits.toDx = num => {
  let dxData = {
    '0': '零',
    '1': '壹',
    '2': '贰',
    '3': '叁',
    '4': '肆',
    '5': '伍',
    '6': '陆',
    '7': '柒',
    '8': '捌',
    '9': '玖',
    x: '拾',
    X: '拾',
  };
  let endNum = '';
  num.split('').forEach(item => {
    endNum += dxData[item];
  });
  return endNum;
};


//倒计时

kits.InitTime = (endtime, dateNow) => {
  var dd, hh, mm, ss = null;

  var time = (new Date(endtime) - new Date(dateNow)) / 1000;

  if (time <= 0) {
    // clearInterval(time)
    return '结束'

  } else {
    // dd = Math.floor(time / 60 / 60 / 24);
    hh = Math.floor((time / 60 / 60) % 24);
    mm = Math.floor((time / 60) % 60);
    ss = Math.floor(time % 60);
    var str = hh + ":" + mm + ":" + ss;
    return str;
  }

}

/**
 * 判断是否为微信浏览器环境
 * @returns {Boolean} true 为微信浏览器
 */
kits.userAgentBrowser = () => {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') return true
  else false
}

module.exports=kits