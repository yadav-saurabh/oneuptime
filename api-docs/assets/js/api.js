(function(){"use strict";var e=["curl","ruby","python","php","java","node","go"];$(document).delegate("#language a.language","click",function(e){var t=$(this);e.preventDefault(),$.isReady||$(document).ready(function(){t.click()})}).ready(function(){function u(n){a(function(){for(var r=e.length;r--;)t.removeClass(e[r]);t.addClass(n)})}function a(e){s.waypoint("disable"),e(),location.hash&&$(location.hash)[0].scrollIntoView(!0),s.waypoint("enable"),$.waypoints("refresh")}function f(e){a(function(){o.find(".switcher a").removeClass("selected"),o.find(".switcher a."+e).addClass("selected"),o.find(".specific-method-example").addClass("hide"),o.find(".specific-method-example."+e).removeClass("hide")})}var t=$("body"),n=$("#api-docs"),r=$("#guide"),i=$("#language"),s=$("#methods a.section-anchor"),o=$(".method-example.cards");n.waypoint(function(){$("body").find("#guide").toggleClass("stick"),$("body").find("#language").toggleClass("stick")}),r.on("click",".section",function(){r.find(".section.active").removeClass("active"),$(this).addClass("active")}),r.on("click","a.parent, a.child",function(){r.find("a.viewing").removeClass("viewing"),$(this).addClass("viewing")}),r.on("click","a.parent, a.child",function(){s.waypoint("disable"),setTimeout(function(){s.waypoint("enable")},200)}),o.on("click",".switcher a",function(e){e.preventDefault();var t=$(e.currentTarget).attr("class");t.indexOf("selected")===-1&&(f(t),$.cookie("cardType",t,{expires:1825,path:"/",domain:".stripe.com",secure:!0}))}),i.find("a.language").on("click",function(e){e.preventDefault();var t=$(e.currentTarget).attr("href");window.history&&window.history.replaceState&&history.replaceState({},document.title,t+window.location.hash),i.find("a.selected").removeClass("selected"),$(this).addClass("selected");var n=t.split("https://stripe.com/"),r=n[n.length-1];u(r),$.cookie("lang",r,{expires:1825,path:"/",domain:".stripe.com",secure:!0})}),$("a.show-parameters").on("click",function(e){$(e.currentTarget).parent().parent().removeClass("collapsed")}),$(window).trigger("scroll"),s.waypoint({continuous:!1,handler:function(e){var t=$(this),n=t.attr("name");window.history&&window.history.replaceState&&history.replaceState({},"","#"+n),$("#guide").find("a[href=#"+n+"], a[data-target~="+n+"]").click()}})})})();