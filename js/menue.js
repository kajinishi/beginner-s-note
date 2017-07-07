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
  document.writeln("           </ul> ");
  document.writeln("         </li> ");

  document.writeln("       	<li> ");
  document.writeln("       		<a href=\"#\"><i class='fa fa-code' style='color:green; margin-right:5px'></i>プログラム言語</a> ");
  document.writeln("       		<ul> ");
  document.writeln("             <li> ");
  document.writeln("       				<a href=\"#\">c</a> ");
  document.writeln("       				<ul> ");
  document.writeln("       					<li><a href='"+c+"c0.html'>環境設定</a></a></li> ");
  document.writeln("       					<li><a href= '#'>変数</a></li> ");
  document.writeln("       					<li><a href=\"#\">関数</a></li> ");
  document.writeln("       				</ul> ");
  document.writeln("       			</li> ");
  document.writeln("       			<li><a href=\"#\">c++</a></li> ");
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
  document.writeln("       	  <a href='#'><i class='fa fa-wrench' style='color:rgb(91, 87, 70); margin-right:5px'></i>自作ツールとか</a>");
  document.writeln("       		<ul> ");
  document.writeln("       			<li><a href='"+making+"maketable.html'>テーブル作成</a></li> ");
  //document.writeln("       			<li><a href='#'></a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");
  document.writeln(" </ul> ");
  document.writeln(" </nav> <!-- ↓ドロップダウンメニュー --> ");
}
