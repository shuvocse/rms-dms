
function fetchIntroducer() {
	
   
    var bankAcc = $("#bankAccIntroducer").val();
    var loanId =$("#LoanId").val();
    var customerCode = $("#customerCodeIntro").val();
    //console.log("customerCode: " + customerCode);
    //console.log("loanId: " + loanId);

    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: '/fetchfromcbs?bankAcc=' + bankAcc + '&customerCode=' + customerCode,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        // data: JsonObject,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
        	console.log(data);
            if(data!=null) {
                $('#customerId').val(data.customerId);
                $('#customerCodeIntro').val(data.customerCode);

                //Basic Personal information
                $('#introducerFullName').val(data.fullName);
                $('#introducerName').val(data.nickName);
                $('#introducerdob').val(data.dob);
                $('#introducerNID').val(data.nid);
                $('#introducerTin').val(data.tin);
                $('#introducerGender').val(data.gender);
                $('#introducerEduLevel').val(data.educationLevel);
                $('#introducerMaritalStatus').val(data.maritalStatus);
                $('#introducerChildNo').val(data.noOfChildren);
                $('#introducerPassNo').val(data.passportNo);
                $('#introducerPassport').val(data.passportExpDate);
                $('#introducerCarOwnership').val(data.carOwnership);
                $('#introducerdLExDate').val(data.drvLicExpDate);
                $('#introducerDlNo').val(data.drvLicNo);
                $('#introducerResidentialstatus').val(data.residentialStatus);

                //Personal Present Address
                
                $('#introducerprline1').val(data.prsntline1);
                $('#introducerprline2').val(data.prsntline2);
                $('#introducerprpostcode').val(data.prsntpostCode);
                $('#introducerprcoutnry').val(data.prsntCountryName);
                $('#introducerprcity').val(data.prsntCityName);
                $('#introducerprlivingperiodYear').val(data.prsntnoOfYear);
                $('#introducerprlivingperiodMonth').val(data.prsntnoOfMonth);
              

                //Personal permanent Address
                $('#introducerpmline1').val(data.prmtline1);
                $('#introducerpmline2').val(data.prmtline2);
                $('#introducerpmpostcode').val(data.prmtpostCode);
                $('#introducerpmcoutnry').val(data.prmtCountryName);
                $('#introducerpmcity').val(data.prmtCityName);
                $('#introducerpmlivingperiodYear').val(data.prmtnoOfYear);
                $('#introducerpmlivingperiodMonth').val(data.prmtnoOfMonth);
               
                //$('#isFetch').val(1);
            }
        }
    });
}
var introducerRowIndex=1;
var i=1;
function addIntroducerData(){
	if (getRequiredFieldIdByLabelUsingClass('introInfo')) {
	var introducerId= $("#introducerId").val();
	var loanIntroducerId = $('#LoanId').val();
	var customerCode = $("#customerCodeIntro").val();
	var customerId= $("#customerId").val();
	var is_editIntroducerInfo = $('#is_editIntroducer').text();
	var rowIndexIntroducerInfo = $('#rowIndexIntroducer').text();
	var relationshipwithBorrower= $('#introducerRelationship').val();
	/*
	 * important Data End
	 */
	var introfullName = $('#introducerFullName').val();
    var intronickName = $('#introducerName' ).val();
    var introgrbirthday=$('#introducerdob').val();
    var introDLExDate=$('#introducerdLExDate').val();
    var introPassExDate=$('#introducerPassport').val();
    
    var intronid = $('#introducerNID').val();
    var introtin = $('#introducerTin').val();
    var introgender = $('#introducerGender').val();
    var introeducationLevel = $('#introducerEduLevel').val();
    var intromaritalStatus = $('#introducerMaritalStatus').val();
    var intronoOfChildren = $('#introducerChildNo').val();
    var intropassportNo = $('#introducerPassNo').val();
    
    var introcarOwnership = $('#introducerCarOwnership').val();
    var introdrvLicNo = $('#introducerDlNo').val();
   
    var introresidentialStatus = $('#introducerResidentialstatus').val();
    
	var introRelationship=$('#introducerRelationship').val();

    var introprsntId = $('#guarantorPresentId').val();
    var introprsntline1 = $('#introducerprline1' ).val();
    var introprsntline2 = $('#introducerprline2' ).val();
    var introprsntcountryId = $('#introducerprcoutnry').val();
    var introprsntcityId = $('#introducerprcity').val();
    var introprsntpostCode = $('#introducerprpostcode').val(); 
    var introprsntnoOfYear = $('#introducerprlivingperiodYear' ).val();
    var introprsntnoOfMonth = $('#introducerprlivingperiodMonth').val();
    
  //Personal permanent Address
    var introprmtId = $('#guarantorPermanentId').val();
    var introprmtline1 = $('#introducerpmline1').val();
    var introprmtline2 = $('#introducerpmline2').val();
    var introprmtcountryId = $('#introducerpmcoutnry').val();
    var introprmtcityId = $('#introducerpmcity').val();
    var introprmtpostCode = $('#introducerpmpostcode').val();
    var introprmtnoOfYear = $('#introducerpmlivingperiodYear').val();
    var introprmtnoOfMonth = $('#introducerpmlivingperiodMonth').val();
    
   var introducerFormData = {
			'introducerId':introducerId,
			'loanId': loanIntroducerId,
			'introducerRelationshipWithBorrower': relationshipwithBorrower,
            'customerCode': customerCode,
            'customerId':customerId,
            'enabled':true
			};
	
	
	console.log(introducerFormData);
	var JsonObjectForIntroducer = JSON.stringify(introducerFormData);
	var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
	

	$.ajax({
        url: '/introducer/create',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JsonObjectForIntroducer,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                header, token);
        },

        success: function (data) {
         	$('#modal-branchLevelComments_info').modal('hide'); 
            console.log(data);
            var successfulMessage='<div class=" alert alert-success alert-dismissable">'+
        	'<label class="grtext">File Successfully saved</label>'+
        	'<a href="#" class="close taskClose" data-dismiss="alert" aria-label="close">x</a></div>';
        
        $ ("#IntroducerSuccessfulMessage").append(successfulMessage);  
        if(is_editIntroducerInfo==0){
        var newIntroducerRow = '<tr>' +
            '<td><label id="introducerId'+ introducerRowIndex + '"style="display: none">' + data.introducerId + '</label>' +
            '<label id="customerCodeIntro' +introducerRowIndex + '">' + customerCode  + '</label></td>' +
            '<td><label id="introducerRelationship' +introducerRowIndex + '">' + introRelationship + '</label>' +
            '<label id="introducerFullName' +introducerRowIndex + '"style="display: none">'+ introfullName +'</label>' +
            '<label id="introducerName' +introducerRowIndex + '"style="display: none">'+ intronickName +'</label>' +
            '<label id="customerId' +introducerRowIndex + '"style="display: none">'+ customerId +'</label>' +
            '<label id="introducerdob' +introducerRowIndex + '"style="display: none">'+ introgrbirthday +'</label>' +
            '<label id="introducerdLExDate' +introducerRowIndex + '"style="display: none">'+ introDLExDate +'</label>' +
            '<label id="introducerPassport' +introducerRowIndex + '"style="display: none">'+ introPassExDate +'</label>' +
            '<label id="introducerNID' +introducerRowIndex + '"style="display: none">'+ intronid +'</label>' +
            '<label id="introducerTin' +introducerRowIndex + '"style="display: none">'+ introtin +'</label>' +
            '<label id="introducerGender' +introducerRowIndex + '"style="display: none">'+ introgender +'</label>' +
            '<label id="introducerEduLevel' +introducerRowIndex + '"style="display: none">'+ introeducationLevel +'</label>' +
            '<label id="introducerMaritalStatus' +introducerRowIndex + '"style="display: none">'+ intromaritalStatus +'</label>' +
            '<label id="introducerChildNo' +introducerRowIndex + '"style="display: none">'+ intronoOfChildren +'</label>' +
            '<label id="introducerPassNo' +introducerRowIndex + '"style="display: none">'+ intropassportNo +'</label>' +
            '<label id="introducerCarOwnership' +introducerRowIndex + '"style="display: none">'+ introcarOwnership +'</label>' +
            '<label id="introducerDlNo' +introducerRowIndex + '"style="display: none">'+ introdrvLicNo +'</label>' +
            '<label id="introducerResidentialstatus' +introducerRowIndex + '"style="display: none">'+ introresidentialStatus +'</label>' +
            '<label id="introducerprline1' +introducerRowIndex + '"style="display: none">'+ introprsntline1 +'</label>' +
            '<label id="introducerprline2' +introducerRowIndex + '"style="display: none">'+ introprsntline2 +'</label>' +
            '<label id="introducerprcoutnry' +introducerRowIndex + '"style="display: none">'+ introprsntcountryId +'</label>' +
            '<label id="introducerprcity' +introducerRowIndex + '"style="display: none">'+ introprsntcityId +'</label>' +
            '<label id="introducerprpostcode' +introducerRowIndex + '"style="display: none">'+ introprsntpostCode +'</label>' +
            '<label id="introducerprlivingperiodYear' +introducerRowIndex + '"style="display: none">'+ introprsntnoOfYear +'</label>' +
            '<label id="introducerprlivingperiodMonth' +introducerRowIndex + '"style="display: none">'+ introprsntnoOfMonth +'</label>' +
            '<label id="introducerpmline1' +introducerRowIndex + '"style="display: none">'+ introprmtline1 +'</label>' +
            '<label id="introducerpmline2' +introducerRowIndex + '"style="display: none">'+ introprmtline2 +'</label>' +
            '<label id="introducerpmcoutnry' +introducerRowIndex + '"style="display: none">'+ introprmtcountryId +'</label>' +
            '<label id="introducerpmcity' +introducerRowIndex + '"style="display: none">'+ introprmtcityId +'</label>' +
            '<label id="introducerpmpostcode' +introducerRowIndex + '"style="display: none">'+ introprmtpostCode +'</label>' +
            '<label id="introducerpmlivingperiodYear' +introducerRowIndex + '"style="display: none">'+ introprmtnoOfYear +'</label>' +
            '<label id="introducerpmlivingperiodMonth' +introducerRowIndex + '"style="display: none">'+ introprmtnoOfMonth +'</label>' +
            '<label id="LoanId' +introducerRowIndex + '"style="display: none">'+ loanIntroducerId +'</label>' +
            '<td><a href="#" onclick="editIntroducerRow(this,' +introducerRowIndex + ')" data-toggle="modal" data-target="#modal-branchLevelComments_info"><i class="fa fa-pencil" ></i></a>' +
            '<a href="#" onclick="removeIntroducerRow(this,' +introducerRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
            '</tr>';
            $ ("#branchLevelComments_info").append(newIntroducerRow);  
            introducerRowIndex++;
        }else{
        	
        $('#introducerId' + rowIndexIntroducerInfo).text(data.introducerId); 
        $('#LoanId' + rowIndexIntroducerInfo).text(loanIntroducerId); 
       	$('#introducerFullName' + rowIndexIntroducerInfo).text(introfullName); 
       	$('#introducerName' + rowIndexIntroducerInfo).text(intronickName);
       	$('#introducerdob' + rowIndexIntroducerInfo).text(introgrbirthday); 
       	$('#introducerdLExDate' + rowIndexIntroducerInfo).text(introDLExDate); 
       	$('#introducerPassport' + rowIndexIntroducerInfo).text(introPassExDate); 
       	$('#introducerNID' + rowIndexIntroducerInfo).text(intronid); 
       	$('#introducerTin' + rowIndexIntroducerInfo).text(introtin); 
       	$('#introducerGender' + rowIndexIntroducerInfo).text(introgender); 
       	$('#introducerEduLevel' + rowIndexIntroducerInfo).text(introeducationLevel); 
       	$('#introducerMaritalStatus' + rowIndexIntroducerInfo).text(intromaritalStatus); 
       	$('#introducerChildNo' + rowIndexIntroducerInfo).text(intronoOfChildren); 
       	$('#introducerPassNo' + rowIndexIntroducerInfo).text(intropassportNo); 
       	$('#introducerCarOwnership' + rowIndexIntroducerInfo).text(introcarOwnership); 
       	$('#introducerDlNo' + rowIndexIntroducerInfo).text(introdrvLicNo); 
       	$('#introducerResidentialstatus' + rowIndexIntroducerInfo).text(introresidentialStatus); 
       	$('#introducerRelationship' + rowIndexIntroducerInfo).text(introRelationship); 
       	$('#introducerprline1' + rowIndexIntroducerInfo).text(introprsntline1); 
       	$('#introducerprline2' + rowIndexIntroducerInfo).text(introprsntline2); 
       	$('#introducerprcoutnry' + rowIndexIntroducerInfo).text(introprsntcountryId); 
       	$('#introducerprcity' + rowIndexIntroducerInfo).text(introprsntcityId); 
       	$('#introducerprpostcode' + rowIndexIntroducerInfo).text(introprsntpostCode); 
       	$('#introducerprlivingperiodYear' + rowIndexIntroducerInfo).text(introprsntnoOfYear); 
       	$('#introducerprlivingperiodMonth' + rowIndexIntroducerInfo).text(introprsntnoOfMonth); 
       	$('#introducerpmline1' + rowIndexIntroducerInfo).text(introprmtline1); 
       	$('#introducerpmline2' + rowIndexIntroducerInfo).text(introprmtline2); 
       	$('#introducerpmcoutnry' + rowIndexIntroducerInfo).text(introprmtcountryId); 
       	$('#introducerpmcity' + rowIndexIntroducerInfo).text(introprmtcityId); 
       	$('#introducerpmpostcode' + rowIndexIntroducerInfo).text(introprmtpostCode);
       	$('#introducerpmlivingperiodYear' + rowIndexIntroducerInfo).text(introprmtnoOfYear);
       	$('#introducerpmlivingperiodMonth' + rowIndexIntroducerInfo).text(introprmtnoOfMonth);
       	$('#customerCodeIntro' + rowIndexIntroducerInfo).text(customerCode);
       	$('#customerId' + rowIndexIntroducerInfo).text(customerId);
       
       	
        }
        resetIntroducerInfo();
        $('#bintroducer').attr("data-dismiss","modal");
        
    },
    error: function (err) {
        alert(err);
    }
});
}else{
	$('#modal-branchLevelComments_info').animate({ scrollTop: 0 }, 'slow');
}
};

function resetIntroducerInfo(){
	removeErrorMessage('introInfo');
$('#introducerFullName').val('');
$('#introducerName').val('');
$('#introducerdob').val('');
$('#introducerdLExDate').val('');
$('#introducerPassport').val('');
$('#introducerNID').val('');
$('#introducerTin').val('');
$('#introducerGender').val('');
$('#introducerEduLevel').val('');
$('#introducerMaritalStatus').val('');
$('#introducerChildNo').val('');
$('#introducerPassNo').val('');
$('#introducerCarOwnership').val('');
$('#introducerDlNo').val('');
$('#introducerResidentialstatus').val('');
$('#introducerprline1').val('');
$('#introducerprline2').val('');
$('#introducerprcoutnry').val('');
$('#introducerprcity').val('');
$('#introducerprpostcode').val('');
$('#introducerprlivingperiodYear').val('');
$('#introducerprlivingperiodMonth').val('');
$('#introducerpmline1').val('');
$('#introducerpmline2').val('');
$('#introducerpmcoutnry').val('');
$('#introducerpmcity').val('');
$('#introducerpmpostcode').val('');
$('#introducerpmlivingperiodYear').val('');
$('#introducerpmlivingperiodMonth').val('');
$('#customerCodeIntro').val('');
$('#introducerRelationship').val('');
$ ("#is_editIntroducerInfo").text('0');
$ ("#rowIndexIntroducer").text('');


}
;

function editIntroducerRow(i, gaurantorRowIndex){
	
    console.log("introducer Id : "+ gaurantorRowIndex);
    
	var introducerId= $('#introducerId'+gaurantorRowIndex).text();
	var customerCode= $('#customerCodeIntro'+gaurantorRowIndex).text();
	console.log("Edit mode customerCode: " + customerCode);
	var intronickName = $ ("#introducerName" +gaurantorRowIndex).text();
	var introfullName = $ ("#introducerFullName" +gaurantorRowIndex).text();
	var introgrbirthday = $ ("#introducerdob" +gaurantorRowIndex).text();
	var introDLExDate = $ ("#introducerdLExDate" +gaurantorRowIndex).text();
	var introPassExDate = $ ("#introducerPassport" +gaurantorRowIndex).text();
	var intronid = $ ("#introducerNID" +gaurantorRowIndex).text();
	var introtin = $ ("#introducerTin" +gaurantorRowIndex).text();
	var introgender = $ ("#introducerGender" +gaurantorRowIndex).text();
	var introeducationLevel = $ ("#introducerEduLevel" +gaurantorRowIndex).text();
	var intromaritalStatus = $ ("#introducerMaritalStatus" +gaurantorRowIndex).text();
	var intronoOfChildren = $ ("#introducerChildNo" +gaurantorRowIndex).text();
	var intropassportNo = $ ("#introducerPassNo" +gaurantorRowIndex).text();
	var introcarOwnership = $ ("#introducerCarOwnership" +gaurantorRowIndex).text();
	var introdrvLicNo = $ ("#introducerDlNo" +gaurantorRowIndex).text();
	var introresidentialStatus = $ ("#introducerResidentialstatus" +gaurantorRowIndex).text();
	var introRelationship = $ ("#introducerRelationship" +gaurantorRowIndex).text();
	var introprsntline1 = $ ("#introducerprline1" +gaurantorRowIndex).text();
	var introprsntline2 = $ ("#introducerprline2" +gaurantorRowIndex).text();
	var introprsntcountryId = $ ("#introducerprcoutnry" +gaurantorRowIndex).text();
	var introprsntcityId = $ ("#introducerprcity" +gaurantorRowIndex).text();
	var introprsntpostCode = $ ("#introducerprpostcode" +gaurantorRowIndex).text();
	var introprsntnoOfYear = $ ("#introducerprlivingperiodYear" +gaurantorRowIndex).text();
	var introprsntnoOfMonth = $ ("#introducerprlivingperiodMonth" +gaurantorRowIndex).text();
	var introprmtline1 = $ ("#introducerpmline1" +gaurantorRowIndex).text();
	var introprmtline2 = $ ("#introducerpmline2" +gaurantorRowIndex).text();
	var introprmtcountryId = $ ("#introducerpmcoutnry" +gaurantorRowIndex).text();
	var introprmtcityId = $ ("#introducerpmcity" +gaurantorRowIndex).text();
	var introprmtpostCode = $ ("#introducerpmpostcode" +gaurantorRowIndex).text();
	var introprmtnoOfYear = $ ("#introducerpmlivingperiodYear" +gaurantorRowIndex).text();
	var introprmtnoOfMonth = $ ("#introducerpmlivingperiodMonth" +gaurantorRowIndex).text();
	

/*
 * start 
 * flood fields with value
 */
$('#introducerId').val(introducerId);
$('#introducerFullName').val(introfullName);
$('#introducerdob').val(introgrbirthday);
$('#introducerdLExDate').val(introDLExDate);
$('#introducerPassport').val(introPassExDate);
$('#introducerNID').val(intronid);
$('#introducerTin').val(introtin);
$('#introducerGender').val(introgender);
$('#introducerEduLevel').val(introeducationLevel);
$('#introducerMaritalStatus').val(intromaritalStatus);
$('#introducerChildNo').val(intronoOfChildren);
$('#introducerPassNo').val(intropassportNo);
$('#introducerCarOwnership').val(introcarOwnership);
$('#introducerDlNo').val(introdrvLicNo);
$('#introducerResidentialstatus').val(introresidentialStatus);
$('#introducerprline1').val(introprsntline1);
$('#introducerprline2').val(introprsntline2);
$('#introducerprcoutnry').val(introprsntcountryId);
$('#introducerprcity').val(introprsntcityId);
$('#introducerprpostcode').val(introprsntpostCode);
$('#introducerprlivingperiodYear').val(introprsntnoOfYear);
$('#introducerprlivingperiodMonth').val(introprsntnoOfMonth);
$('#introducerpmline1').val(introprmtline1);
$('#introducerpmline2').val(introprmtline2);
$('#introducerpmcoutnry').val(introprmtcountryId);
$('#introducerpmcity').val(introprmtcityId);
$('#introducerpmpostcode').val(introprmtpostCode);
$('#introducerpmlivingperiodYear').val(introprmtnoOfYear);
$('#introducerpmlivingperiodMonth').val(introprmtnoOfMonth);
$ ("#introducerName").val(intronickName);
$ ("#introducerRelationship").val(introRelationship);
$ ("#customerCodeIntro").val(customerCode);
$('#is_editIntroducer').text(1);
$('#rowIndexIntroducer').text(gaurantorRowIndex); 

/*
 * End 
 * flood fields with value
 */
}
;
function removeIntroducerRow(i,gaurantorRowIndex){

if (confirm('Want to delete?')) {
	
     	/*
     	 * Delete Start 
     	 * 
     	 */
     	var introducerId= $("#introducerId"+gaurantorRowIndex).text();
    	var loanIntroducerId = $('#LoanId').val();
    	var customerCode= $("#customerCodeIntro"+gaurantorRowIndex).text();
    	var customerId= $("#customerId").val();
    	var introfullName = $('#introducerFullName'+gaurantorRowIndex).text();
        var intronickName = $('#introducerName' +gaurantorRowIndex).text();
        var introgrbirthday=$('#introducerdob'+gaurantorRowIndex).text();
        var introDLExDate=$('#introducerdLExDate'+gaurantorRowIndex).text();
        var introPassExDate=$('#introducerPassport'+gaurantorRowIndex).text();
        var intronid = $('#introducerNID'+gaurantorRowIndex).text();
        var introtin = $('#introducerTin'+gaurantorRowIndex).text();
        var introgender = $('#introducerGender'+gaurantorRowIndex).text();
        var introeducationLevel = $('#introducerEduLevel'+gaurantorRowIndex).text();
        var intromaritalStatus = $('#introducerMaritalStatus'+gaurantorRowIndex).text();
        var intronoOfChildren = $('#introducerChildNo'+gaurantorRowIndex).text();
        var intropassportNo = $('#introducerPassNo'+gaurantorRowIndex).text();
        
        var introcarOwnership = $('#introducerCarOwnership'+gaurantorRowIndex).text();
        var introdrvLicNo = $('#introducerDlNo'+gaurantorRowIndex).text();
        var introresidentialStatus = $('#introducerResidentialstatus'+gaurantorRowIndex).text();
    	var introRelationship=$('#introducerRelationship'+gaurantorRowIndex).text();
        var introprsntline1 = $('#introducerprline1' +gaurantorRowIndex).text();
        var introprsntline2 = $('#introducerprline2' +gaurantorRowIndex).text();
        var introprsntcountryId = $('#introducerprcoutnry'+gaurantorRowIndex).text();
        var introprsntcityId = $('#introducerprcity'+gaurantorRowIndex).text();
        var introprsntpostCode = $('#introducerprpostcode'+gaurantorRowIndex).text(); 
        var introprsntnoOfYear = $('#introducerprlivingperiodYear'+gaurantorRowIndex).text();
        var introprsntnoOfMonth = $('#introducerprlivingperiodMonth'+gaurantorRowIndex).text();
   
        var introprmtline1 = $('#introducerpmline1'+gaurantorRowIndex).text();
        var introprmtline2 = $('#introducerpmline2'+gaurantorRowIndex).text();
        var introprmtcountryId = $('#introducerpmcoutnry'+gaurantorRowIndex).text();
        var introprmtcityId = $('#introducerpmcity'+gaurantorRowIndex).text();
        var introprmtpostCode = $('#introducerpmpostcode'+gaurantorRowIndex).text();
        var introprmtnoOfYear = $('#introducerpmlivingperiodYear'+gaurantorRowIndex).text();
        var introprmtnoOfMonth = $('#introducerpmlivingperiodMonth'+gaurantorRowIndex).text();
        
        var introducerFormData = {
    			'introducerId':introducerId,
    			'loanId': loanIntroducerId,
    			'introducerRelationshipWithBorrower': introRelationship,
                'customerCode': customerCode,
                'customerId':customerId,
                'enabled':false
    			};
     	
     	var JsonObjectForIntroducer = JSON.stringify(introducerFormData);
     	console.log("before send : "+ JsonObjectForIntroducer);
    	var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
    	
    	$.ajax({
            url: '/introducer/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObjectForIntroducer,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    header, token);
            },

           success: function (data) {
               console.log("after send: "+ data);
           	alert("Deleted");
               removeRow(i);
           }
       });
   }

}
;

//-----------------------------


