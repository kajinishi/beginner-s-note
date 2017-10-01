/* ↓動的計画法 */
function dpmain(tubn){ //tubnは1はじまり(←ミス)
  var pic= new Array();
  pic[0]="damy";
  for(var i=1;i<=5;i++){
    pic[i]="image/dp/dp"+String(i);
    if(i<=2)pic[i]+=".png";
    else pic[i]+=".gif";
  }
  document.write("<img src='"+pic[tubn]+" ' style='max-width:100%;height:auto' alt='No image. Sorry'>");
}
/* ↑動的計画法 */

/* ↓二分探索 */
function bsshow(tubn,num,classname){
  // $("#algocontents div").hide();
  document.write("<br><br>");
  for(var i=0;i<num.length;i++){document.write("<span class="+classname[i]+">"+num[i]+"</span>");}
  document.write("<br><br>");
}
function bsmain(tubn){ //tubnは1はじまり(←ミス)
  //document.write(tubn); //デバッグ用
  var num = new Array(),shownum=new Array(),classname=new Array();
  var cn= ["demobox","demoboxdid","demoboxchoiced","demoboxcd","dbmin","dbmax"];
  for(var i=0;i<10;i++){num[i]=i; shownum[i]="?"; classname[i]=cn[0];} //配列の初期化
  if(tubn>=2){
    classname[4]=cn[2];classname[0]=cn[4];classname[9]=cn[5];//classの設定
    shownum[0]=num[0];shownum[4]=num[4];shownum[9]=num[9];//数字の表示
  }
  if(tubn>=3){
    for(var i=0;i<4;i++){classname[i]=cn[1];}
    classname[4]=cn[3];classname[5]=cn[4];
  }
  if(tubn>=4){classname[4]=cn[1];classname[7]=cn[2]; shownum[5]=num[5];shownum[7]=num[7];}
  if(tubn>=5){classname[8]=cn[1];classname[7]=cn[3];classname[9]=cn[3];classname[6]=cn[5];}
  if(tubn>=6){classname[7]=cn[1]; shownum[6]=num[6];}
  if(tubn>=7){classname[6]=cn[3];}
  if(tubn==8){classname[6]=cn[1];classname[5]=cn[2];shownum[5]=num[5]}
  bsshow(tubn,shownum,classname); //表示
}
/* ↑二分探索 */

$(function(){//タブの非表示/表示の切り替えの関数
  $('#contents div[id != "tab1"]').hide();
  $("#contents ul li a").click(function(){
    $("#contents div").hide();
    $($(this).attr("href")).show();
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  });
});

// $(function(){
//   $("#contents div[id != 'tab1']").hide();//一度全て消す
//   $("#contents li").click(function(){
//     $("#tabcontents div").hide();//一度全て消す
//     var target=$(this).offset().top;
//     target-=60;
//     $("html, body").animate({scrollTop:target},5);
//     $("#tab"+$(this).index()).fadeIn();
//     return true;
//   });
// });