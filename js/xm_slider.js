/**
 * Created by Administrator on 2016/8/31.
 */
//���ͼƬ����?
var imgs=[
    {"i":3,"src":"./img/1ba4939c9-fc0a-4916-bddc-726fa00f7e9b.jpg"},
    {"i":4,"src":"./img/46550f09-b967-42ee-84bf-ca3f8bfd0432.jpg"},
    {"i":0,"src":"./img/2eafbb767-ba52-46ae-bf81-9b61277408fa.jpg"},
    {"i":1,"src":"./img/3f4bee59d-85a5-498f-ae57-a2cabe6aeb5b.jpg"},
    {"i":2,"src":"./img/2c61541b-b318-4710-8106-a3f20aef6fc3.jpg"},
];
var adv={
    LIWIDTH:0,      //ÿ��li�Ŀ���
    DISTANCE:0,     //�ܾ���
    DURATION:1000,  //��ʱ��
    STEPS:200,      //�ܲ���
    interval:0,     //��Ƶ
    step:0,         //����
    timer:null,     //��ʱ�����?
    moved:0,        //���ζ����Ѿ��ƶ��Ĳ���
    WAIT:3000,      //�Զ��ֲ��ȴ�ʱ��
    canAuto:true,   //�ܷ������Զ��ֲ�
    init:function(){
        //���idΪslider�Ŀ�
        this.LIWIDTH=parseFloat($("#slider").css("width"));
        this.updateView();
        //���㲽Ƶ
        this.interval=this.DURATION/this.STEPS;
        $("#idxs").on("mouseover",
            function(e){
                var target=e.target;//���target
                //���target��li��target��class����hover
                if(target.nodeName=="LI"
                    &&target.className!="hover"){
                    //�ҵ�idΪidxs�µ�classΪhover��li����ȡ�����ݱ�����start��
                    var start=
                        $("#idxs>.hover").html();
                    //���target�����ݱ�����end��
                    var end=target.innerHTML;
                    this.move(end-start);
                }
            }.bind(this)//��ǰ��this
        );
        this.autoMove();
    },
    autoMove:function(){
        this.timer=setTimeout(
            function(){
                this.canAuto?this.move(1):this.autoMove();
            }.bind(this),this.WAIT);
    },
    move:function(n){
        clearInterval(this.timer);
        this.timer=null;
        //�����ܾ���
        this.DISTANCE=n*this.LIWIDTH;
        //���㲽��
        this.step=this.DISTANCE/this.STEPS;
        if(n<0){
            imgs=imgs.splice(imgs.length-(-n),-n).concat(imgs);
            this.updateView();
            $("#imgs").css("left",n*this.LIWIDTH+"px");
            this.timer=setInterval(
                this.moveStep.bind(this),this.interval
            );
        }else{          //************************************************
            this.timer=setInterval(
                this.moveStep.bind(this,function(){
                    imgs=imgs.concat(imgs.splice(0,n));
                    this.updateView();
                    $("#imgs").css("left","");
                }.bind(this)),this.interval
            );
        }
    },
    moveStep:function(callback){
        $("#imgs").css("left",parseFloat($("#imgs").css("left"))-this.step+"px");
        this.moved++;
        if(this.moved==this.STEPS){
            clearInterval(this.timer);
            this.timer=null;
            this.moved=0;
            callback&&callback();
            $("#imgs").css("left","");
            this.autoMove();
        }
    },
    updateView:function(){              //����������½���?
        $("#imgs").html("");
        $("#idxs").html("");
        var fragImgs=document.createDocumentFragment();
        var fragIdxs=document.createDocumentFragment();
        for(var i=0;i<imgs.length;i++){
            var li=document.createElement("li");
            var a=document.createElement("a");
            a.href="#";
            var img=new Image();
            img.src=imgs[i].src;
            a.appendChild(img);
            li.appendChild(a);
            fragImgs.appendChild(li);

            li=document.createElement("li");
            if(i==imgs[0].i){
                //����li��classΪhover
                li.className="hover";
            }
            //����������Ϊi+1
            li.innerHTML=i+1;
            //��li׷�ӵ�fragIdxs��
            fragIdxs.appendChild(li);
        }
        $("#imgs").append(fragImgs);
        $("#idxs").append(fragIdxs);
        $("#imgs").css("width",this.LIWIDTH*imgs.length+"px");
    }
}
adv.init();

/********************С�����ǵ�Ʒ����************************/
var mi={
    DISTANCE:0, //�ܾ���
    DURATION:1000,//��ʱ��
    STEPS:100, //�ܲ���
    interval:0,//��Ƶ
    step:0, //����
    timer:null,//��ʱ�����?
    WAIT:4000,//�ڴ��ƶ��ĵȴ�ʱ��
    init:function(){
        var x=parseFloat($("#xiaomi_ul").css("width"));
        this.DISTANCE=parseFloat(x/2);
        this.interval=this.DURATION/this.STEPS;
        this.step=this.DISTANCE/this.STEPS;
    },
    moveLeft:function(){
        if(this.timer==null){
            this.timer=setInterval(
                this.moveLeftStep.bind(this),this.interval
            );
        }
    },
    moveLeftStep:function(){
        var left=parseFloat($("#xiaomi_ul").css("left"));
        if(left>-this.DISTANCE){
            $("#xiaomi_ul").css("left",left-this.step+"px")
        }else{
            clearInterval(this.timer);
            this.timer=setTimeout(
                this.moveRight.bind(this),this.WAIT
            );
            this.timer=null;
        }
    },
    moveRight:function(){
        if(this.timer==null)
            this.timer=setInterval(
                this.moveRightStep.bind(this),this.interval
            );
    },
    moveRightStep:function(){
        var left=parseFloat($("#xiaomi_ul").css("left"));
        if(left<0){
            $("#xiaomi_ul").css("left",left+this.step+"px");
        }else{
            clearInterval(this.timer);
            this.timer=setTimeout(
                this.moveLeft.bind(this),this.WAIT
            );
            this.timer=null;
        }
    }
}
mi.init();
setTimeout(mi.moveLeft.bind(mi),2000);



// $(function () {
//  //轮播上一张下一张图标控制
//  $("#big_banner_change_wrap").hover(function () {
//     stop();
//     $("#big_banner_change_wrap").children().show();
// }, function () {
//     start();
//     $("#big_banner_change_wrap").children().hide();
// })
// $("#big_banner_change_prev").click(function () {
//     i += 1;
//     if (i >= allimg) {
//         i = 0;
//     }
//     img_change();
// });
// $("#big_banner_change_next").click(function () {
//     i -= 1;
//     if (i <= 0) {
//         i = allimg - 1;
//     }
//     img_change();
// });

// $('.big_banner_idx li').hover(function(){
//     stop();
//     i=$(this).index();
//     img_change();
// },function(){
//     start();
// });
// start();
// })

