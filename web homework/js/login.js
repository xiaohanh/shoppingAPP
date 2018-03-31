       $('#btn').click(function(){
   	     var aa=$("#fn1").val();
       	 var bb=$("#fn2").val();
		$.ajax({
		 	type:'get',
		 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
		    data:{status:'login',userID:aa,password:bb},
		   dataType:'json',
	 	   success:function(data){
		
	    	console.log(data);
	    	 if(data==0){
	    	 	$("#warn").html("用户名不存在 ");
	    		
	    		
	        } else if(data==2){
	        	$("#warn").html('用户名和密码不相符');
	         
	         }else{
	         	 
	    	         localStorage.setItem("username",aa);
                     window.location.href = "index.html";
	    	}
	  
	        
			}

		 });
		 
		
	 });

