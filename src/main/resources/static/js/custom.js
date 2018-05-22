
function taskClaimer(_l_id, _act_id, _cat) {

    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: '/loan/task/claim?loanId=' + _l_id + '&taskId=' + _act_id + '&ctg=' + _cat,
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            $("#claimAlart").text('');
            $("#claimAlartErr").val('');
            var message = "<ul style='list-style-type:disc'><li>Claimed</li></ul>";
            $("#claimAlart").append(message);
            $("#claimAlartErr").modal("toggle");
            //alert("claim done Ok");
            //location.href="/home";
            $('#inbox' + _l_id).remove();
            $('#link' + _l_id).removeClass('disable-link');

        },
        error: function (jqXHR, exception) {
            showUnivarsalErrorMsg(jqXHR, exception);
        }
    });


}

$(document).ready(
    function () {


        indTaskCount();


        $(".losDatepicker").datepicker({
            dateFormat: "dd/mm/yy",
            //clickInput: true,
            autoclose: true,
        });
        $('.losDatepickerBtn').click(function () {

            var id = $(this).attr('data-datebtnlos');

            $("#" + id).focus();
        });

        /*$("#tablescrollFixed").tableHeadFixer({"head" : false, "left" : 2});*/

        // var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
        var pgurl = window.location.pathname;
        // var pgurl = = new RegExp(url.replace(/\/$/,'') + "$");
        $("ul.sidebar-menu ul li a").each(function () {
            //console.log($(this));
            //console.log(pgurl);

            //console.log($(this).closest("li.treeview"));
            if ($(this).attr("href") == pgurl || $(this).attr("href") == '') {
                $(this).parent("li").addClass("active");
                $(this).closest("li.treeview").addClass("active");
            }

        });


        $('#fu_submit_btn').click(
            function () {


                var followUpDetails = $('#fu_details').val();
                var promisedDate = $('#fu_date').val();
                var remarks = $('#fu_remarks').val();
                var loanId = $('#fu_loanId').val();
                var actTaskId = $('#fu_taskId').val();


                var FollowUpEntity = {
                    'followUpDetails': followUpDetails,
                    'promisedDate': promisedDate,
                    'remarks': remarks,
                    'loanId': loanId,
                    'actTaskId': actTaskId
                }

                var JsonObject = JSON.stringify(FollowUpEntity);

                var token = $("meta[name='_csrf']").attr("content");
                var header = $("meta[name='_csrf_header']").attr("content");

                $.ajax({
                    url: '/loan/workflow/followup',
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JsonObject,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader(header, token);
                    },
                    success: function (data) {

                        alert("save done");
                        var row = "<tr><td>" + data.followUpDetails
                            + "</td><td>" + data.promisedDate
                            + "</td><td>" + data.remarks
                            + "</td><td>" + data.createdDate
                            + "</td><td>" + data.createdBy
                            + "</td></tr>";
                        $('#fu_null').remove();
                        $('#fu_table tbody').append(row);


                    },
                    error: function (jqXHR, exception) {
                        showUnivarsalErrorMsg(jqXHR, exception);
                    }
                });
            });


        $('#fu_dec_submit').click(function () {
            var actTaskId = $('#fu_act_id').val();
            var followUpId = $('#fu_id').val();
            var category = $('#fu_act_category').val();
            var decision = $('#fu_dec_id').val();
            var comment = $('#fu_com_id').val();

            var object = {
                'actTaskId': actTaskId,
                'followUpId': followUpId,
                'category': category,
                'decision': decision,
                'comment': comment
            }

            var JsonObject = JSON.stringify(object);

            var token = $("meta[name='_csrf']").attr("content");
            var header = $("meta[name='_csrf_header']").attr("content");

            $.ajax({
                url: '/loan/workflow/followup/decision',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JsonObject,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data) {

                    alert("save successfull");
                    location.href = "/home";


                },
                error: function (jqXHR, exception) {
                    showUnivarsalErrorMsg(jqXHR, exception);
                }
            });

        });

        $('#cpass').keyup(function () {
            var newPass = $('npass').val();
            var cPass = $('#cpass').val();

            if (newPass == cpass) {
                $('#cpassLabel').text('password match');
                $('#cpassLabel').removeClass('hide');
            } else {
                $('#cpassLabel').text('password miss match');
                $('#cpassLabel').removeClass('hide');
            }

            /*if(newPass!=''){
             $('#npassLabel').addClass('hide');
             if(newPass.length==cPass.length){
             if(cPass===newPass){
             $('#cpassLabel').text('password match');
             $('#cpassLabel').removeClass('hide');
             }
             }
             if(cPass!=newPass){
             $('#cpassLabel').text('password missmatch');
             $('#cpassLabel').removeClass('hide');
             }

             }else{

             $('#npassLabel').text('New password field can\'t be blank');
             $('#npassLabel').removeClass('hide');
             }*/
        });


        $('#opass').focusout(function () {

            var token = $("meta[name='_csrf']").attr("content");
            var header = $("meta[name='_csrf_header']").attr("content");
            var pass = $('#opass').val();
            $.ajax({
                url: '/user/pass/check',
                type: 'GET',
                data: {'pass': pass},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data) {
                    if (data) {
                        $('#opassLabel').text("password ok");
                        $('#psbtn').removeClass('hide');
                    } else {
                        $('#opassLabel').text("password incorrect");
                        $('#psbtn').addClass('hide');
                    }
                    $('#opassLabel').removeClass('hide');

                },
                error: function (jqXHR, exception) {
                    showUnivarsalErrorMsg(jqXHR, exception);
                }
            });
        });

        //find candidate by task
        $('#jTask').change(function () {

            var token = $("meta[name='_csrf']").attr("content");
            var header = $("meta[name='_csrf_header']").attr("content");

            var lid = $('#lbl-loanId').text();
            var tid = $(this).val();

            if (tid != 0) {
                $.ajax({
                    url: '/loan/jump/candidate',
                    type: 'GET',
                    /*contentType : 'application/json; charset=utf-8',
                     dataType : 'json',*/
                    data: {'lid': lid, 'tid': tid.split("-")[0]},
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader(header, token);
                    },
                    success: function (data) {

                        $('#jt_candidate').find('option').remove();
                        for (i = 0; i < data.length; i++) {
                            $('#jt_candidate').append($('<option>',
                                {
                                    selected: 'selected',
                                    value: data[i].userId,
                                    text: data[i].fullName
                                }));
                        }


                    },
                    error: function (jqXHR, exception) {
                        showUnivarsalErrorMsg(jqXHR, exception);
                    }
                });
            } else {
                $('#jt_candidate').find('option').remove();
            }


        });


        //
        $('#jt_submit').click(function () {

            var pid = $('#lbl-actTaskId').text();
            var optString = $('#jTask').val();
            var landZone = optString.split('-')[1];
            var candidate = $('#jt_candidate').val();

            var token = $("meta[name='_csrf']").attr("content");
            var header = $("meta[name='_csrf_header']").attr("content");

            $.ajax({
                url: '/loan/task/jumpto',
                type: 'GET',
                /*contentType : 'application/json; charset=utf-8',
                 dataType : 'json',*/
                data: {'pid': pid, 'lz': landZone, 'cndt': candidate},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data) {

                    alert("done");
                    location.href = "/home";
                    //$('#'+_l_id).remove();

                },
                error: function (jqXHR, exception) {
                    showUnivarsalErrorMsg(jqXHR, exception);
                }
            });


        });


        // when .modal-wide opened, set content-body height based on browser height; 200 is appx height of modal padding, modal title and button bar
        //FAQ
        $("#faqRequest").click(function () {
            var taskcode = $("#cat").text();
            var obj = {'code': taskcode};
            /*if(taskcode!=null){
             req_for_faq_task_instruction("/faq/instruction/task",obj,"GET");
             }
             */
            req_for_faq_list("/faq/rest/list", "GET", obj);
        });


        // FAQ search sugestion
        $('#faq-search-box').keyup(function () {
            var url = '/faq/search?q=';
            var value = $('#faq-search-box').val();
            //addToAvailableTags(this,url);
            req_for_faq_list(url + value, "GET");
        });

        //FAQ search button click
        $('#faq-search-submit').click(function () {
            var value = $('#faq-search-box').val();
            req_for_faq_list("/faq/search?q=" + value, "GET");
        });


        $('.radioBtn a').on('click', function () {
            var sel = $(this).data('title');
            var tog = $(this).data('toggle');
            $('#' + tog).prop('value', sel);

            $('input[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
            $('input[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
        });
        });



function indTaskCount() {
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $.ajax({
        url: '/task/individualcount',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            for (var key=0; key < data.length; key++){
                console.log(data[key][0] +" "+ data[key][1]);
                $("#span-" + data[key][0]).text(data[key][1]);
                $("#span-" + data[key][0]).attr("title", data[key][1] + " new task");
            }
        },
        error:function(){
            console.log('Error');
        }
    });
}




function followUpDecision(id) {
    $('#fu_id').val(id);
}


function deletePhase(id, r) {
    if (confirm('Want to delete?')) {
        $.ajax({
            type: "GET",
            url: "/phase/delete/" + id,
            success: function (data) {
                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("datatable-responsive").deleteRow(i);
            },
            error: function (jqXHR, exception) {
                showUnivarsalErrorMsg(jqXHR, exception);
            }
        });

    }
}


//for chaking url param
function urlParamsCheck () {
    var result = {};
    var params = window.location.search.split(/\?|\&/);

    params.forEach( function(it) {
        if (it) {
            var param = it.split("=");
            result[param[0]] = param[1];
        }
    });

    return result;
}

//Show status Error
function showUnivarsalErrorMsg(jqXHR, exception) {
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
    } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
    } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
    } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
    } else if (exception === 'timeout') {
        msg = 'Time out error.';
    } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
    } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
    }

    alert(msg);
}
$(".losInbox").click(function () {

    $("ul#inboxtreeview").toggle("slow", function () {
        // Animation complete.
    });
});

//dider


var availableTags = [];

function addToAvailableTags(e, urlWithParam) {
    availableTags = [];
    console.log(e.id + " = " + e.value);
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $.ajax({
        url: urlWithParam + e.value,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            for (var key = 0; key < data.length; key++) {
                console.log(data[key]);
                availableTags.push(data[key]);
            }

            $("#" + e.id).autocomplete({
                source: availableTags
            });
        },
        error: function (data) {
            showUnivarsalErrorMsg(jqXHR, exception)
            console.log("Error");
        }
    });

};

/*
 * Asad
 * Modified Date(3/5/17)
 * for city list according to selected country 
 */
//<![CDATA[
$("#countryId").change(function () {
    $("#AddressEntity\\.CityEntity\\.cityId").empty();
    //alert( $("#countryId ").val() );
    var counId = $("#countryId ").val();
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $.ajax({
        url: '/address/cityList?countryId=' + counId,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            console.log(data.length);
            for (var key = 0; key < data.length; key++) {
                $("#AddressEntity\\.CityEntity\\.cityId").append(
                    "<option value='" + data[key][0] + "'>" + data[key][1] + "</option>"
                );

            }
        }
    });
});

//]]>


/*Asad
 * End 
 * Modified Date(3/5/17)
 * for city list according to selected country 
 */

//zunied ajax delete

function deleteRowOfTable(id, urlp, r) {
    console.log(urlp + id);
    if (confirm('Want to delete?')) {
        $.ajax({
            type: "GET",
            url: urlp + id,
            success: function (data) {
                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("datatable-responsive").deleteRow(i);
            },
            error: function (jqXHR, exception) {
                showUnivarsalErrorMsg(jqXHR, exception);
            }
        });

    }
}


function defineSinUrl(url, docId) {
    $("#signUrl").val(url);
    $("#docId").val(docId);
    var u = $("#signUrl").val();
    console.log("u: " + u);
}

function signDocument() {
    $("#spinner").modal(
        {
            toggle: "toggle",
            backdrop: "static",
            keyboard: false
        });

    var url = $("#signUrl").val();
    var docId = $("#docId").val();
    var loanId = $('#lbl-loanId').text();
    var actCategory = $('#lbl-actCategory').text();
    // var actTaskId = $('#lbl-actTaskId').text();
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    var formData = new FormData();
    var file = $("#signUp")[0].files[0];
    formData.append("multipartFile", file);
    $.ajax({
        url: url + '?loanId=' + loanId + "&ctgr=" + actCategory + "&docId=" + docId,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            $("#spinner").modal('hide');
//                    $("#specialAlert").text("File Successfully Uploaded");
//                    $("#exampleModalLong").modal("toggle");
            window.location.reload(true);
        },
        error: function (err) {
            $("#spinner").modal('hide');
            var message = "<ul style='list-style-type:disc'><li>Upload Error</li></ul>";
            $("#specialAlert").addClass("errorDiv");
            $("#specialAlert").append(message);
            $("#exampleModalLong").modal("toggle");
            console.log(err);

        }
    });

}

//Generic function 
//@param URL and data to be send
// call this function only when you don't need any success message to show
function no_success_msg_call(url, obj, req_method) {


//zunaid

    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: url,
        data: obj,
        type: req_method,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {

        },
        error: function (jqXHR, exception) {
            showUnivarsalErrorMsg(jqXHR, exception);

        }
    });

}

function click_for_hit_count(id) {

    var combId = id;
    var faqId = combId.split('-')[1];
    var obj = {'faqId': faqId};
    no_success_msg_call("/faq/counthit", obj, "GET");

}

function req_for_faq_list(url, req_method, obj) {
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: url,
        data: obj,
        type: req_method,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            show_faq_in_modal(data.genFaq);
            show_taskbase_faq_in_modal(data.tbFaq);
        },
        error: function (jqXHR, exception) {
            showUnivarsalErrorMsg(jqXHR, exception);
        }
    });
}

function req_for_faq_task_instruction(url, value, req_method) {
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: url,
        type: req_method,
        data: value,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            if (data != null) {
                $('#faq-instruction').empty();
                $('#faq-instruction').append("<div><div class='title'><h3>" + data.title + "</h3></div><div>" + data.description + "</div></div>");

                $('#faq-image').empty()
                var images = data.urls;
                for (var i = 0; i < images.length; i++) {
                    $('#faq-image').append("<img src= " + getBaseUrl() + images[i] + "/>");
                }
            }
        },
        error: function (jqXHR, exception) {
            showUnivarsalErrorMsg(jqXHR, exception);
        }
    });
}

function getBaseUrl() {
    var base = window.location.href.match(/^.*\//);
    alert(base);
    return base;
}

function show_faq_in_modal(data) {
    $('#faqContainer').empty();
    $('#faq-image').empty()
    $('#faq-instruction').empty();
    for (var i = 0; i < data.length; i++) {


        var accDiv = "<div class='panel-group'>" +
        		"<div class='panel panel-default'>" +
        		"<div class='panel-heading'>" +
        		"<h4 class='panel-title'>" +
        		"<a onclick='click_for_hit_count(this.id)' class='faq-fake-class' id=\'" + 
        		"faqq-" + data[i].faqId + 
        		"\' data-toggle='collapse' href='#faq-" + 
        		data[i].faqId + "'>" +
        		data[i].question + 
        		"</a></h4></div><div id=\'" + 
        		"faq-" +
        		data[i].faqId +
        		"' class='panel-collapse collapse'><div class='panel-body'>" 
        		+ data[i].answer +
        		"</div></div></div></div>";

        $('#faqContainer').append(accDiv);

        $('#faqAccordion').accordion("refresh");
    }
}

function show_taskbase_faq_in_modal(data) {
    if (data != null) {
        $('#faq-instruction').empty();
        $('#faq-instruction').append("<div><div class='title'><h3>" + data.title + "</h3></div><div>" + data.description + "</div></div>");

        $('#faq-image').empty()
        var images = data.urls;


        $.each(images, function (i, src) {
            //var $li = $('<li class="loading">').appendTo($list);

            $('<img>').appendTo('#faq-image').one('load', function () {
                //$li.removeClass('loading');
            }).attr('src', src);
        });


        /*for(var i=0;i<images.length;i++){
         $('<img>').appendTo('#faq-image').one('load',function(){

         }).attr('src',src)
         $('#faq-image').append("<img src= '"+images[i]+"' />");
         }*/
    }
}
$(".closeAlert").click(function () {
    $("div.alert-danger").hide();

});
$("#loanType").change(
    function () {
        var loanTypeId = $(this).val();
        var loanTypeInterest = $("#l" + loanTypeId).text();
        if (loanTypeId == 0) {
            $("#interestRate").empty();
        } else {
            $("#interestRate").val(loanTypeInterest);
        }
    });

/*$('#price').number(true, 2);*/

// Get the value of the number for the demo.
$('#price').on('keyup', function () {

    var mystring = $('#price').val();
    var num = parseFloat(mystring.replace(/\s/g, "").replace(",", ""));
    $('#realloanamount').val(num);

});

// //zunaid
/* $(document).ready(function () {
    $("#queryTypeForm").validate({
         rules: {
             "name": {
                 required: true,
                 minlength: 5
             }
            "email": {
                required: true,
                email: true
            }
         },
         messages: {
             "name": {
                 required: "Please, enter a name"

             }
            "email": {
                required: "Please, enter an email",
                email: "Email is invalid"
            }
         },
         submitHandler: function (form) { // for demo
             alert('valid form submitted'); // for demo
             return false; // for demo
         }
     });

 });*/
$("#widget-1").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    
    
    onStepChanged: function (event, currentIndex, priorIndex)
    {
         var noOfBorrower=$("#noOfBorrower").val();
        if(noOfBorrower > 0 && currentIndex == 4){
        	for(var i=1;i<=noOfBorrower;i++){
        		$("#docCustomerId"+i).val($("#customerId"+i).val());
        		
        	}
        } 
        if(noOfBorrower > 0 && currentIndex == 3){
        	for(var i=1;i<=noOfBorrower;i++){
        		$("#customerName"+i).val($("#fullName"+i).val());
        		
        	}
        } 
        if(noOfBorrower > 0 && currentIndex == 3){
        	for(var i=1;i<=noOfBorrower;i++){
        		$("#customerNames"+i).val($("#fullName"+i).val());
        		
        	}
        }
        
        },
        onFinished:function (event, currentIndex) {
        	$(location).attr('href', $("#losPreview").attr('href'))
        }
        

});

function removeRow(t) {
    t.parentNode.parentNode.remove();
}

var i = 1;
function addRow(elementName) {
//    alert(elementName);
    $("#" + elementName + " tr:last").clone().removeAttr('style').find("input").each(function () {
        $(this).attr('value', '');
    }).end().appendTo("#exp_info");
    i++;
}

$("#loanType").change(
		function() {
			var loanTypeId = $(this).val();
			var loanTypeInterest=$("#l"+loanTypeId).text();
			if (loanTypeId == 0) {
				$("#interestRate").empty();
			} else {
				$("#interestRate").val(loanTypeInterest);
				
			}
		});


$(function(){
	// Set up the number formatting.
	

	
	/*$('#price').number( true, 2 );*/
	//$('#realloanamount').number( true, 2 );

	// Get the value of the number for the demo.
	 $('#price').on('keyup',function(){
		
		var mystring =  $('#price').val();
		var num = parseFloat(mystring.replace(/\s/g, "").replace(",", ""));
		$('#realloanamount').val(num);
		
	}); 
	
	
	
});




$(function(){
	
	 $('#quantity').on('keyup',function(){
		
		var mystring =  $('#quantity').val();
		var num = delimiter_eliminator(mystring);
		$('#realloanamount').val(num);
		
	}); 			
	
});

$('.datepicker').datepicker({
	autoclose : true
})
$(".addDate").click(function(){
	$('.datepicker').datepicker({
		autoclose : true
	})
	
});


$(document).ready(function() {
	var tbody = $("#remote-pending-list");
	var count=0;
	
		$.ajax({
			url: '/client/potential-client/list',
			type: 'GET',
		})
		.done(function(data) {
			console.log("Pending List Size : "+data.length);
			var table = tbody.closest('table').DataTable();
			//remove all row from table
			table.rows().remove().draw();
			
			
			$.each(data, function(i, val) {
				 	table.row.add([i+1,val.code,val.name,val.branch_name,val.loanType,val.amount,val.phone,val.address,"<a class='btn pull-right' href='/client/req/accept?id="+val.id+"&src="+val.source+"'><i class='fa fa-check'></i></a>"]);
				 	count=count+1;
				 }
			
			);
			
			$("#eoi-count").text(count);
			//repopulate the table
			table.draw();
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	
});



  /*  });*/


