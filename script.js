// Get the video


    if (window.matchMedia("(orientation:landscape)").matches) {
      $("#myVideo").html(
        '<source src="https://vod-progressive.akamaized.net/exp=1688448784~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1044%2F19%2F480223896%2F2146728295.mp4~hmac=9a63cec40d8ffa159e4b670eb5b38779e2b426fa28fe0aacd7492c246591b618/vimeo-prod-skyfire-std-us/01/1044/19/480223896/2146728295.mp4" type="video/mp4"></source>'
      );
    } else {
      $("#myVideo").html(
        '<source src="https://www.bigbuckbunny.org/"></source>'
      );
    }

  

  