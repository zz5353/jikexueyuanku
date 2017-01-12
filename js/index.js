$(document).ready(function() {

    blockPos();
    // rowPos();
    moreMenu();
    goTopDis();
    $('#close-btn').on("click", close);
    $('#search-btn').on("click", search);
    $('#block-show').on("click", blockPos);
    $('#row-show').on("click", rowPos);
    $('#gototop').on("click",function(){//回到顶部方法
        $(window).scrollTop(0);    
    });
});
/*二级菜单下拉 begin*/
function moreMenu() {
    $('.header .header-nav>li').each(function() {
        $(this).mouseover(function() {
            var $th = $(this);
            $th.css("color", "#35b558");
            $th.children("div").css("display", "block");
            $th.children("div").stop().animate({ "opacity": "1" }, 500);
        });
        $(this).mouseleave(function() {
            var $th = $(this);
            $th.css("color", "#333");
            $th.children("div").stop().animate({ "opacity": "0" }, 500);
            setTimeout(function() {
                $th.children("div").css("display", "none");
            }, 500);
        });
    });
};
/*二级菜单下拉 end*/
/*搜索按钮展开 begin*/
function search() {
    $('.icon-box,.nav').css("display", "none");
    $('.searchbox').css({ "display": "block" });
    $('.searchbox').animate({ "margin-left": "10px" });
    $('.searchbox input').animate({ "margin-right": "330px" });
    $('.searchbox a').animate({ "margin-left": "20px" });
};
/*搜索按钮展开 begin*/
/*关闭搜索 begin*/
function close() {
    $('.searchbox').css("display", "none");
    $('.icon-box,.nav').css("display", "block");
    $('.searchbox').css({ "margin-left": "400px" });
    $('.searchbox a').css({ "margin-left": "0px" })
    $('.searchbox input').css({ "margin-right": "0px" });
};
/*关闭搜索 end*/

/*行状排列 begin*/
function rowPos() {
    $("#stylesheet").attr("href", "stylesheets/newstyle.css");
    $('.lesson-container ul li').each(function(index, value) {
        $(value).eq(0).css({ "margin-top": "" });
        $(value).eq(1).css({ "margin-top": "" });
        $(value).eq(2).css({ "margin-top": "" });
        $(this).find('p').css({ "height": "" });
        $(this).find('.grade').css({ "display": "block" });
        $(this).find('.learn-number').css({ "display": "block" });
        $(this).css({ "position": "", "top": "", "left": "" });
    });
    blockAnimate(false);
}
/*行状排列 end*/

/*块状排列 begin*/
function blockPos() {
    $("#stylesheet").attr("href", "stylesheets/style.css")
    $('.lesson-container ul li').each(function(index, value) {
        var x = index % 3;
        var y = (index - x) / 3;
        var left = x * 260;
        var top = y * 225;
        $(value).eq(0).css({ "margin-top": "40" });
        $(value).eq(1).css({ "margin-top": "40" });
        $(value).eq(2).css({ "margin-top": "40" });
        $(this).css({ "position": "absolute", "top": top, "left": left });
    });
    blockAnimate(true);
};
/*块状排列 end*/



/*块状排列下动画 begin*/
function blockAnimate(isblock) {
    $('.lesson-container>ul>li').each(function() {
        if (isblock) {
            $(this).on("mouseover", down);
            $(this).on("mouseleave", up);
        }
        else{
            $(this).off("mouseover");
            $(this).off("mouseleave");
        }
        function down() {
            $(this).css({ "z-index": "2" });
            $(this).find('.lesson-infor p').stop().animate({ "height": "88" });
            $(this).find('.grade').css({ "display": "block" });
            $(this).find('.learn-number').css({ "display": "block" });
            $(this).find('.mar-b8').stop().animate({ "bottom": "30px" });
        };

        function up() {
            $(this).css({ "z-index": "1" });
            $(this).find('.lesson-infor p').stop().animate({ "height": "0" });
            $(this).find('.mar-b8').stop().animate({ "bottom": "0px" });
            $(this).find('.grade').css({ "display": "none" });
            $(this).find('.learn-number').css({ "display": "none" });
        };
    });
};
/*块状排列下动画 end*/



/*回到顶部显示逻辑 begin*/
function goTopDis() {
    $(window).on("mousewheel",function () {
        var scrollHeight =$(window).scrollTop();
        // console.log(scrollHeight);
        if(scrollHeight>200){
            $('#gototop').css({"display":"block"});
        }
        else{
            $('#gototop').css({"display":"none"});
        }
    });
};
/*回到顶部显示逻辑 end*/
