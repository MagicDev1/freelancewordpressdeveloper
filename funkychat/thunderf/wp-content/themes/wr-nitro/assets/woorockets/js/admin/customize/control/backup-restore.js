(function(a){a(window).load(function(){a('div[id^="wr-'+wr_nitro_customize_backup_restore.type+'-"]').each(function(){var b=a(this);b.id=b.attr("id").replace("wr-"+wr_nitro_customize_backup_restore.type+"-","");function c(e,d){e=typeof e!="undefined"?e:"";d=typeof d!="undefined"?d:"success";b.find(".notice").remove();var f="notice notice-"+d+" is-dismissible";var g=a('<div class="'+f+'">').append("<p>"+e+"</p>").append(a('<button type="button" class="notice-dismiss">').append('<span class="screen-reader-text">'+wr_nitro_customize_backup_restore.dismiss+"</span>").click(function(){a(this).closest(".notice").fadeOut()}));b.append(g);return g}b.on("click",".nitro-restore-settings",function(){b.find(".nitro-restore-settings-form").toggleClass("hidden")});b.on("click",".select-file",function(d){d.preventDefault();var e=window.wr_backup_file_selector;if(!e){e=wp.media({button:{text:wr_nitro_customize_backup_restore.select_button},states:[new wp.media.controller.Library({title:a(this).text(),library:wp.media.query({type:["application/json"]}),multiple:false,date:false})]});e.on("select",function(){var f=e.state().get("selection").first();if(f.attributes.url.match(/\.json$/)){b.find('[name="backup-file"]').val(f.attributes.url);b.find(".selected-file").text(f.attributes.url.split("/").pop());b.find(".select-file").text(wr_nitro_customize_backup_restore.change_backup);b.find(".remove-file").removeClass("hidden");b.find(".restore-backup").removeClass("hidden")}});e.on("open",function(){e._checking_interval=setInterval(function(){var f=e.state().get("selection").first();if(f&&f.attributes&&f.attributes.url){if(!f.attributes.url.match(/\.json$/)){e.reset()}}},50)});e.on("close",function(){clearInterval(e._checking_interval)});window.wr_backup_file_selector=e}e.control=a(this).closest('[class^="customize-control-content"]'),e.setting=e.control.attr("id").replace("wr-"+wr_nitro_customize_backup_restore.type+"-","");e.open()});b.on("click",".remove-file",function(d){d.preventDefault();a(this).addClass("hidden");b.find('[name="backup-file"]').val("");b.find(".selected-file").text("");b.find(".select-file").text(wr_nitro_customize_backup_restore.select_backup);b.find(".restore-backup").addClass("hidden")});b.on("click",".restore-backup",function(d){d.preventDefault();a(this).addClass("spinner is-active").css("float","none").text("");a.ajax({url:wr_nitro_customize_backup_restore.restore_url,data:{file:b.find('[name="backup-file"]').val(),nonce:wr_nitro_customize_backup_restore.restore_nonce},complete:a.proxy(function(e){a(this).removeClass("spinner is-active").text(wr_nitro_customize_backup_restore.restore_button);if(e.responseJSON.success){b.find(".remove-file").trigger("click");c(wr_nitro_customize_backup_restore.restore_success)}else{c(e.responseJSON.data,"error")}},this)})})})})})(jQuery);