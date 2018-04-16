class PraiseButton{
    constructor(num,element){
        this.num = num;
        this.element = element;
    }

    clickAction(){
        this.element.click(()=>{
            if(this.num<10){
                $('.thumb').removeClass('on');
                $('.num').show();
                this.num = add(this.num);
                setTimeout(function(){
                    $('.num').hide();
                },1000)
            }else{
                $('.thumb').addClass('on');
                this.num = 0;
            }
            console.log(this.num);
        })
    }
}


class Thumb extends PraiseButton{
    constructor(num,element){
        super(num,element);
    }
}

//模块化子类处理，把子类export出去，实现子类要新建js文件import进去
export
default{
    Thumb
}

//new出子类，实现了功能
// let f = new Thumb(0,$('.thumb'));
// f.clickAction();