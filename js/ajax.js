//用户注册
function regiset() {
    //1.创建异步对象xhr
    var xhr = new XMLHttpRequest();
    //2.绑定监听事件
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            console.log(result);
            alert("注册成功！")
            //跳转页面文件
            location.href = "account.html";
        }
    }
    //3.打开连接，创建求情
    xhr.open("post","/user/register",true);
    var formdata = "uname=" + uname.value + "&upwd=" + upwd.value + "&upwda=" + upwda.value;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //4.发送请求
    xhr.send(formdata);
}



//用户登录
function login(){
    //1.创建异步对象xhr
    var xhr = new XMLHttpRequest();
    //2.监听事件
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var result=xhr.responseText;//响应回来的结果
            var res = JSON.parse(result);
            into.innerHTML = `${"用户："+res.data[0].uname +"已登录"}`;
             alert("已登录！")
            //跳转页面
            // location.href = "xiaomim.html";

        }
    }
    //3.打开连接，创建请求
    var un = uname.value;
    var up = upwd.value;
    xhr.open("get","/demo/login?&uname="+un+"&upwd="+up,true);
    //4.发送请求
    xhr.send(null);
}

