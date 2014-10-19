function my_clock(el){
    var today=new Date();  // 获取当前的日期
    var h=today.getHours();  // 获取 时
    var m=today.getMinutes(); // 获取 分
    var s=today.getSeconds();  // 获取 秒
    m=m>=10?m:('0'+m);  // 输出格式，小于10的时候，前面补0
    s=s>=10?s:('0'+s);  //同上
    el.innerHTML = h+":"+m+":"+s;  //将当前时间显示出来，innerHTML就是改变html文件的内容。
    setTimeout(function(){my_clock(el)}, 1000); // 这里用了一个递归循环，每隔一秒执行一次。注意这个循环是无限循环。
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);