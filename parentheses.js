function getString() {
	var orginalString = $("#getting").val();//input 받아 변수로 저장
	var textrepeat = orginalString.split(" ");// orginalString 스플릿
	$( ".output" ).empty();//output을 미리청소
	$( ".orginal" ).text(orginalString);//오리지널칸에 orginalString 출력
	var indexing = 1;
	for (var i in textrepeat) {
		$( ".output" ).append( "<span id=splt class=spltext"+ indexing++ +" onclick=rePlaced(this.className)>" + textrepeat[i] +"&nbsp;</span>" );
	}
}

function insertSpace(t, l) {
	var spaceString = new String;
	for(i=0;i<l;i++){
	spaceString += t;
	}
	return spaceString;
}

function rePlaced(className) {
	var txtlength = $( "."+className ).text().length;
	$( "."+className ).html("&nbsp;("+insertSpace("&nbsp;&nbsp;&nbsp;",txtlength)+")&nbsp;");
	$( "span" ).removeClass( className );
}

function printPage() {
	window.print();
}
