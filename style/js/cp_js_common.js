if("undefined"!==typeof CommentpressSettings){var cp_wp_adminbar=CommentpressSettings.cp_wp_adminbar;var cp_comments_open=CommentpressSettings.cp_comments_open;var cp_special_page=CommentpressSettings.cp_special_page;var cp_para_comments_enabled=CommentpressSettings.cp_para_comments_enabled;var cp_tinymce=CommentpressSettings.cp_tinymce;var cp_promote_reading=CommentpressSettings.cp_promote_reading;var cp_is_mobile=CommentpressSettings.cp_is_mobile;var cp_cookie_path=CommentpressSettings.cp_cookie_path;var cp_multipage_page=CommentpressSettings.cp_multipage_page;var cp_template_dir=CommentpressSettings.cp_template_dir;var cp_plugin_dir=CommentpressSettings.cp_plugin_dir;var cp_toc_chapter_is_page=CommentpressSettings.cp_toc_chapter_is_page;var cp_show_subpages=CommentpressSettings.cp_show_subpages;var cp_default_sidebar=CommentpressSettings.cp_default_sidebar;var cp_is_signup_page=CommentpressSettings.cp_is_signup_page;var cp_scroll_speed=CommentpressSettings.cp_js_scroll_speed;var cp_min_page_width=CommentpressSettings.cp_min_page_width}var msie=jQuery.browser.msie;var msie6=jQuery.browser.msie&&jQuery.browser.version=="6.0";var cp_wp_adminbar_height=28;var cp_book_header_height;var cp_header_animating=false;var cp_toc_on_top="n";var page_highlight=false;var cp_header_minimised=jQuery.cookie("cp_header_minimised");var cp_sidebar_minimised=jQuery.cookie("cp_sidebar_minimised");var cp_container_top_max=jQuery.cookie("cp_container_top_max");var cp_container_top_min=jQuery.cookie("cp_container_top_min");if(cp_wp_adminbar=="y"){cp_container_top_max=parseInt(cp_container_top_max)+cp_wp_adminbar_height;cp_container_top_min=parseInt(cp_container_top_min)+cp_wp_adminbar_height}function cp_page_setup(){var b="";if(document.getElementById){b+='<style type="text/css" media="screen">';b+="ul.all_comments_listing div.item_body { display: none; } ";if(cp_wp_adminbar=="y"){b+="#header { top: 28px; } ";b+="#book_header { top: 60px; } "}if(cp_show_subpages=="0"){b+="#toc_sidebar .sidebar_contents_wrapper ul li ul { display: none; } "}if(cp_header_minimised===undefined||cp_header_minimised===null||cp_header_minimised=="n"){var c=cp_container_top_max;if(cp_wp_adminbar=="y"){var c=cp_container_top_max-cp_wp_adminbar_height}b+="#container { top: "+c+"px; } ";b+="#sidebar { top: "+cp_container_top_max+"px; } "}else{b+="#book_header { display: none; } ";var c=cp_container_top_min;if(cp_wp_adminbar=="y"){var c=cp_container_top_min-cp_wp_adminbar_height}b+="#container { top: "+c+"px; } ";b+="#sidebar { top: "+cp_container_top_min+"px; } "}if(cp_special_page=="0"){if(cp_para_comments_enabled=="1"){b+=".paragraph_wrapper { display: none; } "}b+="#respond { display: none; } ";if(cp_sidebar_minimised=="y"){b+="#comments_sidebar .sidebar_minimiser { display: none; } "}}if(jQuery.cookie("cp_container_width")){var d=jQuery.cookie("cp_container_width");if(cp_is_signup_page=="1"){b+="#content { width: "+d+"%; } "}else{b+="#page_wrapper { width: "+d+"%; } "}b+="#footer { width: "+d+"%; } "}if(jQuery.cookie("cp_book_nav_width")){var a=jQuery.cookie("cp_book_nav_width");b+="#book_nav div#cp_book_nav { width: "+a+"%; } "}if(jQuery.cookie("cp_sidebar_width")){b+="#sidebar { width: "+jQuery.cookie("cp_sidebar_width")+"%; } "}if(jQuery.cookie("cp_sidebar_left")){b+="#sidebar { left: "+jQuery.cookie("cp_sidebar_left")+"%; } "}b+="</style>"}document.write(b)}cp_page_setup();function cp_setup_page_layout(){if(cp_is_signup_page=="1"){var a=jQuery("#content")}else{var a=jQuery("#page_wrapper")}a.each(function(e){var j=jQuery(this);var g=jQuery("#content");var b=jQuery("#sidebar");var m=jQuery("#footer");var h=jQuery("#book_header");var c=jQuery("#book_nav_wrapper");var f=jQuery("#cp_book_nav");var d=jQuery("#cp_book_info");var l=j.width();var n=b.width();var k=b.offset().left-l;if(jQuery.browser.opera){g.css("position","static")}j.resizable({handles:"e",minWidth:cp_min_page_width,alsoResize:"#footer",start:function(i,o){l=j.width();n=b.width();original_nav_width=f.width();original_sidebar_left=b.css("left");k=b.offset().left-l},resize:function(i,o){j.css("height","auto");m.css("height","auto");b.css("left",(j.width()+k)+"px");var p=l-j.width();b.css("width",(n+p)+"px");f.css("width",(original_nav_width-p)+"px")},stop:function(i,u){var t=parseFloat(jQuery(window).width());var o=j.width();if(jQuery.browser.webkit){o=o+1}var r=parseFloat(Math.ceil((1000000*parseFloat(o)/t))/10000);j.css("width",r+"%");if(cp_is_signup_page=="0"){g.css("width","auto")}var o=f.width();if(jQuery.browser.webkit){o=o+1}var p=parseFloat(Math.ceil((1000000*parseFloat(o)/t))/10000);f.css("width",p+"%");var o=b.width();if(jQuery.browser.webkit){o=o+1}var v=parseFloat(Math.ceil((1000000*parseFloat(o)/t))/10000);b.css("width",v+"%");var q=b.position().left;if(jQuery.browser.webkit){q=q+1}var s=parseFloat(Math.ceil((1000000*parseFloat(q)/t))/10000);b.css("left",s+"%");jQuery.cookie("cp_container_width",r.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_book_nav_width",p.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_sidebar_left",s.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_sidebar_width",v.toString(),{expires:28,path:cp_cookie_path})}})})}function cp_get_header_offset(){var a=0-(jQuery.px_to_num(jQuery("#container").css("top")));if(cp_wp_adminbar=="y"){a-=cp_wp_adminbar_height}return a}function cp_scroll_page(a){if(msie6){jQuery(window).scrollTo(0,0);jQuery("#main_wrapper").scrollTo(a,{duration:(cp_scroll_speed*1.5),axis:"y",offset:cp_get_header_offset()},function(){jQuery(window).scrollTo(0,1)})}else{if(cp_is_mobile=="0"){jQuery.scrollTo(a,{duration:(cp_scroll_speed*1.5),axis:"y",offset:cp_get_header_offset()})}}}function cp_scroll_to_top(b,a){if(msie6){jQuery("#main_wrapper").scrollTo(b,{duration:a})}else{if(cp_is_mobile=="0"){jQuery.scrollTo(b,a)}}}function cp_scroll_comments(b,a){if(cp_is_mobile=="0"){jQuery("#comments_sidebar .sidebar_minimiser").scrollTo(b,{duration:a})}}function cp_setup_comment_headers(){if(cp_special_page=="1"){return}jQuery("a.comment_block_permalink").unbind("click");jQuery("a.comment_block_permalink").css("cursor","pointer");jQuery("a.comment_block_permalink").click(function(){var j=jQuery(this).parent().attr("id").split("para_heading-")[1];var h=jQuery(this).parent().next("div.paragraph_wrapper");var a=jQuery("#para_wrapper-"+j).find("ol.commentlist");var e=false;var f=h.css("display");if(f=="none"){e=true}if(typeof(j)!="undefined"){if(j!=""){var c=jQuery("#textblock-"+j);if(e){jQuery.unhighlight_para();jQuery.highlight_para(c);cp_scroll_page(c)}else{if(cp_promote_reading=="0"){if(jQuery("#para_wrapper-"+j).find("#respond")[0]){jQuery.unhighlight_para()}else{if(!a[0]){jQuery.unhighlight_para();jQuery.highlight_para(c);cp_scroll_page(c)}}}else{if(jQuery.is_highlighted(c)){jQuery.unhighlight_para()}}}}else{if(page_highlight===false){cp_scroll_to_top(0,cp_scroll_speed)}page_highlight=!page_highlight}}if(cp_promote_reading=="0"){if(cp_comments_open=="y"){var g=jQuery("#comment_post_ID").attr("value");var b=jQuery("#para_wrapper-"+j+" .reply_to_para").attr("id");var i=b.split("-")[1];var d=jQuery("#para_wrapper-"+j).find("#respond")[0];if(a[0]){if(!e&&!d){}else{addComment.moveFormToPara(i,j,g)}}else{if(!d){h.css("display","none");e=true}addComment.moveFormToPara(i,j,g)}}}if(cp_para_comments_enabled=="1"){h.slideToggle("slow",function(){if(e){cp_scroll_comments(jQuery("#para_heading-"+j),cp_scroll_speed)}})}return false})}function cp_enable_comment_permalink_clicks(){jQuery("a.comment_permalink").unbind("click");jQuery("a.comment_permalink").click(function(c){var b=this.href.split("#")[1];if(cp_special_page=="1"){var a=cp_get_header_offset();jQuery.scrollTo(jQuery("#"+b),{duration:cp_scroll_speed,axis:"y",offset:a})}else{cp_scroll_comments(jQuery("#"+b),cp_scroll_speed)}return false})}function cp_scroll_to_anchor_on_load(){var c=document.location.toString();if(c.match("#comment-")){var d=c.split("#comment-")[1];var g=jQuery("#comment-"+d).parents("div.paragraph_wrapper").map(function(){return this});if(g.length>0){var i=jQuery(g[0]);if(cp_comments_open=="y"){var h=i.attr("id").split("-")[1];var a=jQuery("#para_wrapper-"+h+" .reply_to_para").attr("id");var f=a.split("-")[1];var e=jQuery("#comment_post_ID").attr("value");addComment.moveFormToPara(f,h,e)}i.show();cp_scroll_comments(jQuery("#comment-"+d),0);if(h!=""){var b=jQuery("#textblock-"+h);jQuery.highlight_para(b);cp_scroll_page(b)}else{if(page_highlight===false){cp_scroll_to_top(0,cp_scroll_speed)}page_highlight=!page_highlight}}}else{jQuery("a.para_permalink").each(function(m){var n=jQuery(this).attr("id");if(c.match("#"+n)||c.match("#para_heading-"+n)){if(cp_comments_open=="y"){var k=jQuery("#para_wrapper-"+n+" .reply_to_para").attr("id");var j=k.split("-")[1];var l=jQuery("#comment_post_ID").attr("value");addComment.moveFormToPara(j,n,l)}jQuery("#para_heading-"+n).next("div.paragraph_wrapper").show();cp_scroll_comments(jQuery("#para_heading-"+n),1);var o=jQuery("#textblock-"+n);jQuery.highlight_para(o);cp_scroll_page(o)}})}}function cp_scroll_to_comment_on_load(){var a=document.location.toString();if(a.match("#comment-")){var b=a.split("#comment-")[1];if(msie6){jQuery("#main_wrapper").scrollTo(jQuery("#comment-"+b),{duration:cp_scroll_speed,axis:"y",offset:cp_get_header_offset()})}else{if(cp_is_mobile=="0"){jQuery.scrollTo(jQuery("#comment-"+b),{duration:cp_scroll_speed,axis:"y",offset:cp_get_header_offset()})}}}}function cp_setup_comment_icons(){jQuery("a.para_permalink").unbind("click");jQuery("a.para_permalink").click(function(j){var m=jQuery(this).attr("id");var k=jQuery("#para_heading-"+m).next("div.paragraph_wrapper");var b=jQuery("#para_wrapper-"+m+" .commentlist");var d=k.find("#respond");var i=addComment.getLevel();var f=false;var h=k.css("display");if(h=="none"){f=true}jQuery.unhighlight_para();if(m!=""){var c=jQuery("#textblock-"+m);if(cp_promote_reading=="1"&&!f){}else{jQuery.highlight_para(c);cp_scroll_page(c)}}if(cp_promote_reading=="0"){if(cp_comments_open=="y"){var g=jQuery("#comment_post_ID").attr("value");var a=jQuery("#para_wrapper-"+m+" .reply_to_para").attr("id");var l=a.split("-")[1]}if(!d[0]){if(cp_comments_open=="y"){addComment.moveFormToPara(l,m,g)}}if(d[0]&&!i){if(cp_comments_open=="y"){addComment.moveFormToPara(l,m,g);cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}return}if(!d[0]&&b[0]&&!f){if(cp_comments_open=="y"){cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}return}if(!f&&b[0]){if(cp_comments_open=="y"){cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}return}if(d[0]&&!b[0]&&!f){if(cp_comments_open=="y"){cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}return}if(!f&&!b[0]){k.css("display","none");f=true}}k.slideToggle("slow",function(){if(cp_promote_reading=="1"&&f){cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}else{if(f){if(cp_comments_open=="y"){cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#para_heading-"+m),cp_scroll_speed)}}}});return false})}function cp_open_header(){var b=jQuery("#book_nav").height();var a=jQuery("#sidebar");var d=jQuery.get_sidebar_pane();var f=jQuery("#book_header");var c=jQuery("#container");var g=cp_container_top_max;if(cp_wp_adminbar=="y"){var g=cp_container_top_max-cp_wp_adminbar_height}c.animate({top:g+"px",duration:"fast"},function(){f.fadeIn("fast",function(){cp_header_animating=false})});if(cp_sidebar_minimised=="n"){var e=a.height()-cp_book_header_height;a.animate({top:cp_container_top_max+"px",height:e+"px",duration:"fast"},function(){a.css("height","auto")});d.animate({height:(d.height()-cp_book_header_height)+"px",duration:"fast"},function(){jQuery.set_sidebar_height();cp_header_animating=false})}else{a.animate({top:cp_container_top_max+"px",duration:"fast"},function(){cp_header_animating=false;jQuery.set_sidebar_height()})}}function cp_close_header(){var b=jQuery("#book_nav").height();var a=jQuery("#sidebar");var d=jQuery.get_sidebar_pane();var f=jQuery("#book_header");var c=jQuery("#container");f.hide();var g=cp_container_top_min;if(cp_wp_adminbar=="y"){var g=cp_container_top_min-cp_wp_adminbar_height}c.animate({top:g+"px",duration:"fast"});if(cp_sidebar_minimised=="n"){var e=a.height()+cp_book_header_height;a.animate({top:cp_container_top_min+"px",height:e+"px",duration:"fast"},function(){a.css("height","auto")});d.animate({height:(d.height()+cp_book_header_height)+"px",duration:"fast"},function(){jQuery.set_sidebar_height();cp_header_animating=false})}else{a.animate({top:cp_container_top_min+"px",duration:"fast"},function(){cp_header_animating=false;jQuery.set_sidebar_height()})}}function cp_setup_header_minimiser(){if(cp_header_animating===true){return false}cp_header_animating=true;if(cp_header_minimised===undefined||cp_header_minimised===null||cp_header_minimised=="n"){cp_close_header()}else{cp_open_header()}cp_header_minimised=(cp_header_minimised=="y")?"n":"y";jQuery.cookie("cp_header_minimised",cp_header_minimised,{expires:28,path:cp_cookie_path})}function cp_setup_para_links(){jQuery("a.cp_para_link").unbind("click");jQuery("a.cp_para_link").click(function(c){var a=jQuery(this).attr("href").split("#")[1];var b=jQuery("#textblock-"+a);cp_scroll_page(b);return false})}jQuery(document).ready(function(a){cp_book_header_height=a("#book_header").height();a.set_sidebar_height();if(jQuery.cookie("cp_container_top_min")){}else{cp_container_top_max=a.px_to_num(a("#container").css("top"));cp_container_top_min=cp_container_top_max-cp_book_header_height;a.cookie("cp_container_top_min",cp_container_top_min.toString(),{expires:28,path:cp_cookie_path});a.cookie("cp_container_top_max",cp_container_top_max.toString(),{expires:28,path:cp_cookie_path})}cp_setup_page_layout();cp_setup_comment_headers();cp_enable_comment_permalink_clicks();cp_setup_comment_icons();cp_setup_para_links();a("#btn_contents").click(function(){if(cp_default_sidebar=="toc"){return false}var b=a("#toc_sidebar").css("display");if(b=="none"){a("#toc_sidebar").show();a("#"+cp_default_sidebar+"_sidebar").hide();cp_toc_on_top="y"}else{a("#toc_sidebar").hide();a("#"+cp_default_sidebar+"_sidebar").show();cp_toc_on_top="n"}a.set_sidebar_height();return false});a("a.para_permalink").click(function(b){return false});a("a.comment_block_permalink").click(function(b){return false});a("#btn_header_min").click(function(){cp_setup_header_minimiser();return false});if(msie6){a("#btn_header_min").hide()}a("#cp_minimise_archive").click(function(){a(this).parent().next().slideToggle()});a("#cp_minimise_comments").click(function(){a(this).parent().next().slideToggle();if(cp_sidebar_minimised=="y"){cp_sidebar_minimised="n"}else{cp_sidebar_minimised="y"}a.cookie("cp_sidebar_minimised",cp_sidebar_minimised,{expires:28,path:cp_cookie_path})});a("#cp_minimise_all_comments").click(function(){a("div.paragraph_wrapper").slideUp();jQuery.unhighlight_para()});a("#toc_sidebar .sidebar_contents_wrapper ul#toc_list li a").click(function(c){if(cp_toc_chapter_is_page=="0"){var b=a(this).parent().find("ul");if(b.length>0){if(cp_show_subpages=="0"){a(this).next("ul").slideToggle()}return false}}});a("#cp_minimise_toc").click(function(){a(this).parent().next().slideToggle()});if(cp_special_page=="1"){cp_scroll_to_comment_on_load()}else{cp_scroll_to_anchor_on_load()}});