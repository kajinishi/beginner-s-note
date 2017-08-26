//各カテゴリーのメニュー
function parent_menu(name,link,returnkind,n){
  var num=name.length;
  if(returnkind=="link")return link[n];
  if(returnkind=="name")return name[n];
  if((returnkind=="li")||(returnkind=="li-ban")){
    for(var i=0;i<num;i++){
      if(!((returnkind=="li-ban")&&(n==i))){
        document.write('<li style="list-style: none;"><a href='+link[i]+'>'+name[i]+'</a></li>');//<br>?
      }
      else document.write('<font class="tooltipsl">'+name[i]+'<span>here!</span></font></br>')
    }
  }
}
function cmenue(place,returnkind,n){//cの一覧
  var name = new Array(),link=new Array();
  name[0]="第0章 実行環境を整えよう";
  name[1]="第1章 入出力関数,変数";
  name[2]="第2章 乱数と条件文";
  name[3]="第3章 繰り返し文";
  name[4]="第4章 ポインタと配列";
  name[5]="第5章 関数を作ってみよう";
  name[6]="第6章 構造体と列挙体とか";
  var num=name.length,fplace="";
  if(place==null || place=="")fplace="c/"
  else if(place!="c")fplace="../c/";
  for(var i=0;i<num;i++)link[i]=fplace+"c"+i+".html";
  return parent_menu(name,link,returnkind,n);
}
function CFL(num){//footer lead(c)
document.write('<hr width="100%" size="2" color="black">');
  if(num>0)document.write('<a href='+cmenue("c",'link',num-1)+'>'+cmenue("c",'name',num-1)+'</a>'+' < ');
  document.write('<a>'+cmenue("c","name",num)+'</a>'+'>');
  if(num<6)document.write('<a href='+cmenue("c",'link',num+1)+' > '+cmenue("c",'name',num+1)+'</a>');
  else document.write('<a href="../index.html">ホームへ</a>');
document.write('<br>');
}
function cppmenue(place,returnkind,n){//c++の一覧
  var name = new Array(),link=new Array();
  name[0]="第0章 実行環境を整えよう";
  name[1]="第1章 入出力関数,変数";
  name[2]="第2章 乱数と条件文";
  name[3]="第3章 繰り返し文";
  name[4]="第4章 ポインタと配列";
  name[5]="第5章 関数を作ってみよう";
  name[6]="第6章 構造体と列挙体とか";
  var num=name.length,fplace="";
  if(place==null || place=="")fplace="cpp/"
  else if(place!="cpp")fplace="../cpp/";
  for(var i=0;i<num;i++)link[i]=fplace+"cpp"+i+".html";
  parent_menu(name,link,returnkind,n);
}
function algomenu(place,returnkind,n){//アルゴリズムの一覧
  //"動的計画法","ワーシャルフロイド","ダイクストラ","ベルマンフォード","ソート","二分探索","ヒープ"
  var name = new Array("動的計画法","ワーシャルフロイド","comming soon?","comming soon?","comming soon","二分探索","comming soon?");
  var link=new Array("dp","wf","d","bf","sort","bs","heap"),num=name.length;
  var fplace="";
  if(place==null || place=="")fplace="algorithm/"
  else if(place!="algorithm")fplace="../algorithm/";
  for(var i=0;i<num;i++){
    link[i]=fplace+link[i]+".html";
    // ↓いらない
    if(i==2 || i==3 || i==4 || i==6){link[i]="#";}
  }
  parent_menu(name,link,returnkind,n);
}
//ドロップダウンメニュー
function dropdown(place){
  /* ↓パスのやつ*/
  var index="",c="c/",cp="c++/",DX="DX/",Unity="Unity/",algorithm="algorithm/",making="making/";
  if(place!=null && place!=""){
      index="../";
      place=="c"?c="":c="../"+c;
      place=="cp"?cp="":cp="../"+cp;
      place=="DX"?DX="":DX="../"+DX;
      place=="Unity"?Unity="":Unity="../"+Unity;
      place=="algorithm"?algorithm="":algorithm="../"+algorithm;
      place=="making"?making="":making="../"+making;
  }
  document.writeln("<nav> <!-- ↓ドロップダウンメニュー --> ");
  document.writeln(" <ul> ");
  document.writeln("  <li style='background-color:orange;'><a href='"+index+"index.html'><i class='fa fa-home' style='color:black;'></i>ホームへ</a></li> ");
  document.writeln("  <li class='comingsoon'>");
  document.writeln("  <a href=\"#\"><i class='fa fa-laptop' style='color:red; margin-right:5px'></i>PC関連</a> ");
  // document.writeln("    <ul> ");
  // document.writeln("      <li><a href=\"#\">ファイル操作入門</a></li> ");
  // document.writeln("      <li><a href='https://brew.sh/index_ja.html' target='_blank'>homebrew</a></li> ");
  // document.writeln("      <li><a href=\"#\">ツムツム</a></li> ");
  // document.writeln("      <li><a href=\"#\">git</a></li> ");
  // document.writeln("      <li style='position:relative;'> ");
  // document.writeln("        <a href=\"#\">アプリ<i class='fa fa-caret-square-o-right' style='position:absolute; right:15px; color:white;'></i></a> ");
  // document.writeln("        <ul>");
  // document.writeln("          <li><a href='http://www.moongift.jp/2015/07/clipy-%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88%E3%82%82%E4%BD%BF%E3%81%88%E3%82%8Bmac-osx%E7%94%A8%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E7%AE%A1%E7%90%86/' target='_blank'>clipy</a></a></li>");
  // //document.writeln("       					<li><a href=''></a></li> ");
  // document.writeln("        </ul> ");
  // document.writeln("      </li> ");
  // document.writeln("    </ul> ");
  document.writeln("  </li> ");

  document.writeln("  <li>");
  document.writeln("    <a href=\"#\"><i class='fa fa-code' style='color:green; margin-right:5px'></i>プログラミング言語</a> ");
  document.writeln("  	<ul> ");
  document.writeln("      <li style='position:relative;'>");
  document.writeln("  			<a href='#' >c<i class='fa fa-caret-square-o-right' style='position:absolute; right:15px; color:white;'></i></a> ");
  document.writeln("  			<ul> ");
  cmenue(place,"li");
  document.writeln("  			</ul> ");
  document.writeln("  		</li> ");
  document.writeln("      <li style='position:relative;' class='comingsoon'>");
  document.writeln("  			<a href='#' >c++<i class='fa fa-caret-square-o-right' style='position:absolute; right:15px; color:white;'></i></a> ");
  // document.writeln("  			<ul> ");
  // cppmenue(place,"li");
  // document.writeln("       	</ul> ");
  document.writeln("      </li> ");
  // document.writeln("      <li><a href='http://qiita.com/takeharu/items/d75f96f81ff83680013f'>javascriptの配列</a></li> ");
  document.writeln("    </ul> ");
  document.writeln("  </li> ");

  document.writeln("  <li> ");
  document.writeln("    <a href=\"#\"><i class='fa fa-graduation-cap' style='color:rgb(75, 70, 44); margin-right:5px'></i>アルゴリズム</a> ");
  document.writeln("    <ul> ");
  algomenu(place,"li");
  document.writeln("    </ul> ");
  document.writeln("  </li> ");

  document.writeln("  <li> ");
  document.writeln("    <a href='#' style='margin-left:-35px;'><i class='fa fa-cog fa-spin fa-fw' style='color:rgb(91, 87, 70); margin-right:5px'></i>使用ツール</a>");
  document.writeln("    <ul> ");
  document.writeln("      <li><a href='http://mamewaza.com/tools/table-generator.html' target='_blank'>テーブル作成<i class='fa fa-external-link'></i></a></li> ");
  document.writeln("      <li><a href='"+index+"maketable.html'>文書からテーブル作成<i class='fa fa-link'></i></a></li> ");
  document.writeln("      <li><a href='http://fontawesome.io/icons/' target='_blank'>fontawesome<i class='fa fa-external-link'></i></a></li> ");
  document.writeln("      <li><a href='http://www.netyasun.com/syntaxhighlighter/source-escape.html#REPLACE' target='_blank'>HTML置換<i class='fa fa-external-link'></i></a></li> ");
  document.writeln("      <li><a href='http://www.yellowpipe.com/yis/tools/HTML_converter/' target='_blank'>HTML整形<i class='fa fa-external-link'></i></a></li> ");
  // document.writeln("      <li><a href='file:///Users/kajinishimasamitsu/Dropbox/HTML/index.html' target='_blank'>元祖HP<i class='fa fa-link'></i></a></li> ");
  //document.writeln("    <li><a href='#' target='_blank'></a></li> ");
  document.writeln("    </ul> ");
  document.writeln("  </li> ");
  document.writeln(" </ul> ");
  document.writeln("</nav> <!-- ↓ドロップダウンメニュー --> ");
}

//見出し関連
function gotoheadline(idnum,headlinename){//ページ内リンクの見出しに飛ぶやつ
  // document.write("<li><a href='#top'>ページトップへ</a></li>");
  for(var i=0;i<idnum;i++)document.write("<li><a href='#headline-"+i+"'>"+headlinename[i]+"</a></li>");
}
function gotoscroll(){
	$("#contentmenue a").click(function(){// 移動先のコンテンツ位置を取得
    if($(this).attr("href")=="#")return false;
		var target = $($(this).attr("href")).offset().top;// xpx減らす
		target -= 60;// コンテンツへスクロール
		$("html, body").animate({scrollTop: target}, 500);
		return false;
	});
}