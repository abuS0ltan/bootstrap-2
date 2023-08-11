




///////////// for test onlyyyyyyyyyyyyyy
let products=[];
async function getData(){
    let data =await fetch('https://fakestoreapi.com/products');
    return data.json();
}
(async()=>{
    products= await getData();
    console.log(products);
    $(document).ready(function (){
        $('.lodingScreen').fadeToggle(1000)
        $('body').css('overflow','unset')
    })
})()
$(window).scroll(function(){
    let x = $(window).scrollTop();
    let top = $('.portfolio').offset().top;
    let b =$('.portfolio').outerHeight();
    let bottom = $('.portfolio').offset().top;
    let about = $('.about').offset().top;
    bottom =bottom+b;
    //change nav color
    if(x>300)
        $('.navbar').css('backgroundColor','white');
    else
        $('.navbar').css('backgroundColor','unset');

    //   change nav color portfolio 
    if(x>=top&&x<=bottom)
        $('.navbar').css('backgroundColor','red');
    else{
        if(x>300)
        $('.navbar').css('backgroundColor','white');
        else
        $('.navbar').css('backgroundColor','unset'); 
    }
    // apper topBtn
    if(x>=about){
        $('.topBtn').css('opacity','1');
    }
    else{
        $('.topBtn').css('opacity','0');
    }
})
//topBtn
$('.topBtn').click(function (){
    $(window).scrollTop(0);
})
$('.nav-link').click(function (e){
    let href = $(e.target).attr('href');
    let ofs=$(href).offset().top;
    $('body ,html').animate({scrollTop: ofs},1000);
});