// Web 存储 API 提供了 sessionStorage （会话存储） 和 localStorage（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作
// localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除
// sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据

// 存储对象属性
(function(){
    console.log(sessionStorage.length);
})();

// 存储对象方法
// key(n)	返回存储对象中第 n 个键的名称
// getItem(keyname)	返回指定键的值
// setItem(keyname, value)	添加键和值，如果对应的值存在，则更新该键对应的值。
// removeItem(keyname)	移除键
// clear()	清除存储对象中所有的键
(function(){
    console.log(sessionStorage.key(0));
    console.log(sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer"));
    console.log(sessionStorage.getItem(sessionStorage.key(0)));
    sessionStorage.setItem("名字","张三");
    console.log(sessionStorage.key(1));
    console.log(sessionStorage.getItem(sessionStorage.key(1)));
    localStorage.setItem("名字","张三");
})();