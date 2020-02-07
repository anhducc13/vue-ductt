// JavaScript Document
var T_USERNAME_REQUIRED = 'Điền tên đăng nhập của bạn.';
var T_USERNAME_TYPE='Tên đăng nhập phải bắt đầu bằng chữ cái, chỉ chứa các ký tự a-z,A-Z,0-9,_; độ dài >=6 và <=16 ký tự.';
var T_NAME_REQUIRED = 'Vui lòng điền tên đầy đủ của bạn.';
var T_NAME_TYPE = 'Tên sai định dạng.';
var T_EMAIL_REQUIRED = 'Vui lòng điền email của bạn';
var T_EMAIL_TYPE = 'Bạn đã nhập email sai định dạng';
var T_STAR_REQUIRED = 'Đánh giá về tác phẩm.';
var T_CONTENT_REQUIRED = 'Vui lòng điền nội dung.';
var T_PASSWORD_REQUIRED = 'Vui lòng nhập mật khẩu.';
var T_PASSWORD_TYPE = 'Mật khẩu tối thiểu phải có 6 và tối đa là 32 ký tự và ko chứa ký tự trắng.';
var T_REPASSWORD_REQUIRED = 'Xác nhận lại mật khẩu.';
var T_REPASSWORD_TYPE = 'Mật khẩu không đồng nhất';
var T_OLDPASSWORD_REQUIRED = 'Nhập mật khẩu cũ';
var T_NEWPASSWORD_REQUIRED = 'Nhập mật khẩu mới.';
var T_PHONE_REQUIRED = 'Vui lòng nhập số di động của bạn.';
var T_COUNTRY_REQUIRED = 'Chọn quốc gia.'
var T_PROVICEID_REQUIRED = 'Vui lòng chọn tỉnh(TP).';
var T_DISTRISTID_REQUIRED = 'Vui lòng chọn Quận(huyện).';
var T_ADDRESS_REQUIRED = 'Vui lòng nhập địa chỉ của bạn.';
var T_SPAM = 'Vui lòng nhập mã chống spam.';
var T_BUYNAME_REQUIRED='Bạn chưa nhập tên người mua';
var T_BUYEMAIL_REQUIRED='Bạn chưa nhập email người mua';
var T_BUYPHONE_REQUIRED='Bạn chưa có số điện thoại người mua';
var T_BUYCOUNTRY_REQUIRED='Chọn quốc gia.';
var T_BUYPROVICE_REQUIRED='Bạn vui lòng chọn tỉnh(TP)';
var T_BUYDISTRIST_REQUIRED='Bạn vui lòng chọn quận (huyện)';
var T_BUYADDRESS_REQUIRED='Bạn vui lòng địa chỉ chi tiết của người mua';
var T_SHIPNAME_REQUIRED='Bạn vui lòng nhập tên người nhận hàng.';
var T_SHIPEMAIL_REQUIRED='Bạn vui lòng email xác nhận đơn hàng';
var T_SHIPPHONE_REQUIRED='Bạn thiếu số điện thoại người nhận hàng.';
var T_SHIPCOUNTRY_REQUIRED='Chọn quốc gia.';
var T_SHIPPROVICE_REQUIRED='Bạn vui lòng chọn tỉnh(TP)';
var T_SHIPDISTRIST_REQUIRED='Bạn vui lòng chọn quận (huyện)';
var T_SHIPADDRESS_REQUIRED='Bạn thiếu địa chỉ chi tiết của người nhận hàng.';
var T_GENDER_REQUIRED='Vui lòng chọn giới tính của bạn.';
var T_QUESTION_REQUIRED='Vui lòng nhập câu hỏi của bạn.';
var T_INFORMATION_REQUIRED='Vui lòng cho biết địa chỉ giao hàng.';
var T_DELIVER_REQUIRED='vui lòng chọn phương thức vận chuyển.'
var T_PAYMENT_REQUIRED='Vui lòng chọn phương thức thanh toán.';
var T_BOOK_REQUIRED='Vui lòng nhập tên sách bạn muốn đặt.';
var T_ADDRESS_BUYER_REQUIRED='Vui lòng nhập địa chỉ người nhận sách.';
function istranparent(value) {
    if(value.match(/^\s*$/) || value==value.defaultValue) return true;
    return false;
}
function isblank(value) {
    if(value=="" || value==null) return true;
    return false;
}
function chk_username(f){
    //username
    var regex = /^[a-zA-Z]+[a-zA-Z0-9_]{5,15}$/;
    if(f.username && isblank(f.username.value) && istranparent(f.username.value)){
        window.alert(T_USERNAME_REQUIRED);
        f.username.focus();
        return false;
    }
    if (f.username && !regex.test(f.username.value)){
        window.alert(T_USERNAME_TYPE);
        f.username.focus();
        return false;
    }
    return true;
}
function chk_name(f){
    //name
    if(f.fullname && isblank(f.fullname.value) && istranparent(f.fullname.value)){
        window.alert(T_NAME_REQUIRED);
        f.fullname.focus();
        return false;
    }
    if (f.fullname && isNaN(f.fullname.value)==false){
        window.alert(T_NAME_TYPE);
        f.fullname.focus();
        return false;
    }
    return true;
}
function chk_email(f){
    //email
    var regex = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
    if((f.email)&& isblank(f.email.value)){
        window.alert(T_EMAIL_REQUIRED);
        f.email.focus();
        return false;
    }
    if (f.email && !regex.test(f.email.value)){
        window.alert(T_EMAIL_TYPE);
        f.email.focus();
        return false;
    }
    return true;
}
function chk_star(f){
    //star
    if((f.star)&& (f.star.value==0)){
        window.alert(T_STAR_REQUIRED);
        f.star.focus();
        return false;
    }
    return true;
}
function chk_content(f){
    //content
    if((f.content)&& istranparent(f.content.value)){
        window.alert(T_CONTENT_REQUIRED);
        f.content.focus();
        return false;
    }
    return true;
}
function chk_bookname(f){
    //content
    if((f.bookname)&& istranparent(f.bookname.value)){
        window.alert(T_BOOK_REQUIRED);
        f.bookname.focus();
        return false;
    }
    return true;
}
function chk_question(f){
    //content
    if((f.question)&& istranparent(f.question.value)){
        window.alert(T_QUESTION_REQUIRED);
        f.question.focus();
        return false;
    }
    return true;
}
function chk_phone(f){
    //phone
    if((f.phone)&& istranparent(f.phone.value)){
        window.alert(T_PHONE_REQUIRED);
        f.phone.focus();
        return false;
    }
    return true;
}
function chk_pass(f){
    //pass
    var regex = / /;
    if((f.password)&& istranparent(f.password.value)){
        window.alert(T_PASSWORD_REQUIRED);
        f.password.focus();
        return false;
    }
    if((f.password)&& (f.password.value.length<6 || f.password.value.length>32 || regex.test(f.password.value))){
        window.alert(T_PASSWORD_TYPE);
        f.password.focus();
        return false;
    }
    return true;
}
function chk_repass(f){
    //re pass
    if((f.re_password)&& istranparent(f.re_password.value)){
        window.alert(T_REPASSWORD_REQUIRED);
        f.re_password.focus();
        return false;
    }
    if(f.re_password.value!=f.password.value){
        window.alert(T_REPASSWORD_TYPE);
        f.re_password.focus();
        return false;
    }
    return true;
}
function chk_oldpass(f){
    //pass
    if((f.oldpassword)&& istranparent(f.oldpassword.value)){
        window.alert(T_OLDPASSWORD_REQUIRED);
        f.oldpassword.focus();
        return false;
    }
    return true;
}
function chk_newpass(f){
    //pass
    var regex = / /;
    if((f.newpassword)&& istranparent(f.newpassword.value)){
        window.alert(T_NEWPASSWORD_REQUIRED);
        f.newpassword.focus();
        return false;
    }
    if((f.newpassword)&& (f.newpassword.value.length<6 || f.newpassword.value.length>32 || regex.test(f.newpassword.value))){
        window.alert(T_PASSWORD_TYPE);
        f.newpassword.focus();
        return false;
    }

    return true;
}
function chk_renewpass(f){
    //re pass
    if((f.retypenewpassword && f.retypenewpassword.value!=f.newpassword.value)){
        window.alert(T_REPASSWORD_REQUIRED);
        f.retypenewpassword.focus();
        return false;
    }
    return true;
}
function chk_country(f){
    //town
    if((f.country)&& (f.country.value==0)){
        window.alert(T_COUNTRY_REQUIRED);
        f.country.focus();
        return false;
    }
    return true;
}
function chk_gender(f){
    //town
    if((f.gender)&& (f.gender.value==0)){
        window.alert(T_GENDER_REQUIRED);
        f.gender.focus();
        return false;
    }
    return true;
}
function chk_proviceid(f){
    //town
    if((f.provinceid)&& (f.provinceid.value==0)){
        window.alert(T_PROVICEID_REQUIRED);
        f.provinceid.focus();
        return false;
    }
    return true;
}
function chk_distristid(f){
    //province
    if((f.districtid)&& (f.districtid.value==0)){
        window.alert(T_DISTRISTID_REQUIRED);
        f.districtid.focus();
        return false;
    }
    return true;
}
function chk_address(f){
    //town
    if((f.province)&& (f.province.value==0)){
        window.alert(T_BUYPROVICE_REQUIRED);
        f.province.focus();
        return false;
    }
    //province
    if((f.district)&& (f.district.value==0)){
        window.alert(T_BUYDISTRIST_REQUIRED);
        f.district.focus();
        return false;
    }
    //address detail
    if(((f.adddetail)&& istranparent(f.adddetail.value)) || (f.adddetail.value == 'địa chỉ chi tiết')){
        window.alert(T_ADDRESS_REQUIRED);
        f.adddetail.focus();
        return false;
    }
    return true;
}

function chk_scode(f){
    //scode
    if((f.captcha)&&(f.captcha.value=="" || f.captcha.value==null)){
        window.alert(T_SPAM);
        f.captcha.focus();
        return false;
    }
    return true;
}

//email
function check_buyeremail(f){
    var regex = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
    if((f.buyer_email)&& isblank(f.buyer_email.value)){
        window.alert(T_BUYEMAIL_REQUIRED);
        f.buyer_email.focus();
        return false;
    }
    if (f.buyer_email && !regex.test(f.buyer_email.value)){
        window.alert(T_EMAIL_TYPE);
        f.buyer_email.focus();
        return false;
    }
    return true;
}

function check_buyerfullname(f){
    //name
    if(f.buyer_fullname && isblank(f.buyer_fullname.value) && istranparent(f.buyer_fullname.value)){
        window.alert(T_BUYNAME_REQUIRED);
        f.buyer_fullname.focus();
        return false;
    }
    if (f.buyer_fullname && isNaN(f.buyer_fullname.value)==false){
        window.alert(T_NAME_TYPE);
        f.buyer_fullname.focus();
        return false;
    }
    return true;
}

function check_buyerphone(f){
    //phone
    if((f.buyer_phone)&& istranparent(f.buyer_phone.value)){
        window.alert(T_BUYPHONE_REQUIRED);
        f.buyer_phone.focus();
        return false;
    }
    return true;
}

function check_buyerprovince(f){
    //town
    if((f.buyer_provinceid)&& (f.buyer_provinceid.value==0)){
        window.alert(T_BUYPROVICE_REQUIRED);
        f.buyer_provinceid.focus();
        return false;
    }
    return true;
}
function check_buyerdistrict(f){
    //province
    if((f.buyer_districtid)&& (f.buyer_districtid.value==0)){
        window.alert(T_BUYDISTRIST_REQUIRED);
        f.buyer_districtid.focus();
        return false;
    }
    return true;
}
function check_buyeraddress(f){
    //address
    if((f.buyer_adddetail)&& istranparent(f.buyer_adddetail.value)){
        window.alert(T_BUYADDRESS_REQUIRED);
        f.buyer_adddetail.focus();
        return false;
    }
    return true;
}
function check_shippingfullname(f){
    //name
    if(f.shipping_fullname && isblank(f.shipping_fullname.value) && istranparent(f.shipping_fullname.value)){
        window.alert(T_SHIPNAME_REQUIRED);
        f.shipping_fullname.focus();
        return false;
    }
    if (f.shipping_fullname && isNaN(f.shipping_fullname.value)==false){
        window.alert(T_NAME_TYPE);
        f.shipping_fullname.focus();
        return false;
    }
    return true;
}

function check_shippingphone(f){
    //phone
    if((f.shipping_phone)&& istranparent(f.shipping_phone.value)){
        window.alert(T_SHIPPHONE_REQUIRED);
        f.shipping_phone.focus();
        return false;
    }
    return true;
}

function check_shippingprovince(f){
    //province
    if((f.shipping_provinceid)&& (f.shipping_provinceid.value==0)){
        window.alert(T_SHIPPROVICE_REQUIRED);
        f.shipping_provinceid.focus();
        return false;
    }
    return true;
}

//district
function check_shippingdistrict(f){
    if((f.shipping_districtid)&& (f.shipping_districtid.value==0)){
        window.alert(T_SHIPDISTRIST_REQUIRED);
        f.shipping_districtid.focus();
        return false;
    }
    return true;
}

//address
function check_shippingaddress(f){
    if((f.shipping_adddetail)&& istranparent(f.shipping_adddetail.value)){
        window.alert(T_SHIPADDRESS_REQUIRED);
        f.shipping_adddetail.focus();
        return false;
    }
    return true;
}
function CheckForm(f){
    if(!chk_email(f))return false;
    if(!chk_pass(f))return false;
    if(!chk_repass(f))return false;
    if(!chk_name(f))return false;
    if(!chk_gender(f))return false;
    if(!chk_phone(f))return false;
    if(!chk_proviceid(f))return false;
    if(!chk_distristid(f))return false;
    if(!chk_address(f))return false;
    if(!chk_question(f))return false;

    if(!chk_bookname(f))return false;
    //if(!chk_username(f))return false;
    if(!chk_oldpass(f))return false;
    if(!chk_newpass(f))return false;
    if(!chk_renewpass(f))return false;
    if(!chk_star(f))return false;

    if(!chk_country(f))return false;
    if(!chk_content(f))return false;
    if(!chk_scode(f))return false;
}
function checkRadio(f,o)
{
    var get = document.getElementsByName(o);
    for (var i=0; i < get.length; i++){
        if (get[i].checked){
            var rad_val = get[i].value;
            return true;
        }
    }
    window.alert(T_INFORMATION_REQUIRED);
    return false;
}

function CheckOut(f){
    if(!check_buyeremail(f))return false;
    if(!check_buyerfullname(f))return false;
    if(!check_buyerprovince(f))return false;
    if(!check_buyerdistrict(f))return false;
    if(!check_buyeraddress(f))return false;
    if(!check_buyerphone(f))return false;

    var ra = 'shipping_info';
    var get = document.getElementsByName(ra);
    if(!checkRadio(f, ra)){
        f.shipping_info1.focus();
        return false;
    }
    for (var i=0; i < get.length; i++){
        if (get[i].checked){
            if(get[i].value == 2){
                if(!check_shippingfullname(f))return false;
                if(!check_shippingprovince(f))return false;
                if(!check_shippingdistrict(f))return false;
                if(!check_shippingaddress(f))return false;
                if(!check_shippingphone(f))return false;
            }
        }
    }
    return true;
}

function Check(f){
    return CheckOut(f);
}

function checkout_facebook(f){
    //if(!check_buyerfullname(f))return false;
    if(!check_buyerprovince(f))return false;
    if(!check_buyerdistrict(f))return false;
    //if(!check_buyeraddress(f))return false;
    if(!check_buyerphone(f))return false;

    var ra = 'shipping_info';
    var get = document.getElementsByName(ra);
    if(!checkRadio(f, ra)){
        f.shipping_info1.focus();
        return false;
    }
    for (var i=0; i < get.length; i++){
        if (get[i].checked){
            if(get[i].value == 2){
                if(!check_shippingfullname(f))return false;
                if(!check_shippingprovince(f))return false;
                if(!check_shippingdistrict(f))return false;
                if(!check_shippingaddress(f))return false;
                if(!check_shippingphone(f))return false;
            }
        }
    }
}

function check_Radio2(f,o)
{
    var get = document.getElementsByName(o);
    for (var i=0; i < get.length; i++){
        if (get[i].checked){
            var rad_val = get[i].value;
            return true;
        }
    }
    window.alert(T_DELIVER_REQUIRED);
    return false;
}
function check_Radio3(f,o)
{
    var get = document.getElementsByName(o);
    for (var i=0; i < get.length; i++){
        if (get[i].checked){
            var rad_val = get[i].value;
            return true;
        }
    }
    window.alert(T_PAYMENT_REQUIRED);
    return false;
}
function Check_Payment(f){
    if(check_Radio2(f,'deliverform')==false){
        return false;
    }
    else{
        return check_Radio3(f,'payment');
    }
}
function AddToShopcart(objectid, object,quantity,buttonID,type){
    var qty="1";
    if((quantity===undefined)||(quantity===null)){
        ;
    }else qty=$("#"+quantity).val();
    if(buttonID!=undefined){
        processShopcart(buttonID);
    }
    $.ajax({
            type:"GET",
            url:"/index2.php?com=shopcart&ctr=shopcart&act=add&objectid="+objectid+"&object="+object+"&qty="+qty+"&showresult=1&type="+type,
            success:function(html){
                if(html!=0) {
                    $("#shopcart_count").html(html);
                    $(".user-cart-quantity").html(html);
                    viewCartRight("Đã thêm sách vào giỏ hàng",1500);
                    if(buttonID!=undefined) processShopcartDone(buttonID);
                    $("#add_shopcart_detail_go").html('<div class="div_button_shopcart button_shop_now"><a class="bt_add_shopcart" href="/?com=shopcart&act=view" ><i class="fa fa-shopping-cart"></i> Xem giỏ hàng</a></div>');
                }
            }
    });
}
function processShopcart(buttonID){
    $("#"+buttonID+" > a").removeAttr('onclick');
    $("#"+buttonID+" > a").attr('disabled','disabled');
    $("#"+buttonID+" > a").html('<i class="fa fa-plus"></i>Đang xử lý...');
    $("#"+buttonID).css('background',"#F7C328");
}
function processShopcartDone(buttonID){
    $("#"+buttonID).css('background',"#5cb85c");
    $("#"+buttonID).addClass("add-success");
    $("#"+buttonID+" > a").html('<i class="fa fa-check"></i> Đã thêm xong!');
}
function addShopcartList(objectid, object,quantity,buttonID,type){
    var qty="1";
    if(quantity!=undefined){
        qty=quantity;
    }
    if(buttonID!=undefined){
        processShopcartList(buttonID);
    }
    $.ajax({
            type:"GET",
            url:"/index2.php?com=shopcart&ctr=shopcart&act=add&objectid="+objectid+"&object="+object+"&qty="+qty+"&showresult=1&type="+type,
            success:function(html){
                if(html!=0) {
                    $("#shopcart_count").html(html);
                    $(".user-cart-quantity").html(html);
                    viewCartRight("Đã thêm sách vào giỏ hàng",1500);
                    if(buttonID!=undefined) processShopcartListDone(buttonID);
                    $("#add_shopcart_detail_go").html('<div class="div_button_shopcart button_shop_now"><a class="bt_add_shopcart" href="/?com=shopcart&act=view" ><i class="fa fa-shopping-cart"></i> Xem giỏ hàng</a></div>');
                }
            }
    });
}
function processShopcartList(buttonID){
    $("#"+buttonID).removeAttr('onclick');
    $("#"+buttonID).attr('disabled','disabled');
    $("#"+buttonID).html('<i class="fa fa-hand-o-right"></i> Đang xử lý...');
    $("#"+buttonID).css('background',"#F7C328");
}
function processShopcartListDone(buttonID){
    $("#"+buttonID).css('background',"#5cb85c");
    $("#"+buttonID).addClass("add-success");
    $("#"+buttonID).html('<i class="fa fa-hand-o-right"></i> Đã thêm xong!');
}
function ajlogon(form,view,msbox,userbox,callback){
    $.ajax({
            type:"POST",
            url:"/index2.php?com=user&ctr=user&act=backgroundlogon&view="+view,
            data:$("#"+form).serialize(),
            success:function(html){
                var result=JSON.parse(html);
                if(result.result_code==1){
                    $("#"+userbox).html(result.user_content);
                    $("#"+msbox).html(result.user_msg);
                    if(callback!==undefined) callback(result);
                    return;
                }
                if(result.result_code==2){
                    $("#"+msbox).html(result.user_msg);
                    $("#aj_logon_submit").attr("disabled",false);
                    return;
                }
            }
    });
    return false;
}
function ajlogoff(callback){
    $("#aj_logoff_submit").attr("disabled","disabled");
    $.ajax({
            type:"GET",
            url:"/index2.php?com=user&ctr=user&act=backgroundlogoff",
            success:function(html){
                $("#aj_user_box").html(html);
                if(callback!=undefined) callback(html);
            }
    });
    return false;
}
function buyerreload(info){
    $("#shipping_info2").click(function () {
            if($("#shipping_fullname").val() == ''){
                $("#shipping_fullname").val($("#buyer_fullname").val());
            }
            if($("#shipping_adddetail").val() == ''){
                $("#shipping_adddetail").val($("#buyer_adddetail").val());
            }
            if($("#shipping_phone").val() == ''){
                $("#shipping_phone").val($("#buyer_phone").val());
            }
            if($("#shipping_provinceid").val() == 0){
                $("#shipping_provinceid").val($("#buyer_provinceid").val());
                $.ajax({
                        type:"POST",
                        url:"/index2.php?com=location&ctr=location&act=getdistrict",
                        data:{provinceid: $("#shipping_provinceid").val()},
                        success:function(html){
                            $("#shipping_districtid").html(html);
                            $("#shipping_districtid").val($("#buyer_districtid").val());
                        }
                });
            }

            $("#shipping_info").show("slow");
    });

    $("#shipping_info1").click(function () {
            $("#shipping_info").hide(500);
    });

    $("#shipping_info3").click(function () {
            $("#shipping_info").hide(500);
    });
    $("#buyer_provinceid").change(function(){
            $.ajax({
                    type:"POST",
                    url:"/index2.php?com=location&ctr=location&act=getdistrict",
                    data:{provinceid: $("#buyer_provinceid").val()},
                    success:function(html){
                        $("#buyer_districtid").html(html);
                    }
            });
            if($(this).val()==4) $("#shipping_atlaz_office").show();
            else $("#shipping_atlaz_office").hide();
    });
    $("#shipping_provinceid").change(function(){
            $.ajax({
                    type:"POST",
                    url:"/index2.php?com=location&ctr=location&act=getdistrict",
                    data:{provinceid: $("#shipping_provinceid").val()},
                    success:function(html){
                        $("#shipping_districtid").html(html);
                    }
            });

    });
    if($("#buyer_provinceid").val()==4) $("#shipping_atlaz_office").show();
    else $("#shipping_atlaz_office").hide();
    $("#aj_shopcart").removeAttr('disabled');
}
function keypress(obj,event){
    if(event.which!=13) return false;
    $("#aj_shopcart").attr('disabled','disabled');
    $("#"+obj).trigger('click');
    return false;
}
function handleForm(status){
    if(status)
        $("#aj_shopcart").attr('disabled','disabled');
    else
        $("#aj_shopcart").removeAttr('disabled');
}
function ajget(source,callback,target){
    $.ajax({
            type:"GET",
            url:source,
            success:function(html){
                var result=JSON.parse(html);
                callback(result,target);
                return;
            }
    });
}
function ajpost(source,form,callback,target){
    $.ajax({
            type:"POST",
            url:source,
            data:$("#"+form).serialize(),
            success:function(html){
                var result=JSON.parse(html);
                callback(result,target);
                return;
            }
    });
}
function silentUpdate(data,target){
    if((data.result_code!=undefined)&&(target!=undefined)){
        var destination=target.split(",");
        if(data.result_code==1){
            var count,len=destination.length;
            for(count=0;count<len;count++){
                $("#"+destination[count]).html(data[destination[count]]);
                $("#"+destination[count]).css("display","block");
            }
        }
    }
}
function viewCartRight(ms,time){
    $.ajax({
            type:"GET",
            url:"/index2.php?com=shopcart&ctr=shopcart&act=view&view=right_box_quickview",
            success:function(html){
                var x=JSON.parse(html);
                var quick_shopcart = $("#shopcart_right_box #cart_summary_box");
                $("#cart_summary_box").html(x.html);
                var oldms=$("#right_cart_message").html();
                $("#right_cart_message").html(ms);
                $("#shopcart_count").html(x.count);
                $(quick_shopcart).fadeIn();

                setTimeout(function(mss){
                        if($(quick_shopcart).css("display")=='block'){
                            $(quick_shopcart).fadeOut();
                            setTimeout(function(){
                                $("#right_cart_message").html(mss)
                            },200);
                        }
                    },3000,oldms);
            }
    });
}
function addAndGo(objectid, object,quantity,buttonID){
    var qty="1";
    if(quantity!=undefined){
        qty=$("#"+quantity).attr("value");
    }
    if(buttonID!=undefined){
        $("#"+buttonID+" > input").attr('disabled','disabled');
    }
    $("#addtocart").submit();
}
// Support formatting number
/*!
* accounting.js v0.4.2, copyright 2014 Open Exchange Rates, MIT license, http://openexchangerates.github.io/accounting.js
*/
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=c.format=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);

//////////////////////