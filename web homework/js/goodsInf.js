function rel(){
	 window.location.href="index.html";
}
//获取传过来的数据
		  var goodsId=window.location.hash.slice(1);
		 localStorage.setItem("goodsID",goodsId);
	
		  $.ajax({
			type:'get',
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:'jsonp',
			data:{goodsID:goodsId},
		    success:function(data){
		  		console.log(data);
            // 获取轮播图图片
               var img1 = data[0].imgsUrl.split(',',3);
               var solid=$('.swiper-slide img');
                
               $(solid[0]).attr('src',img1[2].split('"')[1]);
               $(solid[1]).attr('src',img1[0].split('"')[1]);
               $(solid[2]).attr('src',img1[1].split('"')[1]); 
               $(solid[3]).attr('src',img1[2].split('"')[1]); 
               $(solid[4]).attr('src',img1[0].split('"')[1]); 
               //console.log(img1);       

              var img= data[0].goodsBenUrl.split(',',3);
              var imglist = $("#goods img");
              $(imglist[0]).attr('src',img[0].split('"')[1])
              $(imglist[1]).attr('src',img[1].split('"')[1])
              $(imglist[2]).attr('src',img[2].split('"')[1])
       
         //实现详情效果
              
                 $(".inf").html($(".inf").html()+`<li  style="list-style:none;">
		  
	    	         <p class="p1">`+data[0].goodsName+`</p>
	    	         <p class="p2">`+'￥'+data[0].price+`</p>
		        	 <p class="p3"> `+'快递:0.00'+`
		        	    <span class="p4">`+'月销:'+data[0].buynumber+`</span>
		        	 </p>
		        	
		    	   </li>`)
            }

       })


              //轮播图效果
          $(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    pagination: '.swiper-pagination',
		  
		    
		        });                           
             }); 

 $(function(){ 	
	 //数量加操作
	
    $(".plus").click(function(){
	
	   var num = $(this).parent().find('input[class*=num]');
		num.val(parseInt(num.val())+1);
	})
   //数量减操作
	$(".minus").click(function(){
		var num = $(this).parent().find('input[class*=num]');	
		num.val(parseInt(num.val())-1);
		if(parseInt(num.val())<=1){
			num.val(1);
		}
	
      }) 	
	
  })

	  
	//加入购物车	  

        $('.add').click(function(){
			var count=$(".num").val();
			var username=localStorage.getItem('username');
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{userID:username,goodsID:goodsId,number:count},
				success:function(data){
					console.log(data);
				
        	 		alert('加入购物车成功!');
				}
			})
			console.log(count);
			
		})
	
   //查看购物车		
		
		$('.see').click(function(){
		
			window.location.href="shoppingcart.html";
		})
