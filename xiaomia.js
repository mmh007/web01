/*** Created by Administrator on 2016/8/24.*/
/*购物车 菜单*/
// $("#top_box>ul.rt li.shopping").on("mouseover",function () {

//     $(this).children("div").css("display","block");
// });
// $("#top_box>ul.rt li.shopping").on("mouseout",function () {
//     $(this).children("div").css("display","none");
// });


// //搜索二级菜单
// $("#top_search>ul.lf").on("mouseover","li",function(){
//     $(this).children("div").css("display","block");
// });
// $("#top_search>ul.lf").on("mouseout","li",function(){
//     $(this).children("div").css("display","none");
// });


// 评价隐藏显示
$("#hardware_right>ul>li").hover(function (){
    $(this).children("span").slideDown(300);
},function(){
    $(this).children("span").slideUp(300);
})
// 评价隐藏显示
$("#zhoubian_right>ul>li").hover(function (){
    $(this).children("span").slideDown(300);
},function(){
    $(this).children("span").slideUp(300);
})

/*购物车 菜单*/
$("#top_box>ul.rt li.shopping").hover(function () {
    $(this).children("div").css("background", "#fff");
    $(this).children("div").stop(true, false).slideDown(300);
},function () {
    $(this).children("div").css("background", "#fff");
    $(this).children("div").stop(true, false).slideUp(300);
});

//搜索二级菜单
$("#top_search>ul.lf>li").on("mouseover",function(){
    $(this).children("div").stop(true, false).slideDown(300);
}),
$("#top_search>ul.lf>li").on("mouseout",function(){
    $(this).children("div").stop(true, false).slideUp(300);
});


/*二级菜单*/
$("#left_list>ul.lf").on("mouseover","li",function(){
    $(this).children("div").css("display","block");
});
$("#left_list>ul.lf").on("mouseout","li",function(){
    $(this).children("div").css("display","none");
});


/********************************滚动************************************/

/*******小米单品********/
$("#btn>.btn_1").click(function(){
   var n= $("#xiaomi_ul").css("left","0px");
});
$("#btn>.btn_2").click(function(){
    var x=parseFloat($("#xiaomi_ul").css("width"));
    x=parseFloat(-(x/2));
    var n= $("#xiaomi_ul").css("left",x);
});

