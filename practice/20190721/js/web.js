//收藏页面
function AddFavorite(sURL,sTitle)
{
  sURL=encodeURI(sURL);
  try {
    window.external.AddFavorite(sURL,sTitle);
  } catch (error) {
    try {
      window.sidebar.addPanel(sTitle,sURL,"");
      
    } catch (error) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }

}
//设置首页
function SetHome(obj,vrl){
  try {
    obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
  } catch (error) {
    if(window.netscape){
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (error) {
        alert("此操作被浏览器拒绝！/n请在浏览器地址栏输入about:config并回车/n然后将[signed.applets.codebase_principal_support]的值设置为true，双击即可。");
      }
      var prefs=components.classes['@mozilla.org/perferences-service;1'].getService(comments.interfaces.nslPrefBranch);
    prefs.setCharPref('browser.startup.homepage',vrl);
    }
  }
}
//lunbotu
$(function () {
  var index=0,
      window_width=1000,
      timer=null,
      img_count=5;
      function nextPlay() {
        if(index>img_count-1){  
           index=0;
          $("#box .menu").stop().animate({ left:-window_width * index }, 500);

        }else{
          $(".menu").stop().animate({ left: -window_width * index }, 500);
           
        }
        if (index > img_count - 1) {
          $(".pave-ul ul li").eq(0).addClass('act').siblings().removeClass('act');
    
        } else {
          $(".pave-ul ul li").eq(index).addClass('act').siblings().removeClass('act');

        }

        index++;
      }
      timer=setInterval(nextPlay,2000);

});
