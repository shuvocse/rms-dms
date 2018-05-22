/**
 * Created by Tanmoy on 3/6/2017.
 */
var rowNum = 1;
function addcibReportRow() {
    rowNum++;
    var row = '<tr>' +
        '<td><div class="fileUpload btn-upload-img btn"><span><i class="fa fa-upload"></i>Choose File</span><input class="custom-form-control upload" id="report' + rowNum + '" name="reportDoc" type="file" onchange="previewReport(' + rowNum + ');"/></div></td>' +
        '<td id="td' + rowNum + '">' +
        '</td></tr>';
    $('#cibReportDoc').append(row);
}

function addSupportingDocumentRow() {
    rowNum++;
    var row = '<tr>' +
        '<td class="col-sm-6"><div class="fileUpload btn-upload-img btn"><span><i class="fa fa-upload"></i>Choose File</span><input class="custom-form-control upload" id="report' + rowNum + '" name="reportDoc" type="file" onchange="previewReport(' + rowNum + ');"/></div></td>' +
        '<td class="col-sm-6" id="td' + rowNum + '">' +
        '</td></tr>';
    $('#supportingDoc').append(row);
}

function previewReport(rowInd) {
    var fileType = $("#report" + rowInd)[0].files[0].type;
    var file = URL.createObjectURL($("#report" + rowInd)[0].files[0]);
    if (fileType.match(/image\//) == "image/") {
        var thumbnail = '<div id="div_' + rowInd + '" class="thumbnail"> <img style="width:100%" src="' + file + '" /> <a href="#" onclick="removeReport(' + rowInd + ');">' +
            '<i class="fa fa-trash"></i></a> </div>';
    } else if (fileType.match(/\/\pdf/) == "\/pdf") {
        var thumbnail = '<div id="div_' + rowInd + '" class="thumbnail"> <iframe style="width:100%" src="' + file + '" /> <a href="#" onclick="removeReport(' + rowInd + ');">' +
            '<i class="fa fa-trash"></i></a> </div>';
    }
    $('#td' + rowInd).append(thumbnail);
}

function removeReport(rowInd) {
    $("#report" + rowInd).val('');
    $("#div_" + rowInd).remove();
}

function showReportPreview(previewUrl, fileType) {
    $("#showPreviewReport").attr("src", "/document?dId=" + previewUrl + "&type=" + fileType);

}

function showReportPreview2(previewUrl, fileType) {
    $("#iframe").attr("src", "/document?dId=" + previewUrl + "&type=" + fileType);
    $("#idiv").show();
}

function uploadSupportingDoc() {
	 $("#spinner").modal(
             {
                 toggle: "toggle",
                 backdrop: "static",
                 keyboard: false
             });
         $("#specialAlert").removeClass("errorDiv");
         $("#specialAlert").text("");
	
    var loanId = $("#supportingDocLoanId").val();
    var actTaskId = $("#supportingDocactTaskId").val();
    var loanStatusId = $("#supportingDocloanStatusId").val();

    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    var formData = new FormData();
    formData.append("loanID", loanId);
    formData.append("actTaskId", actTaskId);
    formData.append("loanStatusId", loanStatusId);
    for (var i = 1; i <= rowNum; i++) {
        formData.append("file", $("#report" + i)[0].files[0]);
    }

    $.ajax({
        url: '/uploadfile/create',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                header, token);
        },
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            
            /*alert("File Successfully Uploaded");*/
        	$("#spinner").modal('hide');
        	alert("File Successfully Uploaded");
            window.location.reload(true);
        },
        error: function (err) {
        	 $("#spinner").modal('hide');
             var message = "<ul style='list-style-type:disc'><li>Upload Error</li></ul>";
             $("#specialAlert").addClass("errorDiv");
             $("#specialAlert").append(message);
             $("#exampleModalLong").modal("toggle");
             console.log(err);
        	//alert(err);
        }
    });
}