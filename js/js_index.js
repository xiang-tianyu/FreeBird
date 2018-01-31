$(document).ready(function(){
	 window.setTimeout('goin()',1);
		$('#change').click(function(){
			goout();
			window.setInterval("window.location.href = \"freebird express ride bottom.html\"",1000);
		})
})
	

function goin(){
	$('#all').css({top:"0vh"})

}
function goout(){
	$('#all').css({top:"100vh"})
}