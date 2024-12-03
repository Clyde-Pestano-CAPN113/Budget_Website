/*family
onclick: change this picture to another picture

document.getElementById('childcare_and_education').onclick = function() {
  const currentSrc = this.src;
  const image1 = '../information_img/education-and-childcare-logo.png';
  const image2 = '../information_img/Screenshot 2024-11-19 091825.png';

  if(currentSrc.endsWith(image1)) {
    this.src = image2;
  }else if(currentSrc.endsWith(image2)) {
    this.src = image1;
  }else {
    alert('error');
  }
}
  */
 //everyday money
 $(document).ready(function() {
  $("#fc_btn1").click(function() {
    $("#fc_img2, #fc_img3, #fc_img4, #fc_img5, #fc_img6").hide();
    $("#fc_img1").css('margin-right', '30px').show(2000).css("width", "500px");
  });

  $("#fc_btn2").click(function() {
    $("#fc_img3, #fc_img4, #fc_img5, #fc_img6").hide();
    $("#fc_img2").css('margin-right', '30px').show(1000).css('position', 'relative').animate( {
      left: "+=50",
      opacity:"0.3"
    }, 2000);
  });

  $("#fc_btn3").click(function() {
    $("#f_img1, #fc_img2, #fc_img4, #fc_img5, #fc_img6").hide();
    $("#fc_img3").css('margin-right', '30px').fadeIn(2000).fadeOut(5000);
  });

  $("#fc_btn4").click(function() {
    $("#fc_img1, #fc_img2, #fc_img3, #fc_img5, #fc_img6").hide();
    $("#fc_img4").css('margin-right', '30px').fadeToggle(2000);
  });

  $("#fc_btn5").click(function() {
    $("#fc_img1, #fc_img2, #fc_img3, #fc_img4, #fc_img6").hide();
    $("#fc_img5").css('margin-right', '30px').slideDown(1000);
  });

  $("#fc_btn6").click(function() {
    $("#fc_img1, #fc_img2, #fc_img3, #fc_img4, #fc_img5").hide();
    $("#fc_img6").css('margin-right', '30px').slideToggle(1000);
  });
  
});


