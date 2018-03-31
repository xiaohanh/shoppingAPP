function bbb(){
	   	window.location.href='index.html';
	   }
  $(".bb").click(function(){
	   	
	   	 var content=$('.aa').val();
	   	$.ajax({
			type:'get',
			url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
			dataType:'jsonp',
			data:{selectText:encodeURI(content)},
		    success:function(data){
		       console.log(data);
		    if(data==0){
		    	$("#warn").html('抱歉，没有符合要求的商品');
		    }else{
		    	$("#warn").html('');
		    	for(var i=0;i<data.length;i++){
		        	$(".content").html($(".content").html()+`<li goodID=`+data[i].goodsID+`>
		        	
		    	   <img src=" `+data[i].goodsListImg+` " alt="" class="image">
		         	<p style="font-size:0.4rem; ">`+data[i].goodsName.slice(0,10)+`...`+`</p>
		    	   </li>`)
		       }
		    	
		    	 $('.content>li').on('click',function(){
		       	//在两个页面之间传数据。用#
		       	window.location.href="goodsInf.html#"+this.getAttribute('goodID');
			
		       }) 
		    }
		       
		         
		       
		  }
		})
	})
