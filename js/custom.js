$(document).ready(function(){

	//typer
	window.onload=function(){	
		var el       = document.querySelector('.home .title .type')
		var options  = {
			text: '안녕하세요, 웹퍼블리셔 & 웹디자이너 김주희입니다',
			textSpeed: 95,
			blinkSpeed: 0.06
		}

		var instance = new tinytyper(el, options);
	}

	//home화면 메뉴 숨기기
	var homeh = $('#wrap .home').height();

	$('#menu').hide();

	$(window).scroll(function(){
		var high = $(this).scrollTop() >= homeh;

		if(homeh){
			$('#menu').show().css({"position":"fixed"});
		}
		else{
			$('#menu').hide();
		}
	});
	

	//section 높이
	var ht = $(window).height();	
	$("section").height(ht);
	
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});


    //메뉴 버튼 클릭
    $("#menu li").on("click",function(e){
		e.preventDefault();
		
		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i*ht;			
	
		$("html,body").stop().animate({"scrollTop":nowTop},500);
	});
	
    $(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		/*
		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
		*/
		
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}
	});

    //section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
            //마우스 휠을 올렸을 때 : delta=1
            //마우스 휠을 내렸을 때 : delta=-1
		
            //마우스 휠을 올렸을때	
              if (delta > 0) {  
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                 var prev = $(this).prev().offset().top;
                 //문서 전체를 prev에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":prev},500);
                 return false;
                 
            //마우스 휠을 내렸을때	 
              }else if (delta < 0) {  
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
                 var next = $(this).next().offset().top;
                 //문서 전체를 next에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":next},500);
                 return false;                                         
              }
              
         });
    
		 

});












