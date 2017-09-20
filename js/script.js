listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.wrapper');

listButton.on('click',function(){
  gridButton.removeClass('on');
  listButton.addClass('on');
  wrapper.removeClass('grid').addClass('list');
});

gridButton.on('click',function(){
  listButton.removeClass('on');
  gridButton.addClass('on');
  wrapper.removeClass('list').addClass('grid');
});
var total=0;
    var counter = 1;
	function myFunction(value, name)
	{
	if(counter<5){
    	counter++;
		total+=value;
		console.log(total);
		 document.getElementById("test").innerHTML=total;
		 $(".product").append("<b>"+ name +"&emsp;&emsp;&emsp;</b>");
		 $(".product").append(value +"<hr>");
	}}
