"use strict";
function hidden_div() {
    document.getElementById("cover").style.display = "none"
}
function isWeiXin() {
    var e = window.navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i)
}
function osType() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? "ios" : /(Android)/i.test(navigator.userAgent) ? "android" : "pc"
}


function setCity(e) {
    "0" === e ? (document.getElementById("titleID").innerHTML = "连云港市缴费报表验证",
    document.getElementById("topNmae").innerHTML = "连云港市社会保险电子表单在线验证平台",
    document.getElementById("inputNo").innerHTML = "目前可提供验证的单据凭证包括：连云港市社会保险缴费证明") : "1" === e && (document.getElementById("titleID").innerHTML = "河南社保表单验证",
    document.getElementById("topNmae").innerHTML = "河南社保电子表单在线验证平台",
    document.getElementById("inputNo").innerHTML = "录入验证号码为32位数字与字母的组合，录入时请认真核对")
}
function closeDialog() {
    document.getElementById("haha").style.display = "none",
    document.getElementById("hehe").style.display = "none"
}

// 修改提交按钮的点击事件
function submintCode() {
    // 验证验证码
    verifyCaptcha();
    // 其他提交逻辑
}

// 可以添加一个函数来验证用户输入的验证码
function verifyCaptcha() {
    const userInput = document.getElementById("captchaValue").value;
    //const correctCaptcha = "2zwv";

    const correctCaptcha = window.correctCaptcha;
    
    console.log("正确的验证码：",window.correctCaptcha);
    console.log("当前输入：",userInput.toLowerCase());
    if (userInput.toLowerCase() === correctCaptcha) {
        console.log("验证码输入正确");
        alert("验证码输入正确");
        // 添加下载 PDF 文件的逻辑
        const pdfUrl = "static/李帅涛.pdf"; // 假设服务器上的文件路径与本地相对路径一致static\李帅涛.pdf
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '李帅涛.pdf';
        link.click();
    } else {
        console.log("验证码输入错误");
        alert("验证码有误");
        initCaptcha()
    }
}

var captcha = null;

// ... existing code ...
// 初始化验证码
function initCaptcha() {
    captcha = new CaptchaMini({
        lineWidth: 1,
        lineNum: 3,
        dotR: 2,
        dotNum: 20,
        preGroundColor: [10, 80],
        backGroundColor: [150, 250],
        fontSize: 40,
        fontFamily: 'Georgia',
        fontStyle: 'fill',
        content: 'abcdefghijklmnopqrstuvwxyz1234567890',
        length: 4
    });
    captcha.draw(document.getElementById('captchaCanvas'));
    // 修改为正确的获取验证码文本的方法
    window.correctCaptcha = captcha.getText(); // 假设是 getText 方法
    console.log("11111111111111111111111111111111");
}

// ... existing code ...

function b64Encode(e) {
    return btoa(encodeURIComponent(e))
}
function _base64ToArrayBuffer(e) {
    for (var t = window.atob(e), n = t.length, o = new Uint8Array(n), i = 0; i < n; i++)
        o[i] = t.charCodeAt(i);
    return o.buffer
}
function $http(e, t, n, o, i, a) {
    var r = new XMLHttpRequest
      , d = !1
      , s = setTimeout(function() {
        d = !0,
        r.abort()
    }, o);
    r.open(t, e, n),
    r.onreadystatechange = function() {
        4 === r.readyState && (d || (clearTimeout(s),
        r.status >= 200 && r.status < 300 ? i(r.responseText) : a(r.responseText)))
    }
    ,
    r.send(null)
}
function $http1(e, t, n, o, i, a) {
    var r = new XMLHttpRequest
      , d = !1
      , s = setTimeout(function() {
        d = !0,
        r.abort()
    }, o);
    r.responseType = "arraybuffer",
    r.open(t, e, n),
    r.onreadystatechange = function() {
        4 === r.readyState && (d || (clearTimeout(s),
        r.status >= 200 && r.status < 300 ? i(r.response) : a(r.response)))
    }
    ,
    r.send(null)
}
function removeClass(e, t) {
    hasClass(e, t) && (e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " "))
}
function browserRedirect() {
    var e = navigator.userAgent.toLowerCase()
      , t = "ipad" == e.match(/ipad/i)
      , n = "iphone os" == e.match(/iphone os/i)
      , o = "midp" == e.match(/midp/i)
      , i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
      , a = "ucweb" == e.match(/ucweb/i)
      , r = "android" == e.match(/android/i)
      , d = "windows ce" == e.match(/windows ce/i)
      , s = "windows mobile" == e.match(/windows mobile/i);
    if (t || n || o || i || a || r || d || s) {
        var c = document.getElementById("form")
          , l = document.getElementsByTagName("label");
        c.style.width = "auto",
        c.style.margin = "auto",
        c.style.height = "auto";
        for (var u = 0; u < l.length; u++)
            l[u].style.display = "none";
        var m = document.getElementById("captchaImg");
        document.getElementById("verificationValue").style.width = "100%",
        document.getElementById("captchaValue").style.width = "calc(100% - 100px)",
        document.getElementById("captchaValue").style.cssFloat = "left",
        m.style.width = "100px",
        m.style.cssFloat = "left",
        e.indexOf("samsung") > 0 || e.indexOf("xiaomi") > 0 || e.indexOf("mqqbrowser") > 0 || e.indexOf("chrome") > 0 ? (document.getElementById("footer_img1").style.display = "none",
        document.getElementById("footer_img2").style.display = "block",
        document.getElementById("descript").style.display = "none",
        getFocus = function() {}
        ,
        loseFocus = function() {}
        ) : (document.getElementById("footer_img1").style.display = "none",
        document.getElementById("footer_img2").style.display = "block",
        document.getElementById("descript").style.display = "none")
    }
}
function sAlert(e) {
    var t, n, o;
    t = 350,
    n = 100,
    o = "#336699";
    var i, a;
    i = document.body.offsetWidth,
    a = document.body.offsetHeight,
    console.log("sWidth：" + i + ",msgw:" + t);
    var r = document.createElement("div");
    r.setAttribute("id", "bgDiv"),
    r.style = "position:absolute;top:0;left:0;background-color:#777;opacity:0.6;filter:progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75);width:" + i + "px; height:" + a + "px;",
    document.body.appendChild(r);
    var d = document.createElement("div");
    d.setAttribute("id", "msgDiv"),
    d.setAttribute("align", "center"),
    d.style.position = "absolute",
    d.style.left = (i - t) / 2 + "px",
    d.style.top = document.documentElement.scrollTop + (a - n) / 6 + "px",
    d.style.backgroundColor = "white",
    d.style.font = "14px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif",
    d.style.border = "1px solid" + o,
    d.style.width = t + "px",
    d.style.height = n + "px";
    var s = document.createElement("h6");
    s.setAttribute("id", "msgTitle"),
    s.setAttribute("align", "right"),
    s.style.margin = "0",
    s.style.height = "18px",
    s.style.padding = "3px",
    s.style.lineHeight = "10px !important",
    s.style.backgroundColor = "#336699",
    s.style.border = "1px solid #336699",
    s.style.font = "12px !important Verdana, Geneva, Arial, Helvetica, sans-serif",
    s.style.color = "white",
    s.style.cursor = "pointer",
    s.style.filter = "progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20,finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100)",
    s.innerHTML = "关闭",
    s.onclick = function() {
        document.body.removeChild(r),
        document.getElementById("msgDiv").removeChild(s),
        document.body.removeChild(d)
    }
    ,
    document.body.appendChild(d),
    document.getElementById("msgDiv").appendChild(s);
    var c = document.createElement("p");
    c.style.margin = "1em 0",
    c.setAttribute("id", "msgTxt"),
    c.innerHTML = e,
    document.getElementById("msgDiv").appendChild(c)
}
function stringToBytes(e) {
    for (var t, n, o = [], i = 0; i < e.length; i++) {
        t = e.charCodeAt(i),
        n = [];
        do
            n.push(255 & t),
            t >>= 8;
        while (t);
        o = o.concat(n.reverse())
    }
    return o
}
function showPdf(e) {
    document.getElementById("container");
    container.style.display = "block";
    var t = convertDataURIToBinary(e);
    PDFJS.workerSrc = "../app/scripts/pdf.worker.js",
    PDFJS.getDocument(t).then(function(e) {
        var t = (document.getElementById("pop"),
        e.numPages)
          , n = function(o) {
            e.getPage(o).then(function(e) {
                var t = 2
                  , n = e.getViewport(t)
                  , o = document.getElementById("the-canvas");
                o.height = n.height,
                o.width = n.width,
                e.render({
                    canvasContext: o.getContext("2d"),
                    viewport: n
                })
            }),
            o < t && (o++,
            n(o))
        };
        n(1)
    })
}
function convertDataURIToBinary(e) {
    for (var t = window.atob(e), n = t.length, o = new Uint8Array(new ArrayBuffer(n)), i = 0; i < n; i++)
        o[i] = t.charCodeAt(i);
    return o
}
function go() {
    window.open("/app/showPDF.html")
}
function goto(e) {
    var t = atob(e);
    PDFJS.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";
    var n = PDFJS.getDocument({
        data: t
    });
    n.promise.then(function(e) {
        console.log("PDF loaded");
        var t = 1;
        e.getPage(t).then(function(e) {
            console.log("Page loaded");
            var t = 1.5
              , n = e.getViewport(t)
              , o = document.getElementById("the-canvas")
              , i = o.getContext("2d");
            o.height = n.height,
            o.width = n.width;
            var a = {
                canvasContext: i,
                viewport: n
            }
              , r = e.render(a);
            r.then(function() {
                console.log("Page rendered")
            })
        })
    }, function(e) {
        console.error(e)
    })
}
window.onload = function() {
    if ("ios" === osType() && isWeiXin()) {
        var e = document.getElementById("cover");
        e.style.height = document.body.scrollHeight + "px",
        e.style.width = document.body.scrollWidth + "px",
        e.style.display = "block"
    }
    initCaptcha();
}
;
var captchaId, getUrlParamObj = function() {
    function e(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    }
    for (var t = {}, n = location.search.substring(1), o = n.split("&"), i = 0; i < o.length; i++) {
        var a = o[i].indexOf("=");
        if (a != -1) {
            var r = o[i].substring(0, a)
              , d = o[i].substring(a + 1);
            t[r] = decodeURI(d)
        }
    }
    return !e(t) && t
}, param = getUrlParamObj();

var cityType = "1";
setCity(cityType);
var getFocus = function() {}
  , loseFocus = function() {};
browserRedirect();
