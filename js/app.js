function DropDown(el) {
    console.log(el);
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
                $(this).parent().parent().css("background","#4cbeff");
                $(this).parent().parent().css("color","#FFF");
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }

    $(function() { 
        //how to find element that got clicked?

        $('.wrapper-dropdown-1').on(
            'click',function() {

                var dd = new DropDown($(this));
                console.log(dd);
                $('.wrapper-dropdown-1').removeClass('active');
        });

    });