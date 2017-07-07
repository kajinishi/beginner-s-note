//描写
function photo(kind, str, place, memo) { //しゃべる描写の関数
  var pkind = new Array("img/teacher.png", "img/student.png"); //偶数teacher,奇数studentにしたい
  var num=pkind.length;
  var role = new Array("教師","生徒");

  /* ↓パスの変更 */
  if(place!=null && place!=""){
    for (var i = 0; i < pkind.length; i++) pkind[i]="../"+pkind[i];
  }
  if(memo=="right" || memo=="r"){
    var rcolor = new Array("balloonrt","balloonrs");
    document.write("<table align='right'>");
    document.write("<tr height=auto style='float:right;'>");
    document.write('<td><p class='+rcolor[Number(kind)%2]+' ><span style="color:black;">'+ str +'<br></span></p></td>');
    document.write('<td><font><img src=' + pkind[kind] + ' alt='+role[Number(kind)%2]+' width="40" height="40"></font></td>');
    document.write('<div style="clear:both;"></div>');
    document.write("</tr>");
    document.write("</table>");
    document.write("<br clear='all'>");
  }else{
    var rcolor = new Array("balloonlt","balloonls");
    document.write("<table>");
    document.write("<tr height=auto>");
    document.write('<td><font><img src=' + pkind[kind] + ' alt='+role[Number(kind)%2]+' width="40" height="40"></font></td>');
    document.write('<td><div class= '+rcolor[Number(kind)%2]+' ><span style="color:black;">'+ str +'<br></span></div></td>');
    document.write('<div style="clear:both;"></div>');
    document.write("</tr>");
    document.write("</table>");
  }
}

//幅変化
function fullwidth(target){
  var fullsize=$("#mainWrap").width();
  console.log(fullsize+"px");
  $(target).css("width", fullsize-50 + "px");
}

//判定
function OSjudge(){//OSの判定
  var ua = navigator.userAgent;
  if (navigator.platform.indexOf("Win") != -1)return "Windows";
  else if(ua.match(/Mac|PPC/))return 'Mac';
  else if (ua.match(/Linux/)) return 'Linux';
  else return 'unknown';
}
function browserjudge(){//使用中のブラウザ判定
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('opera') != -1) {
    return 'opera';
  } else if (userAgent.indexOf('msie') != -1) {//Microsoft IE
    return 'ie';
    } else if (userAgent.indexOf('chrome') != -1) {
    return 'chrome';
    } else if (userAgent.indexOf('safari') != -1) {
    return 'safari';
    } else if(userAgent.indexOf('Firefox') != -1){
        return 'firefox';
    } else if (userAgent.indexOf('gecko') != -1) {
    return 'gecko';
    } else return false;
}
//タブ
$(function(){
  $("#tabcontents div[id != 'tab0']").hide();//一度全て消す
  $(".tab li").click(function(){
    $("#tabcontents div").hide();//一度全て消す
    //$(".current").removeClass("current");
    //$("#tab"+$(this).index()).addClass("current");
    //$($(this).attr("href")).fadeIn();
    var target=$("#tab"+$(this).index()).offset().top;
    target-=10;
    $("html, body").animate({scrollTop:target},500);
    $("#tab"+$(this).index()).fadeIn();

    return true;
  });
});