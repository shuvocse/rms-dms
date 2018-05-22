$(document).ready(function (){
	$("#saveTrackDetails").click(function () {
		 
		 var trackingRowIndex=$('#trackingTable tr:last').attr('id').split("trackingTabRowId_").join("");
		 trackingRowIndex=parseInt(trackingRowIndex);
		 trackingRowIndex+=1;
		 
		 var viewTrackingDetailsId=$("#viewTrackingDetailsId").val();
		 var cbsloanId= $("#odLoanId").val();
		 
		 var phone=$("#track_phone").val();
		 var name=$("#track_name").val();
		 var relation=$("#track_relation").val();
		 var comment=$("#track_comments").val();
		 var resAddress=$("#track_resAddress").val();
		 var perAddress=$("#track_perAddress").val();
		 var is_editTrakingDetails = $("#is_editTrakingDetails").text();
	     var rowIndexTrakingDetails = $("#rowIndexTrakingDetails").text();
		 
		 var trackingData={
				 'viewTrackingDetailsId' : viewTrackingDetailsId,
				 'cbsloanId' : cbsloanId,
				 'name' : name,
				 'phone' : phone,
				 'relation' : relation,
				 'comment':comment,
				 'resAddress':resAddress,
				 'perAddress':perAddress
		 };
		 
		 if(name!="" && phone!=""){

		 
		 var JsonTrackingDetails = JSON.stringify(trackingData);
		 var token = $("meta[name='_csrf']").attr("content");
	     var header = $("meta[name='_csrf_header']").attr("content");
	     $.ajax({
	            url: '/tracking-details/save',
	            type: 'POST',
	            contentType: 'application/json; charset=utf-8',
	            dataType: 'json',
	            data: JsonTrackingDetails,
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader(header, token);

	            },
	            success: function (data) {
                    $("#alertMessageCM").text('');
                    $("#CMError").val('');
                    var message = "<ul style='list-style-type:disc'><li>Successfully Saved</li></ul>";
                    $("#alertMessageCM").append(message);
                    $("#CMError").modal("toggle");

	                if (is_editTrakingDetails == 0) {
	                    var newRow = '<tr id="trackingTabRowId_' + trackingRowIndex +'">' +
	                    '<td><label id="tracking_name_' + trackingRowIndex + '">' + data.name + '</label></td>' +
                        '<td><label id="tracking_phone_' + trackingRowIndex + '">' + data.phone + '</label>' +
                        '<label id="viewTrackingDetailsId_' + trackingRowIndex + '"style="display: none">' + data.viewTrackingDetailsId + '</label>' +
                        '<td><label id="tracking_relation_' + trackingRowIndex + '">' + data.relation + '</label></td>' +
                        '<td><label id="tracking_comment_' + trackingRowIndex + '">' + data.comment + '</label></td>' +
                        '<td><label id="tracking_resAddress_' + trackingRowIndex + '">' + data.resAddress + '</label></td>' +
                        '<td><label id="tracking_perAddress_' + trackingRowIndex + '">' + data.perAddress + '</label></td>' +
                        '<td><button href="#" class="btn-success" onclick="editTrackingDetails( ' +trackingRowIndex + ' )" data-toggle="modal" data-target="#modal-tracking-details"><i class="fa fa-pencil" ></i></button>' +
                        '<button href="#" onclick="deleteTrackingDetails(this,' +trackingRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                        '</tr>';
	                    $("#trackingTable").append(newRow);

	                }else{
	                	$('#viewTrackingDetailsId_'+rowIndexTrakingDetails).text(data.viewTrackingDetailsId);
	                    $('#tracking_phone_'+rowIndexTrakingDetails).text(data.phone);
	                    $('#tracking_name_'+rowIndexTrakingDetails).text(data.name);
	                    $('#tracking_relation_'+rowIndexTrakingDetails).text(data.relation);
	                    $('#tracking_comment_'+rowIndexTrakingDetails).text(data.comment);
	                    $('#tracking_resAddress_'+rowIndexTrakingDetails).text(data.resAddress);
	                    $('#tracking_perAddress_'+rowIndexTrakingDetails).text(data.perAddress);
	                   
	                }
	                resetTrackingDetails();
	                $('#saveTrackDetails').attr("data-dismiss","modal");


	            },
	            error:function (err) {
	                alert(err);

	            }

	        });
		 }	 else{
			 alert("Please Enter valid Information ");
		 }
		 
		 });
});



function editTrackingDetails(trackingRowIndex) {


	var viewTrackingDetailsId	=		$('#viewTrackingDetailsId_'+trackingRowIndex).text();
	var name					=		$('#tracking_name_'+trackingRowIndex).text();
	var phone					=		$('#tracking_phone_'+trackingRowIndex).text();
    var relation				=		$('#tracking_relation_'+trackingRowIndex).text();
    var comment					=		$('#tracking_comment_'+trackingRowIndex).text();
    var resAddress				=		$('#tracking_resAddress_'+trackingRowIndex).text();
    var perAddress				=		$('#tracking_perAddress_'+trackingRowIndex).text();
    
    //flood Id with value
    $("#viewTrackingDetailsId").val(viewTrackingDetailsId);
	 
	  $("#track_phone").val(phone);
	  $("#track_name").val(name);
	  $("#track_relation").val(relation);
	  $("#track_comments").val(comment);
	  $("#track_resAddress").val(resAddress);
	  $("#track_perAddress").val(perAddress);
	  $("#is_editTrakingDetails").text('1');
      $("#rowIndexTrakingDetails").text(trackingRowIndex);

}

function resetTrackingDetails() {
	$("#track_phone").val('');
	  $("#track_name").val('');
	  $("#track_relation").val('');
	  $("#track_comments").val('');
	  $("#track_resAddress").val('');
	  $("#track_perAddress").val('');
	  $("#is_editTrakingDetails").text('0');
	  $("#rowIndexTrakingDetails").text('');


}
function deleteTrackingDetails(i,trackingRowIndex){
    if(confirm('Want to delete')){
    	var viewTrackingDetailsId	=		$('#viewTrackingDetailsId_'+trackingRowIndex).text();
    	var name					=		$('#tracking_name_'+trackingRowIndex).text();
    	var phone					=		$('#tracking_phone_'+trackingRowIndex).text();
        var relation				=		$('#tracking_relation_'+trackingRowIndex).text();
        var comment					=		$('#tracking_comment_'+trackingRowIndex).text();
        var resAddress				=		$('#tracking_resAddress_'+trackingRowIndex).text();
        var perAddress				=		$('#tracking_perAddress_'+trackingRowIndex).text();
        var cbsloanId				= 		$("#odLoanId").val();
        	
        var trackingDetailsData = {
        		'viewTrackingDetailsId' : viewTrackingDetailsId,
				 'cbsloanId' : cbsloanId,
				 'phone' : phone,
				 'relation' : relation,
				 'comment':comment,
				 'resAddress':resAddress,
				 'perAddress':perAddress,
				 'deleted':true
        };
        var JsonTrackingDetails = JSON.stringify(trackingDetailsData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url:  '/tracking-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonTrackingDetails,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {
                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Deleted</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
                removeRow(i);
            }
        });

    }

}

$("#btn_vtd").click(function () {
    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus'){
        console.log(" collecionSupervisorID"+collecionSupervisorID);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/trackingDetails/?cbsLoanId=' + cbsloanId,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
                console.log(data);

            }
        });
    }
    if(expandButton=='minus'){
        $('#trackingTable tr').each(function() {
            $('#trackingTable tr').removeClass('highlightfirsttablerow');
        });


    }



});