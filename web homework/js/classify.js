
$(function(){
		$('.wrapper').navbarscroll();
	})

  
//获取商品分类的名字和ID
 $.ajax({
    url:'http://datainfo.duapp.com/shopdata/getclass.php',
    success:function(data){

      var data1 =JSON.parse(data);

      var lii=$(".hh li"); 
      for(var i=0;i<data1.length;i++){
        $(lii[i]).html(data1[i].className);
        localStorage.setItem('classID'+i,data1[i].classID);
      }
      console.log(data1);
    }
    
  });



<!--获取具体图片-->

         var lii=$(".hh li"); 
         for(var i=0;i<13;i++){
         	(function(i){
         
                $(lii[i]).click(function(){
                    var classId=localStorage.getItem('classID'+i);
                    console.log(classId);
                    $.ajax({
                        type:'get',
                        url:'http://datainfo.duapp.com/shopdata/getGoods.php',
                        dataType:'JSONP',
                        data:{classID:classId},
                        success:function(data){
                        	$("#goods").html("");
                         for(var i=0;i<data.length;i++){
                         	
                           $("#goods").html($("#goods").html()+`<div goodID=`+data[i].goodsID+`>
		                   
		    	         <img src=" `+data[i].goodsListImg+` " alt="" >
		    	 
	    	            <p class="p1">`+data[i].goodsName.slice(0,10)+`...`+`</p>
		                
		    	   </div>`)

                        }
                         
                         $('#goods>div').on('click',function(){
               
		       	            window.location.href="goodsInf.html#"+this.getAttribute('goodID');
		
	                    })  
                      }
                   })
                })
              })(i);
           
        }

