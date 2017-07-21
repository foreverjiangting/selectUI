function editComponent(params){
    this.containerId = params.containerId;
    this.data = params.data?params.data:[];
    this.containerWidth = params.containerWidth;
    this.containerHeight = params.containerHeight;
    this.init();	
};
editComponent.prototype = {

    init:function(){
        this.render();
        this.registerSelectedClick();
    },	
    /*渲染组件*/
    render:function(){
	    var html =  "<div class='cm-tabs-nav'>";
            html += "<ul class='cm-tabs-title-list js_item_wrapper'>";
            html += this.dataTohtml(this.data);
            html += "</ul>";
            html += "<i class='icon-active js_scrollbar'></i>";
            html += "</div>";
        $("#" + this.containerId).html(html);
        $("#" + this.containerId).css("height",this.containerHeight);       
    },
    dataTohtml:function(data){
        var  html = "";
        if(!data){
            return "数据为空";
        }
        for(var i=0;i<data.length;i++){
            var dataId = data[i].id;
            var dataName = data[i].name;
            html += "<li data-id= " + dataId +">" + dataName + "</li>";
        }
        return html;
    },
    //tabs点击切换事件
    registerSelectedClick:function(){
        var _this = this;
        $('.cm-tabs-nav .cm-tabs-title-list li').bind('click',function(){
            var  dataId = $(this).attr("data-id");
            var  leftDis = (dataId) * 50 + "px" ;
            $('.cm-tabs-nav .icon-active').css('top',leftDis);
        });
    }
};