
function changeState() {
	var myDiv = document.getElementById("__next");
	//var computedStyle = document.defaultView.getComputedStyle(myDiv, ":after");
	//console.clear();
	//console.log("输出计算高度");
	//console.log(computedStyle.height);
	let h_real = $("#__next #mindmap-container .mindmap-design").height();//css("height");
	h_real = parseInt(h_real) + 200;
	//console.log('已经得出计算高度' + h_real);
	let wh = window.screen.availHeight

	$("#root #main-container", parent.document.body).css("height", wh + 'px');
	//console.log("容器高度" + wh);
	$("#__next #mindmap-container .mindmap-design").css("padding", 0);
	//console.log("高度");
	$("#root #mindmap iframe", parent.document.body).css("height", h_real + 'px');
}
setTimeout("changeState()", 2000);


$(document).ready(function () {
	
	var doc = parent.document.body;
	var body = document.body;

	let h = '100%';//'6400px';
	$("#root .banner", doc).remove();
	$("#root .mianze", doc).remove();
	$("#root .comment-area", doc).remove();
	$("#root .report", doc).remove();
	$("#root .save", doc).remove();
	$("#root #svg", doc).remove();
	$("#root .hint-container", doc).remove();
	$("#root #alert", doc).remove();
	$("#root #image-box", doc).remove();
	$("#root #demo-box", doc).remove();
	$("#root #main-container", doc).css("width", "100%");
	$("#root #main-container", doc).css("height", h);
	$("#root #main-container", doc).css("overflow", "scroll");
	$("#root #mindmap", doc).css("width", "100%");
	$("#root #mindmap", doc).css("height", h);
	$("#root #mindmap", doc).css("overflow", "scroll");

	let h_iframe = $("#root #mindmap iframe", doc).height();
	//console.log(body.height);
	//console.log(h_iframe);
	$("#root #mindmap iframe", doc).css("height", "20000px");
	
	let h_real = $("#__next #mindmap-container .mindmap-design").css("height");
	//console.log(h_real);
	//console.log("高度");
	var iframe = $("#mindmap iframe", doc);
	//console.log(doc);
	//console.log(iframe);
	//return false;
	
});

