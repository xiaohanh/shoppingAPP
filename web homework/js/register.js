   $(document).ready(function(){
   var fn1=document.getElementById("fn1");
   var aaa=document.getElementById("aaa");
   var fn2=document.getElementById("fn2");
   var bbb=document.getElementById("bbb");
   var fn3=document.getElementById("fn3");
   var ccc=document.getElementById("ccc");
   fn1.onblur=function(){
     if(fn1.value==''){
      aaa.innerHTML="用户名不能为空！"
     }
    else{
    	 if(fn1.value.length!=11){     
            aaa.innerHTML="手机号必须为11位";    
         } 
         else{
         	 aaa.innerHTML='';
         }
    }
  }

 
   fn2.onblur=function(){
     if(fn2.value.length<6){     
      bbb.innerHTML="密码不得少于6位！";    
     } 
      else{
      	bbb.innerHTML='';
      }
   }
   fn3.onblur=function(){
    if(fn3.value!=fn2.value){
      ccc.innerHTML="密码不一致！";
    }
    else{
       ccc.innerHTML='';
    }
 }

});
        	             
   $('#btn').click(function(){
   	     var aa=$("#fn1").val();
       	 var bb=$("#fn2").val();
		$.ajax({
		 	type:'get',
		 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
		     data:{status:"register", userID:aa,password:bb},
		
	 	    success:function(data){
	 	    	console.log(data);
	
	    	    if(data==0){
	    	    	$(".warn").html("该手机号已经被注册");
	    	    }else if(data==2){
	    	 	   $(".warn").html("数据库报错");
	    	     } else if(data ==1){
	    	       
	    	     	     window.location.href = "login.html";     

	    	        }
	         },
	    	 
	
	      error:function(){
            alert("error");
           }
	 	

		 })
    });

