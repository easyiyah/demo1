var str = '';
	    $('.wrapper li').on('mouseenter',function(e){
			var a = (Math.floor(Math.random()*10))%4;
			if( a==0){
	    		str = 'to-top';
	        }else if(a==1){
	        	str = 'to-bottom';
	        }else if( a==2){
	        	str = 'to-left';
	        }else if(a==3){
	        	str = 'to-right';
	        }
		    $(this).addClass(str);
	    }).on('mouseleave',function(){
	    	console.log(2);
	    	$(this).removeClass(str);
	    })