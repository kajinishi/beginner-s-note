function dropdown(place){//画面トップのナビゲーション
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
