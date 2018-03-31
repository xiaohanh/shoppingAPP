//进行是否进入欢迎页的判断
if(!localStorage.getItem("install")){
	window.location.href="welcome.html";
}

//获取热销商品
		 
		$.ajax({
			type:'get',
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:'jsonp',
		
		    success:function(data){
		    	//使用反引号``可以避免换行报错
		    	//点击li实现页面跳转，根据goodsID发请求
		    	
		       console.log(data);
		        for(var i=0;i<data.length;i++){
		        	$("#goodList").html($("#goodList").html()+`<div goodID=`+data[i].goodsID+`>
		 
		    	   <img src=" `+data[i].goodsListImg+` " alt="" class="imgs">
		    	 
	    	      <p class="p1">`+data[i].goodsName.slice(0,10)+`...`+`</p>
		     
		    	   </div>`)
		       
		       }
		        //在请求成功后，给页面绑定事件
		        //点击跳转页面，将goodID传过去
		       $('#goodList>div').on('click',function(){
		       	//在两个页面之间传数据。用#
		       //	两种检索特定元素节点的办法：一种是使用getElementById()方法，
		       //另一种是使用getElementsByTagName()方法。
		       //在找到那个元素后，我们就可以利用getAttribute()方法把它的各种属性的值查询出来。
		       	window.location.href="goodsInf.html#"+this.getAttribute('goodID');
			
		       }) 
		       
		 }
		})
		
		
		
	    function search(){
	    	window.location.href="search.html";
	    }
	    
	    
	    function cc(){
	    	window.location.href="classify.html";
	    }
