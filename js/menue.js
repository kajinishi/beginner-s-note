//各カテゴリーのメニュー
function parent_menu(name,link,returnkind,n){
  var num=name.length;
  if(returnkind=="link")return link[n];
  if(returnkind=="name")return name[n];
  if((returnkind=="li")||(returnkind=="li-ban")){
    for(var i=0;i<num;i++){
      if(!((returnkind=="li-ban")&&(n==i))){
        document.write('<li><a href='+link[i]+'>'+name[i]+'</a></li>');//<br>?
      }
      else document.write('<font>'+name[i]+'</font></br>')
    }
  }
}
function cmenue(place,returnkind,n){//cの一覧
  var name = new Array(),link=new Array();
  name[0]="第0章 実行環境を整えよう";
  name[1]="第1章 入出力関数,変数";
  name[2]="第2章 乱数と条件文";
  name[3]="第3章 繰り返し文";
  name[4]="第4章 みんな大好き!ポインタと配列";
  name[5]="第5章 関数を作ってみよう";
  name[6]="第6章 構造体と列挙体とか";
  var num=name.length,fplace="";
  if(place==null || place=="")fplace="c/"
  else if(place!="c")fplace="../c/";
  for(var i=0;i<num;i++)link[i]=fplace+"c"+i+".html";
  parent_menu(name,link,returnkind,n);
}
function cppmenue(place,returnkind,n){//c++の一覧
  var name = new Array(),link=new Array();
  name[0]="第0章 実行環境を整えよう";
  name[1]="第1章 入出力関数,変数";
  name[2]="第2章 乱数と条件文";
  name[3]="第3章 繰り返し文";
  name[4]="第4章 みんな大好き!ポインタと配列";
  name[5]="第5章 関数を作ってみよう";
  name[6]="第6章 構造体と列挙体とか";
  var num=name.length,fplace="";
  if(place==null || place=="")fplace="cpp/"
  else if(place!="cpp")fplace="../cpp/";
  for(var i=0;i<num;i++)link[i]=fplace+"cpp"+i+".html";
  parent_menu(name,link,returnkind,n);
}
function algomenu(place,returnkind,n){//アルゴリズムの一覧
  var name = new Array("動的計画法","ワーシャルフロイド","ダイクストラ","二分探索","ヒープ","ソート");
  var link=new Array("dp","wf","d","binarysearch","heap","sort"),num=name.length;
  var fplace="";
  if(place==null || place=="")fplace="algorithm/"
  else if(place!="algorithm")fplace="../algorithm/";
  for(var i=0;i<num;i++){
    link[i]=fplace+link[i]+".html";
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
  document.writeln(" <nav> <!-- ↓ドロップダウンメニュー --> ");
  document.writeln(" <ul> ");
  document.writeln("         <li style='background-color:orange;'><a href='"+index+"index.html'><i class='fa fa-home' style='color:black;'></i>ホームへ</a></li> ");
  document.writeln("         <li> ");
  document.writeln("           <a href=\"#\"><i class='fa fa-laptop' style='color:red; margin-right:5px'></i>PC関連</a> ");
  document.writeln("           <ul> ");
  document.writeln("             <li><a href=\"#\">ファイル操作入門</a></li> ");
  document.writeln("             <li><a href='https://brew.sh/index_ja.html' target='_blank'>homebrew</a></li> ");
  document.writeln("             <li><a href=\"#\">ツムツム</a></li> ");
  document.writeln("             <li><a href=\"#\">git</a></li> ");
  document.writeln("             <li style='position:relative; background-color:rgb(152, 228, 226);'> ");
  document.writeln("       				<a href=\"#\">アプリ<i class='fa fa-caret-square-o-right' style='position:absolute; right:15px; color:white;'></i></a> ");
  document.writeln("       				<ul>");
  document.writeln("       					<li><a href='http://www.moongift.jp/2015/07/clipy-%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88%E3%82%82%E4%BD%BF%E3%81%88%E3%82%8Bmac-osx%E7%94%A8%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E7%AE%A1%E7%90%86/' target='_blank'>clipy</a></a></li> ");
  //document.writeln("       					<li><a href=''></a></li> ");
  document.writeln("       				</ul> ");
  document.writeln("       			</li> ");
  document.writeln("           </ul> ");
  document.writeln("         </li> ");

  document.writeln("       	<li> ");
  document.writeln("       		<a href=\"#\"><i class='fa fa-code' style='color:green; margin-right:5px'></i>プログラム言語</a> ");
  document.writeln("       		<ul> ");
  document.writeln("             <li style='position:relative; background-color:rgb(152, 228, 226);'>");
  document.writeln("       				<a href='#' >c<i class='fa fa-caret-square-o-right' style='position:absolute; right:15px; color:white;'></i></a> ");
  document.writeln("       				<ul> ");
  document.writeln("       					<li><a href='"+c+"c0.html'>環境設定</a></a></li> ");
  document.writeln("       					<li><a href= '#'>変数</a></li> ");
  document.writeln("       					<li><a href=\"#\">関数</a></li> ");
  document.writeln("       				</ul> ");
  document.writeln("       			</li> ");
  document.writeln("       			<li><a href=\"#\">c++</a></li> ");
  document.writeln("       			<li><a href='http://qiita.com/takeharu/items/d75f96f81ff83680013f'>javascriptの配列</a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");

  document.writeln("       	<li> ");
  document.writeln("       		<a href=\"#\"><i class='fa fa-graduation-cap' style='color:rgb(75, 70, 44); margin-right:5px'></i>アルゴリズム</a> ");
  document.writeln("       		<ul> ");
  document.writeln("       			<li><a href=\"#\">動的計画法</a></li> ");
  document.writeln("       			<li><a href=\"#\">ダイクストラ</a></li> ");
  document.writeln("       			<li><a href=\"#\">二分探索</a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");

  document.writeln("       	<li> ");
  document.writeln("       	  <a href='#' style='margin-left:-35px;'><i class='fa fa-cog fa-spin fa-fw' style='color:rgb(91, 87, 70); margin-right:5px'></i>使用ツール(外部リンク)<i class='fa fa-external-link'></i></a>");
  document.writeln("       		<ul> ");
  document.writeln("       			<li><a href='http://mamewaza.com/tools/table-generator.html' target='_blank'>テーブル作成</a></li> ");
  document.writeln("       			<li><a href='http://fontawesome.io/icons/' target='_blank'>fontawesome</a></li> ");
  document.writeln("       			<li><a href='http://www.netyasun.com/syntaxhighlighter/source-escape.html#REPLACE' target='_blank'>HTML置換</a></li> ");
  document.writeln("       			<li><a href='http://www.yellowpipe.com/yis/tools/HTML_converter/' target='_blank'>HTML整形</a></li> ");
  //document.writeln("       			<li><a href='#'></a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");
  document.writeln(" </ul> ");
  document.writeln(" </nav> <!-- ↓ドロップダウンメニュー --> ");
}
