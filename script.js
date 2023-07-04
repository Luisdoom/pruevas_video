function videosR(){
    if (window.matchMedia("(orientation:landscape)").matches) {
   
      $("#myVideo").html('<source src="https://eachevery.s3.amazonaws.com/markseliger/Bckg_16x9_Fnl.mp4" type="video/mp4"></source>' );
   
                       } 
   
                           else{
                            $("#myVideo").html('<source src="https://eachevery.s3.amazonaws.com/markseliger/Bckg_9x16_Fnl-_1.mp4" type="video/mp4"></source>' );
   
                           }}
   videosR();