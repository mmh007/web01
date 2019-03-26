//多选框
$('th input:checkbox').click(function() {
    if ($(this).prop('checked')) {//进入
        $('td input:checkbox').each(function(index,item){//遍历
            $(item).prop('checked', true)
        })
    } else {
        $('td input:checkbox').each(function(index,item){
            $(item).prop('checked', false)
        })
    }
});
$('td input:checkbox').click(function(){
    $('th input:checkbox').prop("checked",$('td input:checkbox').length==$('td input:checkbox:checked').length)
})

//选中框总价
// $('td input:checkbox').click(function() {
//     if($(this).prop(' .totalPrice')){
//         var $tol = $('.totalPrice');
//             var el = $('table .total');
//             var totalPrice = 0;
//             for(let i = 0;i<el.length;i++){
//                 totalPrice += parseFloat(el.eq(i).html());
//                 console.log(totalPrice);
//             }}
//             if("totalPrice.length == 0")$tol.html(totalPrice)
//             else{

//             }
//     })

//增加
var num = 1;
$('.add').click(function(){
    num = $(this).siblings('input').val()
    num++;
    $(this).siblings('input').val(num);
    //单个总价
    var univalent = $(this).parent().siblings('.univalent').html();
    // console.log(univalent);
    $(this).parent().siblings('.total').html(univalent*num + `.00元`);
    //update();
    // 显示总价
    $('.totalPrice').html(univalent*num);
    fn();
});
//减小
$('.reduce').click(function() {
    num = $(this).siblings('input').val();
    if (num>1) {
        num--;
        $(this).siblings('input').val(num);
        var univalent = $(this).parent().siblings('.univalent').html();
        $(this).parent().siblings('.total').html(univalent*num);
        //update();
         $('.totalPrice').html(univalent*num + `.00元`);
         fn();
        
    }else{
        alert('宝贝必须大于0！！')
    }
});
//删除
$('.delete').click(function(){
    console.log($(this).parent().parent());
    $(this).parent().parent().prev().remove();
    $(this).parent().parent().remove();
    update();
});

//删除被选中的
$('.deleteChecked').click(function() {
    $("input:checkbox:checked").parent().parent().prev().remove();
    $("input:checkbox:checked").parent().parent().remove();
    update();
});

//更新价格和积分
// function update(){
    //总价
    // var totalPrice = 121;
    // $('.total').each(function(index, el) {
    //     totalPrice += Number($(el).eq(index).html());
    // });
    // // console.log(totalPrice);
    // $('.totalPrice').html(totalPrice);
     //积分

     var totalIntegral = 0;
          $('.integral').each(function(index, el) {
              totalIntegral += Number($(el).aq(index).html()*$('td input:text').eq(index).val());
          });
         $('.totalIntegral').html(totalIntegral);

        function fn(){
            var $tol = $('.totalPrice');
            var el = $('table .total');
            var totalPrice = 0;
            for(let i = 0;i<el.length;i++){
                totalPrice += parseFloat(el.eq(i).html());
                console.log(totalPrice);
            }
            $tol.html(totalPrice)
        }
        
        // function score(){
        //     var $tot = $('.totalIntegral');
        //     var el = $('td .integral');
        //     var totalIntegral = 0;
        //     for(let i = 0;i<el.length;i++){
        //         totalIntegral += pareseFloat(el.qq(i).html());
        //         consolr.log(totalIntegral);
        //     }
        //     $tot.html(totalIntegral)
        // }

        


//更新价格和积分
    // function update(){
    //     //总价
    //     var totalPrice = 0;
    //     $('.total').each(function(index, el) {
    //         totalPrice += Number($(el).html()*$('td input:text').eq(index).val());
    //         console.log($('td input:text').eq(index).val());
    //     });
    //     // console.log(totalPrice);
    //     $('.totalPrice').html(totalPrice);
    //     //积分
    //     var totalIntegral = 0;
    //     $('.integral').each(function(index, el) {
    //         totalIntegral += Number($(el).html()*$('td input:text').eq(index).val());
    //         console.log($('td input:text').eq(index).val());
    //     });
    //     $('.totalIntegral').html(totalIntegral);
    // }

    //update();


   