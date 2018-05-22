var isAddressSame = 0;

//Copy Same address into permanent address field
function doCopy(number) {

    //Personal Present Address global variable
	/*
	 * Asad
	 * Modified Date: {30/4/2017}
	 */
	var prsntline1;
	var prsntline2;
	var prsntpostCode;
	var prsntnoOfYear;
	var prsntnoOfMonth;
	var prsntcountryId;
	var prsntcityId;
	
	
	/*
	 * permanent Address
	 */
	
	var prmtline1;
	var prmtline2;
	var prmtpostCode;
	var prmtnoOfYear;
    var prmtnoOfMonth;
    var prmtcountryId; 
    var prmtcityId;
	/*
	 * Asad
	 * End
	 */
   

    var check = $('#check' + number).is(":checked");

    if (check) {

        

        isAddressSame = 1;
        /*
         * Asad
         * Modified Date: {30/4/2017}
         */
        prmtline1=$('#pmfn' + number).val($('#prfn' + number).val());
        prmtline2=$('#pmhpn' + number).val($('#prhpn' + number).val());
        prmtpostCode=$('#pmpc' + number).val($('#prpc' + number).val());
        prmtnoOfYear=$('#pmlivingPeriod' + number).val($('#prlivingPeriod' + number).val());
        prmtnoOfMonth= $('#pmlivingPeriodMonth' + number).val($('#prlivingPeriodMonth' + number).val());
        prmtcountryId=$('#pmroad' + number).val($('#prroad' + number).val());
        prmtcityId=$('#pmblock' + number).val($('#prblock' + number).val());
        
        /*
         * End 
         * Asad
         */
      


    } else {

        isAddressSame = 0;
        //Remove data from Personal permanent Address
        /*
         * Asad 
         * Modified Date: {30/4/2017}
         */
        prmtline1=$('#pmfn' + number).val('');
        prmtline2=$('#pmhpn' + number).val('');
        prmtpostCode=$('#pmpc' + number).val('');
        prmtnoOfYear=$('#pmlivingPeriod' + number).val('');
        prmtnoOfMonth=$('#pmlivingPeriodMonth' + number).val('');
        prmtcountryId=$('#pmroad' + number).val('');
        prmtcityId=$('#pmblock' + number).val('');
        /*
         * Asad
         * End
         */
       


    }
}

//-------Personal Info operations--------
function savePi(number) {

    if (getRequiredFieldIdByLabel('bPersonalInformation' + number)) {

        //Important data
        var caseNo = $('#caseId').val();
        var loanId = $('#LoanId').val();
        var customerId = $('#customerId' + number).val();
        var customerCode = $('#customerCode' + number).val();
        var branchCode = $('#branchCode').val();

        //Basic Personal information
        var fullName = $('#fullName' + number).val();
        var nickName = $('#nickName' + number).val();
        var dob = $('#dobDay' + number).val() + "/" + $('#dobMonth' + number).val()+ "/" + $('#dobYear' + number).val();
        console.log(dob);
        var nid = $('#nid' + number).val();
        var tin = $('#tin' + number).val();
        var gender = $('#gender' + number).val();
        var educationLevel = $('#educationLevel' + number).val();
        var maritalStatus = $('#maritalStatus' + number).val();
        var noOfChildren = $('#noOfChildren' + number).val();
        var passportNo = $('#pn' + number).val();
       // var passportExpDate = $('#passExpDate' + number).val();
        var passportExpDate=$('#passportexpdateDay'+number).val()+"/"+$('#passportexpdateMonth'+number).val()+"/"+$('#passportexpdateYear'+number).val();
        console.log(passportExpDate);
        var carOwnership = $('#carOwnership' + number).val();
        var drvLicNo = $('#dln' + number).val();
//       var drvLicExpDate = $('#drvLicExp' + number).val();
        var drvLicExpDate=$('#drivingexpdateDay'+number).val()+"/"+$('#drivingexpdateMonth'+number).val()+"/"+$('#drivingexpdateYear'+number).val();
        console.log(drvLicExpDate);
        var residentialStatus = $('#residentialStatus' + number).val();

        //Personal Present Address
     
        /*
         * Asad
         * Modified Date: {30/4/17}
         */

        var prsntline1 = $('#prfn' + number).val();
        var prsntline2 = $('#prhpn' + number).val();
        var prsntcountryId = $('#prroad' + number).val();
        var prsntcityId = $('#prblock' + number).val();
        var prsntpostCode = $('#prpc' + number).val(); 
        var prsntnoOfYear = $('#prlivingPeriod' + number).val();
        var prsntnoOfMonth = $('#prlivingPeriodMonth' + number).val();
        console.log($('#prlivingPeriod' + number).val());

        //Personal permanent Address

        var prmtline1 = $('#pmfn' + number).val();
        var prmtline2 = $('#pmhpn' + number).val();
        
        var prmtcountryId = $('#pmroad' + number).val();
        var prmtcityId = $('#pmblock' + number).val();
        
        var prmtpostCode = $('#pmpc' + number).val();
       
        var prmtnoOfYear = $('#pmlivingPeriod' + number).val();
        var prmtnoOfMonth = $('#pmlivingPeriodMonth' + number).val();

        var isFetch = $('#isFetch' + number).val();

        var JsonPersonalInfo = {

            'caseNo': caseNo,
            'loanId': loanId,
            'customerId': customerId,
            'customerCode': customerCode,
            'branchCode': branchCode,

            'fullName': fullName,
            'nickName': nickName,
            'dob': dob,
            'nid': nid,
            'tin': tin,
            'gender': gender,
            'educationLevel': educationLevel,
            'maritalStatus': maritalStatus,
            'noOfChildren': noOfChildren,
            'passportNo': passportNo,
            'passportExpDate': passportExpDate,
            'carOwnership': carOwnership,
            'drvLicNo': drvLicNo,
            'drvLicExpDate': drvLicExpDate,
            'residentialStatus': residentialStatus,


            'prsntline1': prsntline1,
            'prsntline2': prsntline2,
            'prsntcountryId': prsntcountryId,
            'prsntcityId': prsntcityId,
            'prsntpostCode': prsntpostCode,
            'prsntnoOfYear': prsntnoOfYear,
            'prsntnoOfMonth': prsntnoOfMonth,

            'isAddressSame': isAddressSame,

            'prmtline1': prmtline1,
            'prmtline2': prmtline2,
            
            'prmtcountryId': prmtcountryId,
            'prmtcityId': prmtcityId,
            'prmtpostCode': prmtpostCode,
            'prmtnoOfYear': prmtnoOfYear,
            'prmtnoOfMonth': prmtnoOfMonth,
            'isFetch': isFetch
        };


       

        var JsonObject = JSON.stringify(JsonPersonalInfo);


        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/personalinfo',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	
            	if(data.isError != 1){
           		$('#customerId' + number).val(data.customerId);
            		 $("#spinner").modal('hide');
                     $("#specialAlert").text("File Successfully Save");
                     $("#exampleModalLong").modal("toggle");
            	
            		
            	}else{
            		 $("#spinner").modal('hide');
                     var message = "<ul style='list-style-type:disc'><li>Upload Error</li></ul>";
                     $("#specialAlert").addClass("errorDiv");
                     $("#specialAlert").append(message);
                     $("#exampleModalLong").modal("toggle");
            	}
            },error: function (err) {
                $("#spinner").modal('hide');
                var message = "<ul style='list-style-type:disc'><li>Upload Error</li></ul>";
                $("#specialAlert").addClass("errorDiv");
                $("#specialAlert").append(message);
                $("#exampleModalLong").modal("toggle");
                console.log(err);

            }
        });

    }
}
//-----------------------------

//-------Contact Info operations--------
function saveCi(number) {
    if (getRequiredFieldIdByLabel('bContactDetails' + number)) {

        //Important data
        var customerId = $('#customerId' + number).val();
        //contact info
        var personalEmail = $("#personalEmail" + number).val();
        var officeEmail = $("#officeEmail" + number).val();
        var personalContactNo = $("#personalContactNo" + number).val();
        var officeContactNo = $("#officeContactNo" + number).val();
        var prsntResContactNo = $("#prsntResContactNo" + number).val();
        var prmntResContactNo = $("#prmntResContactNo" + number).val();

        var JsonContactInfo = {
            'customerId': customerId,
            'personalEmail': personalEmail,
            'officeEmail': officeEmail,
            'personalContactNo': personalContactNo,
            'officeContactNo': officeContactNo,
            'prsntResContactNo': prsntResContactNo,
            'prmntResContactNo': prmntResContactNo
        }

        var JsonObject = JSON.stringify(JsonContactInfo);


        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/contactinfo',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	
            	  $("#specialAlert").text("Successfully save");
                $("#exampleModalLong").modal("toggle");
            	if(data.isError != 1){
                  
            		//alert("File Successfully Saved");
            	}
            	
            }
        });
   }
}
//-----------------------------

//-------Family Info operations--------
function saveFi(numberfi) {
    if (getRequiredFieldIdByLabel('bSpouseInformation' + numberfi) && getMatchedFieldIdByLabel('bSpouseInformation' + numberfi,'phoneOnly')) {
        //Important data
        var caseNo = $('#caseId').val();
        var loanId = $('#LoanId').val();
        var branchCode = $('#branchCode').val();
        var customerId = $('#customerId' + numberfi).val();
        var customerIsMarried = $('#maritalStatus' + numberfi).val();

        //Spouse Info
        var customerSpouseId = $('#spouseId' + numberfi).val();
        var name = $("#spouseName" + numberfi).val();
        var professionId = $("#spouseProfessionId" + numberfi).val();
        var companyName = $("#spouseCompanyName" + numberfi).val();
        var designation = $("#spouseDesignation" + numberfi).val();
        var spouseServiceBusinessLength = $("#spouseServiceBusinessLength" + numberfi).val();
        var spouseMonthlyIncome = $("#spouseMonthlyIncome" + numberfi).val();
        var spouseOfficePhoneNo = $("#spouseOfficePhoneNo" + numberfi).val();
        var spouseMobileNo = $("#spouseMobileNo" + numberfi).val();

        // console.log(caseNo + "|" + loanId + "|" + branchCode + "|" + customerId + "|" + name + "|" + professionId + "|" + companyName + "|" + designation + "|" + spouseServiceBusinessLength + "|" + spouseMonthlyIncome + "|" + spouseOfficePhoneNo + "|" + spouseMobileNo + "|" + customerIsMarried);
        /*//Spouse Mother
         var motherName=$("#"+number).val();
         var motherDesignation=$("#"+number).val();
         var motherCompanyName=$("#"+number).val();
         var motherContactNumber=$("#"+number).val();

         //Spouse Mother
         var fatherName=$("#"+number).val();
         var fatherDesignation=$("#"+number).val();
         var fatherCompanyName=$("#"+number).val();
         var fatherContactNumber=$("#"+number).val();*/

        //Parents Info
        var customerParentId = $('#customerParentId' + numberfi).val();
        //mother info
        var motherName = $("#motherName" + numberfi).val();
        var motherProfessionId = $("#motherProfessionId" + numberfi).val();
        // var motherDesignation = $("#motherDesignation" + numberfi).val();
        var motherCompanyName = $("#motherCompanyName" + numberfi).val();
        var motherContactNumber = $("#motherContactNumber" + numberfi).val();

        //father info
        var fatherName = $("#fatherName" + numberfi).val();
        var fatherProfessionId = $("#fatherProfessionId" + numberfi).val();
        // var fatherDesignation = $("#fatherDesignation" + numberfi).val();
        var fatherCompanyName = $("#fatherCompanyName" + numberfi).val();
        var fatherContactNumber = $("#fatherContactNumber" + numberfi).val();

        var JsonSpouseInfo = {
            "caseNo": caseNo,
            "loanId": loanId,
            "branchCode": branchCode,

            "customerId": customerId,

            "customerIsMarried": customerIsMarried,
            //Spouse Info
            "customerSpouseId": customerSpouseId,
            "name": name,
            "professionId": professionId,
            "designation": designation,
            "companyName": companyName,
            "spouseServiceBusinessLength": spouseServiceBusinessLength,
            "spouseMonthlyIncome": spouseMonthlyIncome,
            "spouseOfficePhoneNo": spouseOfficePhoneNo,
            "spouseMobileNo": spouseMobileNo,
            /*//Spouse Mother
             "spouseMotherName" : ,
             "spouseMotherDesignation" : ,
             "spouseMotherCompanyName" : ,
             "spouseMotherContactNumber" : ,
             "spouseMotherProfessionId" : ,

             //Spouse Mother
             "spouseFatherName" : ,
             "spouseFatherDesignation" : ,
             "spouseFatherCompanyName" : ,
             "spouseFatherContactNumber" : ,
             "spouseFatherProfessionId" : ,*/

            //Parents Info
            "customerParentId": customerParentId,
            //customer mother Info
            "motherName": motherName,
            "motherProfessionId": motherProfessionId,
            // "motherDesignation": motherDesignation,
            "motherCompanyName": motherCompanyName,
            "motherContactNumber": motherContactNumber,
            //customer father Info
            "fatherName": fatherName,
            "fatherProfessionId": fatherProfessionId,
            // "fatherDesignation": fatherDesignation,
            "fatherCompanyName": fatherCompanyName,
            "fatherContactNumber": fatherContactNumber,
        };

        var JsonObject = JSON.stringify(JsonSpouseInfo);


        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/familyinfo',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	if(data.isError != 1){
                $('#spouseId' + numberfi).val(data.customerSpouseId);
                $('#customerParentId' + numberfi).val(data.customerParentId);
                $("#specialAlert").text("File Successfully save");
                $("#exampleModalLong").modal("toggle");

            	}
            }
        });

    }


}
//-------------------------------------

//-------Credit Facility Info operations--------
var cfRowIndex = 1;
function saveCf(number) {
    if (getRequiredFieldIdByLabelUsingClass('creditFacilities' + number)) {
        //important data
        var customerId = $('#customerId' + number).val();

        var creditFacilityId = $('#creditFacilityId' + number).val();
        var bankName = $('#bankName' + number).val();
        var branchId = $('#branchId' + number).val();
        var cardNo = $('#cardNo' + number).val();
        var loanAccNo = $('#loanAccNo' + number).val();
        var facilityDate = $('#facilityDateDay' + number).val()+"/"+$('#facilityDateMonth'+number).val()+"/"+$('#facilityDateYear'+number).val();
        var sanctionLimit = $('#sanctionLimit' + number).val();
        var obligation = $('#obligation' + number).val();
        var presentOutstanding = $('#presentOutstanding' + number).val();
        var expDate = $('#expDate' + number).val();
        var security = $('#security' + number).val();
        // var loanTypeId = $('#loanTypeId' + number).val();
        // var loanTypeName = $('#loanTypeId' + number + ' option[value="' + loanTypeId + '"]').text();
        var facilityTypeId = $('#facilityTypeId' + number).val();
        var facilityTypeName = $('#facilityTypeId' + number + ' option[value="' + facilityTypeId + '"]').text();

        var is_editCf = $('#is_editCf' + number).text();
        var rowIndex = $('#rowIndexCf' + number).text();
        
        

        var JsonMonthlyExpenditureInfo = {
            'creditFacilityId': creditFacilityId,
            'bankName': bankName,
            'branchId': branchId,
            'cardNo': cardNo,
            'loanAccNo': loanAccNo,
            'facilityDate': facilityDate,
            'sanctionLimit': sanctionLimit,
            'obligation': obligation,
            'presentOutstanding': presentOutstanding,
            'expDate': expDate,
            'security': security,
            'customerId': customerId,
            // 'loanTypeId': loanTypeId,
            'facilityTypeId': facilityTypeId,
            'enabled': true
        }

        var JsonObject = JSON.stringify(JsonMonthlyExpenditureInfo);

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/creditfacility',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	$("#modal-credit-facilities").modal('hide');
            	if(data.isError!=1){
                    $("#specialAlert").text("File Successfully save");
                    $("#exampleModalLong").modal("toggle");

            	}
                
                if (is_editCf == 0) {
                    //add row in table
                    var row = '<tr><td>' +
                        '<label id="creditFacilityId' + number + cfRowIndex + '" style="display: none">' + data.creditFacilityId + '</label>' +
                        // '<label id="loanTypeId' + number + cfRowIndex + '" style="display: none">' + loanTypeId + '</label>' +
                        '<label id="facilityTypeId' + number + cfRowIndex + '" style="display: none">' + facilityTypeId + '</label>' +
                        '<label id="presentOutstanding' + number + cfRowIndex + '" style="display: none">' + presentOutstanding + '</label>' +
                        '<label id="expDate' + number + cfRowIndex + '" style="display: none">' + expDate + '</label>' +
                        '<label id="facilityDate' + number + cfRowIndex + '" style="display: none">' + facilityDate + '</label>' +
                        '<label id="security' + number + cfRowIndex + '" style="display: none">' + security + '</label>' +
                        // '<label id="loanTypeName' + number + cfRowIndex + '">' + loanTypeName + '</label>' +
                        '<label id="facilityTypeName' + number + cfRowIndex + '">' + facilityTypeName + '</label>' +
                        '</td>' +
                        '<td><label id="bankName' + number + cfRowIndex + '">' + bankName + '</label></td>' +
                        '<td><label id="branchId' + number + cfRowIndex + '">' + branchId + '</label></td>' +
                        '<td><label id="cardNo' + number + cfRowIndex + '">' + cardNo + '</label></td>' +
                        '<td><label id="loanAccNo' + number + cfRowIndex + '">' + loanAccNo + '</label></td>' +
                        '<td><label id="sanctionLimit' + number + cfRowIndex + '">' + sanctionLimit + '</label></td>' +
                        '<td><label id="obligation' + number + cfRowIndex + '">' + obligation + '</label></td>' +
                        '<td><a href="#" onclick="editCfRow(this,' + number + ',' + cfRowIndex + ')" data-toggle="modal" data-target="#modal-credit-facilities"><i class="fa fa-pencil" ></i></a>' +
                        '<a href="#" onclick="removeCfRow(this,' + number + ',' + cfRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
                        '</tr>';
                    $("#existingCreditFacilities_info" + number).append(row);
                    cfRowIndex++;
                
               } else {
                    $('#creditFacilityId' + number + rowIndex).text(data.creditFacilityId);
                    // $('#loanTypeId' + number + rowIndex).text(loanTypeId);
                    $('#facilityTypeId' + number + rowIndex).text(facilityTypeId);
                    $('#presentOutstanding' + number + rowIndex).text(presentOutstanding);
                    $('#expDate' + number + rowIndex).text(expDate);
                    $('#facilityDate' + number + rowIndex).text(facilityDate);
                    $('#security' + number + rowIndex).text(security);
                    // $('#loanTypeName' + number + rowIndex).text(loanTypeName);
                    $('#facilityTypeName' + number + rowIndex).text(facilityTypeName);
                    $('#bankName' + number + rowIndex).text(bankName);
                    $('#branchId' + number + rowIndex).text(branchId);
                    $('#cardNo' + number + rowIndex).text(cardNo);
                    $('#sanctionLimit' + number + rowIndex).text(sanctionLimit);
                    $('#obligation' + number + rowIndex).text(obligation);
                }
                resetCf(number);

                $('#cfCommit' + number).attr("data-dismiss", "modal");
            }
        });
    }
}

function resetCf(number) {
	removeErrorMessage('creditFacilities'+ number);
    $('#creditFacilityId' + number).val('');
    $('#bankName' + number).val('');
    $('#branchId' + number).val('0');
    $('#cardNo' + number).val('');
    $('#loanAccNo' + number).val('');
    $('#facilityDate' + number).val('');
    $('#sanctionLimit' + number).val(0);
    $('#obligation' + number).val(0);
    $('#presentOutstanding' + number).val(0);
    $('#expDate' + number).val('');
    $('#security' + number).val('');
    // $('#loanTypeId' + number).val('0');
    $('#facilityTypeId' + number).val('0');
    $('#is_editCf' + number).text('0');
    $('#rowIndexCf' + number).text('');
}

function editCfRow(i, number, rowInd) {
    var creditFacilityId = $('#creditFacilityId' + number + rowInd).text();
    // var loanTypeId = $('#loanTypeId' + number + rowInd).text();
    var facilityTypeId = $('#facilityTypeId' + number + rowInd).text();
    var presentOutstanding = $('#presentOutstanding' + number + rowInd).text();
    var expDate = $('#expDate' + number + rowInd).text();
    var facilityDate = $('#facilityDate' + number + rowInd).text();
    var security = $('#security' + number + rowInd).text();
    var bankName = $('#bankName' + number + rowInd).text();
    var branchId = $('#branchId' + number + rowInd).text();
    var cardNo = $('#cardNo' + number + rowInd).text();
    var loanAccNo = $('#loanAccNo' + number + rowInd).text();
    var sanctionLimit = $('#sanctionLimit' + number + rowInd).text();
    var obligation = $('#obligation' + number + rowInd).text();

    //flood fields with value
    $('#creditFacilityId' + number).val(creditFacilityId);
    // $('#loanTypeId' + number).val(loanTypeId);
    $('#facilityTypeId' + number).val(facilityTypeId);
    $('#presentOutstanding' + number).val(presentOutstanding);
    $('#expDate' + number).val(expDate);
    $('#facilityDate' + number).val(facilityDate);
    $('#security' + number).val(security);
    $('#bankName' + number).val(bankName);
    $('#branchId' + number).val(branchId);
    $('#cardNo' + number).val(cardNo);
    $('#loanAccNo' + number).val(loanAccNo);
    $('#sanctionLimit' + number).val(sanctionLimit);
    $('#obligation' + number).val(obligation);
    $('#is_editCf' + number).text('1');
    $('#rowIndexCf' + number).text(rowInd);
}

function removeCfRow(i, number, rowInd) {
    if (confirm('Want to delete?')) {
        //important data
        var customerId = $('#customerId' + number).val();

        var creditFacilityId = $('#creditFacilityId' + number + rowInd).text();
        var loanTypeId = $('#loanTypeId' + number + rowInd).text();
        var facilityTypeId = $('#facilityTypeId' + number + rowInd).text();
        var presentOutstanding = $('#presentOutstanding' + number + rowInd).text();
        var expDate = $('#expDate' + number + rowInd).text();
        var facilityDate = $('#facilityDate' + number + rowInd).text();
        var security = $('#security' + number + rowInd).text();
        var bankName = $('#bankName' + number + rowInd).text();
        var branchId = $('#branchId' + number + rowInd).text();
        var cardNo = $('#cardNo' + number + rowInd).text();
        var loanAccNo = $('#loanAccNo' + number + rowInd).text();
        var sanctionLimit = $('#sanctionLimit' + number + rowInd).text();
        var obligation = $('#obligation' + number + rowInd).text();

        var JsonMonthlyExpenditureInfo = {
            'creditFacilityId': creditFacilityId,
            'bankName': bankName,
            'branchId': branchId,
            'cardNo': cardNo,
            'loanAccNo': loanAccNo,
            'facilityDate': facilityDate,
            'sanctionLimit': sanctionLimit,
            'obligation': obligation,
            'presentOutstanding': presentOutstanding,
            'expDate': expDate,
            'security': security,
            'customerId': customerId,
            // 'loanTypeId': loanTypeId,
            'facilityTypeId': facilityTypeId,
            'enabled': false
        }

        var JsonObject = JSON.stringify(JsonMonthlyExpenditureInfo);

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/loan/loaninit/creditfacility',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
                $("#specialAlert").text("Deleted");
                $("#exampleModalLong").modal("toggle");
                removeRow(i);
            }
        });
    }
}
//-------------------------------------

//-----Monthly income operations--
var miRowIndex = 1;
var totalDeclaredIncome = 0;
function saveMi(number) {
	
	if (getRequiredFieldIdByLabelUsingClass('monthlyIncome'+ number)) {
    //important data
    var customerId = $('#customerId' + number).val();
    //monthly income
    var customerMonthlyIncomeId = $('#customerMonthlyIncomeId' + number).val();
    var declaredIncome = $('#declaredIncome' + number).val();
    // var assessedIncome= $('#').val();
    // var remarks= $('#').val();
    var incomeTypeId = $('#incomeTypeId' + number).val();
    var incomeTypeName = $('#incomeTypeId' + number + ' option[value="' + incomeTypeId + '"]').text();

    var is_editMi = $('#is_editMi' + number).text();
    var rowIndex = $('#rowIndex' + number).text();
    
    if(incomeTypeId != "" && declaredIncome !=""){
    
    var JsonMonthlyIncomeInfo = {
        'customerId': customerId,
        //monthly income
        'customerMonthlyIncomeId': customerMonthlyIncomeId,
        'declaredIncome': declaredIncome,
        // 'assessedIncome' : ,
        // 'remarks' : ,
        'incomeTypeId': incomeTypeId,
        'enabled': true
    }

    var JsonObject = JSON.stringify(JsonMonthlyIncomeInfo);

    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");

    $.ajax({
        url: '/loan/loaninit/monthlyincome',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JsonObject,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {
        	
        	$('#modal-monthly-income').modal('hide');
        	
        	if(data.isError!=1){
                $("#specialAlert").text("File Successfully save");
                $("#exampleModalLong").modal("toggle");
        	}

            if (is_editMi == 0) {
                //add row in table
                var row = '<tr>' +
                    '<td><label id="customerMonthlyIncomeId' + number + miRowIndex + '"style="display: none">' + data.customerMonthlyIncomeId + '</label>' +
                    '<label id="incomeTypeId' + number + miRowIndex + '" style="display: none">' + incomeTypeId + '</label>' +
                    '<label id="incomeTypeName' + number + miRowIndex + '">' + incomeTypeName + '</label>' +
                    '</td>' +
                    '<td><label id="declaredIncome' + number + miRowIndex + '">' + declaredIncome + '</label></td>' +
                    '<td><label id="assessedIncome' + number + miRowIndex + '"></label></td>' +
                    '<td><label id="remarks' + number + miRowIndex + '"></label></td>' +
                    '<td><a href="#" onclick="editMiRow(this,' + number + ',' + miRowIndex + ')" data-toggle="modal" data-target="#modal-monthly-income"><i class="fa fa-pencil" ></i></a>' +
                    '<a href="#" onclick="removeMiRow(this,' + number + ',' + miRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
                    '</tr>';
                $("#monthlyIncome_info" + number).append(row);
                totalDeclaredIncome += declaredIncome;
                miRowIndex++;
            } else {
                $('#customerMonthlyIncomeId' + number + rowIndex).text(data.customerMonthlyIncomeId);
                $('#incomeTypeId' + number + rowIndex).text(incomeTypeId);
                $('#incomeTypeName' + number + rowIndex).text(incomeTypeName);
                $('#declaredIncome' + number + rowIndex).text(declaredIncome);
            }
            resetMi(number);
        }
    });
    
    }else{
    	$('#fincialnfoMonthInc li').remove();
		$("#fincialnfoMonthInc").append(
				'<li>Required field must have a value.</li>');
		$("#modal-monthly-income .fincialnfoMonthIncReqField").addClass("has-error");
    }
	}
}

function resetMi(number) {
	removeErrorMessage('monthlyIncome'+ number);
	$('#fincialnfoMonthInc li').remove();
	$("#modal-monthly-income .fincialnfoMonthIncReqField").removeClass("has-error");
	
    //reset fields
    $('#customerMonthlyIncomeId' + number).val("");
    $('#declaredIncome' + number).val("");
    $('#incomeTypeId' + number).val("0");
    $('#is_editMi' + number).text('0');
    $('#rowIndex' + number).text('');
}

function removeMiRow(i, number, rowInd) {
    if (confirm('Want to delete?')) {
        //important data
        var customerId = $('#customerId' + number).val();
        //monthly income
        var customerMonthlyIncomeId = $('#customerMonthlyIncomeId' + number + rowInd).text();
        var declaredIncome = $('#declaredIncome' + number + rowInd).text();
        // var assessedIncome= $('#').val();
        // var remarks= $('#').val();
        var incomeTypeId = $('#incomeTypeId' + number + rowInd).text();

        var JsonMonthlyIncomeInfo = {
            'customerId': customerId,
            //monthly income
            'customerMonthlyIncomeId': customerMonthlyIncomeId,
            'declaredIncome': declaredIncome,
            // 'assessedIncome' : ,
            // 'remarks' : ,
            'incomeTypeId': incomeTypeId,
            'enabled': false
        }

        var JsonObject = JSON.stringify(JsonMonthlyIncomeInfo);

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/loan/loaninit/monthlyincome',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	$("#specialAlert").text("Deleted");
                $("#exampleModalLong").modal("toggle");
                removeRow(i);
            }
        });
    }
}

function editMiRow(i, number, rowInd) {
    var customerMonthlyIncomeId = $('#customerMonthlyIncomeId' + number + rowInd).text();
    var declaredIncome = $('#declaredIncome' + number + rowInd).text();
    // var assessedIncome= $('#').val();
    // var remarks= $('#').val();
    var incomeTypeId = $('#incomeTypeId' + number + rowInd).text();

    //flood fields with value
    $('#customerMonthlyIncomeId' + number).val(customerMonthlyIncomeId);
    $('#declaredIncome' + number).val(declaredIncome);
    $('#incomeTypeId' + number).val(incomeTypeId);
    $('#is_editMi' + number).text(1);
    $('#rowIndex' + number).text(rowInd);
}
//------------------------------------------

//-----Monthly expenditure operations------
var meRowIndex = 1;
var totalDeclaredExpenditure = 0;
function saveMe(number) {
	
	if (getRequiredFieldIdByLabelUsingClass('monthlyExpenditure'+ number)){

    //important data
    var customerId = $('#customerId' + number).val();
    //monthly expenditure
    var customerMonthlyExpenditureId = $('#customerMonthlyExpenditureId' + number).val();
    var declaredExpenditure = $('#declaredExpenditure' + number).val();
    // var assessedExpenditure= $('#').val();
    // var remarks= $('#').val();
    var expenditureTypeId = $('#expenditureTypeId' + number).val();
    var expenditureTypeName = $('#expenditureTypeId' + number + ' option[value="' + expenditureTypeId + '"]').text();

    var is_editMe = $('#is_editMe' + number).text();
    var rowIndex = $('#rowIndexMe' + number).text();

    var JsonMonthlyExpenditureInfo = {
        'customerId': customerId,
        //monthly expenditure
        'customerMonthlyExpenditureId': customerMonthlyExpenditureId,
        'declaredExpenditure': declaredExpenditure,
        // 'assessedExpenditure' : ,
        // 'remarks' : ,
        'expenditureTypeId': expenditureTypeId,
        // 'expenditureTypeName': "a",
        'enabled': true
    }

    var JsonObject = JSON.stringify(JsonMonthlyExpenditureInfo);


    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");


    $.ajax({
        url: '/loan/loaninit/monthlyexpenditure',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JsonObject,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data) {

        	$('#modal-monthly-expenditure').modal('hide');
        	if(data.isError!=1){
                $("#specialAlert").text("File Successfully save");
                $("#exampleModalLong").modal("toggle");
        	}
            //$("#specialAlert").text("File Successfully save");
            //$("#exampleModalLong").modal("toggle");
            if (is_editMe == 0) {
                var row = '<tr><td>' +
                    '<label id="customerMonthlyExpenditureId' + number + meRowIndex + '" style="display: none">' +
                    data.customerMonthlyExpenditureId + '</label>' +
                    '<label id="expenditureTypeId' + number + meRowIndex + '" style="display: none">' + expenditureTypeId + '</label>' +
                    '<label id="expenditureTypeName' + number + meRowIndex + '">' + expenditureTypeName + '</label>' +
                    '</td>' +
                    '<td><label id="declaredExpenditure' + number + meRowIndex + '">' + declaredExpenditure + '</label></td>' +
                    '<td><label id="assessedExpenditure' + number + meRowIndex + '"></label></td>' +
                    '<td><label id="remarks' + number + meRowIndex + '"></label></td>' +
                    '<td>' +
                    '<a href="#" onclick="editMeRow(this,' + number + ',' + meRowIndex + ')" data-toggle="modal" data-target="#modal-monthly-expenditure">' +
                    '<i class="fa fa-pencil" ></i></a>' +
                    '<a href="#" onclick="removeMeRow(this,' + number + ',' + meRowIndex + ')"><i class="fa fa-times"></i></a>' +
                    '</td></tr>';
                $("#monthlyExpenditure_info" + number).append(row);
                totalDeclaredExpenditure += declaredExpenditure;
                meRowIndex++;
            } else {
                $('#customerMonthlyExpenditureId' + number + rowIndex).text(data.customerMonthlyExpenditureId);
                $('#expenditureTypeId' + number + rowIndex).text(expenditureTypeId);
                $('#expenditureTypeName' + number + rowIndex).text(expenditureTypeName);
                $('#declaredExpenditure' + number + rowIndex).text(declaredExpenditure);
            }
            resetMe(number);
        }
    });
	}
}

function resetMe(number) {
    //reset fields
	removeErrorMessage('monthlyExpenditure'+ number);
    $('#customerMonthlyExpenditureId' + number).val("");
    $('#declaredExpenditure' + number).val("");
    $('#expenditureTypeId' + number).val("0");
    $('#is_editMe' + number).text('0');
    $('#rowIndexMe' + number).text('');
}

function editMeRow(i, number, rowInd) {
    //monthly expenditure
    var customerMonthlyExpenditureId = $('#customerMonthlyExpenditureId' + number + rowInd).text();
    var declaredExpenditure = $('#declaredExpenditure' + number + rowInd).text();
    // var assessedExpenditure= $('#').val();
    // var remarks= $('#').val();
    var expenditureTypeId = $('#expenditureTypeId' + number + rowInd).text();

    //flood fields with value
    $('#customerMonthlyExpenditureId' + number).val(customerMonthlyExpenditureId);
    $('#declaredExpenditure' + number).val(declaredExpenditure);
    $('#expenditureTypeId' + number).val(expenditureTypeId);
    $('#is_editMe' + number).text(1);
    $('#rowIndexMe' + number).text(rowInd);
}

function removeMeRow(i, number, rowInd) {
    if (confirm('Want to delete?')) {
        //important data
        var customerId = $('#customerId' + number).val();
        //monthly expenditure
        var customerMonthlyExpenditureId = $('#customerMonthlyExpenditureId' + number + rowInd).text();
        var declaredExpenditure = $('#declaredExpenditure' + number + rowInd).text();
        // var assessedExpenditure= $('#').val();
        // var remarks= $('#').val();
        var expenditureTypeId = $('#expenditureTypeId' + number + rowInd).text();
        // var expenditureTypeName = $('#expenditureTypeId' + number + rowInd).text;

        var JsonMonthlyExpenditureInfo = {
            'customerId': customerId,
            //monthly expenditure
            'customerMonthlyExpenditureId': customerMonthlyExpenditureId,
            'declaredExpenditure': declaredExpenditure,
            // 'assessedExpenditure' : ,
            // 'remarks' : ,
            'expenditureTypeId': expenditureTypeId,
            // 'expenditureTypeName': "a",
            'enabled': false
        }

        var JsonObject = JSON.stringify(JsonMonthlyExpenditureInfo);


        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/monthlyexpenditure',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
                $("#specialAlert").text("Deleted");
                $("#exampleModalLong").modal("toggle");
                removeRow(i);
            }
        });
    }
}
//-------------------------------

//-----Borrower Employment Info operations------
var beRowIndex = 1;
function saveBe(number, modal) {
	
	if (getRequiredFieldIdByLabelUsingClass('empInfo'+ number)) {

        //important data
        var customerId = $('#customerId' + number).val();

        if (modal == 'modal-') {
            //var toDate = $('#' + number).val()+"/"+$('#modal-borrowerTo' + number).val()+"/"+$('#modal-borrowerTo' + number).val();
            var toDate = $('#modal-borrowerToDay' + number).val()+"/"+$('#modal-borrowerToMonth' + number).val()+"/"+$('#modal-borrowerToYear' + number).val();
            var isCurrent = false;
        } else {
            modal = '';
            var isCurrent = true;
        }

        var customerEmpId = $('#' + modal + 'borrowerEmploymentId' + number).val();
        var designation = $('#' + modal + 'borrowerDesignation' + number).val();
        var department = $('#' + modal + 'borrowerDepartment' + number).val();
       // var fromDate = $('#' + modal + 'borrowerFrom' + number).val();
        var fromDate=$('#'+modal+'borrowerFromDay'+number).val()+"/"+$('#'+modal+'borrowerFromMonth'+number).val()+"/"+$('#'+modal+'borrowerFromYear'+number).val();
        var businessNature = $('#' + modal + 'borrowerBusinessNature' + number).val();

        var organizationId = $('#' + modal + 'borrowerCompanyId' + number).val();
        var organizationName = $('#' + modal + 'borrowerCompanyId' + number + ' option[value="' + organizationId + '"]').text();
        var professionId = $('#' + modal + 'borrowerProfessionId' + number).val();

        var is_edit = $('#modal-isEditBe' + number).val();
        var rowIndex = $('#modal-rowIndexBe' + number).val();
   	
        var JsonBorrowerEmploymentInfo = {
            'customerId': customerId,

            'customerEmpId': customerEmpId,
            'designation': designation,
            'department': department,
            'fromDate': fromDate,
            'toDate': toDate,
            'businessNature': businessNature,
            'isCurrent': isCurrent,
            'organizationId': organizationId,
            'professionId': professionId,
            'enabled': true
        }

        var JsonObject = JSON.stringify(JsonBorrowerEmploymentInfo);

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/loan/loaninit/employmentinfo',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
            	$('#modal-borrower-previous-experience').modal('hide');
         
                    $("#specialAlert").text("File Successfully save");
                    $("#exampleModalLong").modal("toggle");
            	
                
                if (modal == 'modal-') {
                    if (is_edit == 0) {
                        var row = '<tr><td>' +
                            '<label id="borrowerEmploymentId' + number + beRowIndex + '" style="display: none">' + data.customerEmpId + '</label>' +
                            '<label id="borrowerProfessionId' + number + beRowIndex + '" style="display: none">' + professionId + '</label>' +
                            '<label id="borrowerBusinessNature' + number + beRowIndex + '" style="display: none">' + businessNature + '</label>' +
                            '<label id="rowIndexBe' + number + beRowIndex + '" style="display: none">' + beRowIndex + '</label>' +
                            '<label id="borrowerCompanyId' + number + beRowIndex + '" style="display: none">' + organizationId + '</label>' +
                            '<label id="borrowerDepartment' + number + beRowIndex + '" style="display: none">' + department + '</label>' +
                            '<label id="borrowerCompanyName' + number + beRowIndex + '">' + organizationName + '</label>' +
                            '</td>' +
                            '<td><label id="borrowerDesignation' + number + beRowIndex + '">' + designation + '</label></td>' +
                            '<td><label id="borrowerFrom' + number + beRowIndex + '">' + fromDate + '</label></td>' +
                            '<td><label id="borrowerTo' + number + beRowIndex + '">' + toDate + '</label></td>' +
                            '<td>' +
                            '<a href="#" onclick="editBeRow(this,' + number + ',' + beRowIndex + ')" data-toggle="modal" data-target="#modal-borrower-previous-experience">' +
                            '<i class="fa fa-pencil" ></i></a>' +
                            '<a href="#" onclick="removeBeRow(this,' + number + ',' + beRowIndex + ')"><i class="fa fa-times"></i></a>' +
                            '</td></tr>';
                        $("#exp_info" + number).append(row);
                        beRowIndex++;
                    } else {
                        $('#borrowerEmploymentId' + number + rowIndex).text(data.customerEmpId);
                        $('#borrowerProfessionId' + number + rowIndex).text(professionId);
                        $('#borrowerBusinessNature' + number + rowIndex).text(businessNature);
                        $('#borrowerCompanyId' + number + rowIndex).text(organizationId);
                        $('#borrowerCompanyName' + number + rowIndex).text(organizationName);
                        $('#borrowerDepartment' + number + rowIndex).text(department);
                        $('#borrowerDesignation' + number + rowIndex).text(designation);
                        $('#borrowerFrom' + number + rowIndex).text(fromDate);
                        $('#borrowerTo' + number + rowIndex).text(toDate);
                    }
                }
                resetBe(number);
            }
        });
    }
	
	
}

function editBeRow(i, number, rowInd) {
    var customerEmpId = $('#borrowerEmploymentId' + number + rowInd).text();
    var designation = $('#borrowerDesignation' + number + rowInd).text();
    var department = $('#borrowerDepartment' + number + rowInd).text();
    var fromDate = $('#borrowerFrom' + number + rowInd).text();
    var toDate = $('#borrowerTo' + number + rowInd).text();
    var businessNature = $('#borrowerBusinessNature' + number + rowInd).text();

    var organizationId = $('#borrowerCompanyId' + number + rowInd).text();
    var professionId = $('#borrowerProfessionId' + number + rowInd).text();

    $('#modal-borrowerEmploymentId' + number).val(customerEmpId);
    $('#modal-borrowerDesignation' + number).val(designation);
    $('#modal-borrowerDepartment' + number).val(department);
    $('#modal-borrowerFrom' + number).val(fromDate);
    $('#modal-borrowerBusinessNature' + number).val(businessNature);
    $('#modal-borrowerTo' + number).val(toDate);

    $('#modal-borrowerCompanyId' + number).val(organizationId);
    $('#modal-borrowerProfessionId' + number).val(professionId);

    $('#modal-isEditBe' + number).val('1');
    $('#modal-rowIndexBe' + number).val(rowInd);
}

function resetBe(number) {
	$('.errorGen li').remove();
    $("#modal-borrower-previous-experience .employeeInfoReqField").removeClass("has-error");
    	
    $('#modal-borrowerEmploymentId' + number).val('');
    $('#modal-borrowerDesignation' + number).val('');
    $('#modal-borrowerDepartment' + number).val('');
    $('#modal-borrowerFrom' + number).val('');
    $('#modal-borrowerBusinessNature' + number).val('');
    $('#modal-borrowerTo' + number).val('');

    $('#modal-borrowerCompanyId' + number).val('0');
    $('#modal-borrowerProfessionId' + number).val('0');

    $('#modal-is_editBe' + number).val('0');
    
    $('#modal-borrowerFromDay' + number).val('');
    $('#modal-borrowerFromYear' + number).val('');
    $('#modal-borrowerToDay' + number).val('');
    $('#modal-borrowerToYear' + number).val('');
    $('#modal-borrowerFromMonth' + number).val('');
    $('#modal-borrowerToMonth' + number).val('');
    
    
    
}

function removeBeRow(i, number, rowInd) {
    if (confirm('Want to delete?')) {
        //important data
        var customerId = $('#customerId' + number).val();

        var customerEmpId = $('#borrowerEmploymentId' + number + rowInd).text();
        var designation = $('#borrowerDesignation' + number + rowInd).text();
        var department = $('#borrowerDepartment' + number + rowInd).text();
        var fromDate = $('#borrowerFrom' + number + rowInd).text();
        var toDate = $('#borrowerTo' + number + rowInd).text();
        var businessNature = $('#borrowerBusinessNature' + number + rowInd).text();

        var organizationId = $('#borrowerCompanyId' + number + rowInd).text();
        var professionId = $('#borrowerProfessionId' + number + rowInd).text();
        var isCurrent = false;

        // var rowIndex = $('#rowIndexBe' + number + rowInd).text();

        var JsonBorrowerEmploymentInfo = {
            'customerId': customerId,

            'customerEmpId': customerEmpId,
            'designation': designation,
            'department': department,
            'fromDate': fromDate,
            'toDate': toDate,
            'businessNature': businessNature,
            'isCurrent': isCurrent,
            'organizationId': organizationId,
            'professionId': professionId,
            'enabled': false
        }

        var JsonObject = JSON.stringify(JsonBorrowerEmploymentInfo);

        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/loan/loaninit/employmentinfo',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObject,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
                $("#specialAlert").text("Deleted");
                $("#exampleModalLong").modal("toggle");
                removeRow(i);
            }
        });
    }
}

function fetchPi(number) {
    var splitDate = {};
    var bankAcc = $("#bankAcc" + number).val();
    var customerCode = $("#customerCode" + number).val();

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
            if(data!=null) {
                $('#customerId' + number).val(data.customerId);
                $('#customerCode' + number).val(data.customerCode);

                //Basic Personal information
                $('#fullName' + number).val(data.fullName);
                $('#nickName' + number).val(data.nickName);
                console.log("date of birth: "+data.dob);
                if (data.dob != null || data.dob.trim() !== "") {
                    splitDate = data.dob.split("-");
                    console.log("split date : "+splitDate);
                    $('#dobMonth'+ number).val(splitDate[1]);
                    $('#dobDay'+number).val(splitDate[2]);
                    $('#dobYear'+number).val(splitDate[0]);

                }
                $('#nid' + number).val(data.nid);
                $('#tin' + number).val(data.tin);
                $('#gender' + number).val(data.gender);
                $('#educationLevel' + number).val(data.educationLevel);
                $('#maritalStatus' + number).val(data.maritalStatus);
                $('#noOfChildren' + number).val(data.noOfChildren);
                $('#pn' + number).val(data.passportNo);
                if (data.passportExpDate != null || data.passportExpDate.trim() !== "") {
                    splitDate = data.passportExpDate.split("-");

                    $('#passportexpdateYear'+number).val(splitDate[0]);
                    $('#passportexpdateMonth'+ number).val(splitDate[1]);
                    $('#passportexpdateDay'+number).val(splitDate[2]);

                }
                $('#carOwnership' + number).val(data.carOwnership);
                $('#dln' + number).val(data.drvLicNo);
                if (data.drvLicExpDate != null || data.drvLicExpDate.trim() !== "") {
                    splitDate = data.drvLicExpDate.split("-");
                    $('#drivingexpdateYear'+number).val(splitDate[0]);
                    $('#drivingexpdateMonth'+ number).val(splitDate[1]);
                    $('#drivingexpdateDay'+number).val(splitDate[2]);

                }
                $('#residentialStatus' + number).val(data.residentialStatus);

                //Personal Present Address

                $('#prfn' + number).val(data.prsntline1);
                $('#prhpn' + number).val(data.prsntline2);
                $('#prroad' + number).val(data.prsntcountryId);
                console.log("city Id : "+data.prsntcityId);
               //
                var prcityname='<option value='+data.prsntcityId+'>'+data.prsntCityName+'</option>';
                $('#prblock' + number).append(prcityname);
                $('#prblock' + number).val(data.prsntcityId);
                $('#prpc' + number).val(data.prsntpostCode);
                $('#prlivingPeriod' + number).val(data.prsntnoOfYear);
                $('#prlivingPeriodMonth' + number).val(data.prsntnoOfMonth);


                //Personal permanent Address

                $('#pmfn' + number).val(data.prmtline1);
                $('#pmhpn' + number).val(data.prmtline2);
                $('#pmroad' + number).val(data.prmtcountryId);
                var pmcityname='<option value='+data.prmtcityId+'>'+data.prmtCityName+'</option>';
                $('#pmblock' + number).append(pmcityname);
                $('#pmblock' + number).val(data.prmtcityId);
                $('#pmpc' + number).val(data.prmtpostCode);
                $('#pmlivingPeriod' + number).val(data.prmtnoOfYear);
                $('#pmlivingPeriodMonth' + number).val(data.prmtnoOfMonth);

                $('#isFetch' + number).val(1);
            }
        }
    });
}



//-------------------------------
$(document).ready(function () {

    /*function savePi(number){

     //Important data
     var caseNo=$('#caseId').val();
     var loanId=$('#LoanId').val();
     var customerId = $('#customerId'+number).val();

     //Basic Personal information
     var fullName = $('#fullName'+number).val();
     var nickName = $('#nickName'+number).val();
     var dob = $('#dob'+number).val();
     var nid = $('#nid'+number).val();
     var tin = $('#tin'+number).val();
     var gender = $('#gender'+number).val();
     var educationLevel = $('#educationLevel'+number).val();
     var maritalStatus = $('#maritalStatus'+number).val();
     var noOfChildren = $('#noOfChildren'+number).val();
     var passportNo = $('#pn'+number).val();
     var passportExpDate = $('#passExpDate'+number).val();
     var carOwnership = $('#carOwnership'+number).val();
     var drvLicNo = $('#dln'+number).val();
     var drvLicExpDate = $('#drvLicExp'+number).val();
     var residentialStatus = $('#residentialStatus').val();

     //Personal Present Address
     var prsntFlatNo = $('#prfn'+number).val();
     var prsntHouseOrPlotNo = $('#prhpn'+number).val();
     var prsntVillOrArea = $('#prva'+number).val();
     var prsntRoad = $('#prroad'+number).val();
     var prsntBlock = $('#prblock'+number).val();
     var prsntPoliceStation = $('#prps'+number).val();
     var prsntPostOffice = $('#prpo'+number).val();
     var prsntPostCode = $('#prpc'+number).val();
     var prsntDistrict = $('#prdistrict'+number).val();
     var prsntLivingPeriod = $('#prlivingPeriod'+number).val();


     //Personal permanent Address
     var prmntFlatNo = $('#pmfn'+number).val();
     var prmntHouseOrPlotNo = $('#pmhpn'+number).val();
     var prmntVillOrArea = $('#pmva'+number).val();
     var prmntRoad = $('#pmroad'+number).val();
     var prmntBlock = $('#pmblock'+number).val();
     var prmntPoliceStation = $('#pmps'+number).val();
     var prmntPostOffice = $('#pmpo'+number).val();
     var prmntPostCode = $('#pmpc'+number).val();
     var prmntDistrict = $('#pmdistrict'+number).val();
     var prmntLivingPeriod = $('#pmlivingPeriod'+number).val();


     var JsonPersonalInfo = {

     'caseNo':caseNo,
     'loanId':loanId,
     'customerId':customerId,

     'fullName':fullName,
     'nickName':nickName,
     'dob':dob,
     'nid':nid,
     'tin':tin,
     'gender':gender,
     'educationLevel':educationLevel,
     'maritalStatus':maritalStatus,
     'noOfChildren':noOfChildren,
     'passportNo':passportNo,
     'passportExpDate':passportExpDate,
     'carOwnership':carOwnership,
     'drvLicNo':drvLicNo,
     'drvLicExpDate':drvLicExpDate,
     'residentialStatus':residentialStatus,

     'prsntFlatNo':prsntFlatNo,
     'prsntHouseOrPlotNo':prsntHouseOrPlotNo,
     'prsntVillOrArea':prsntVillOrArea,
     'prsntRoad':prsntRoad,
     'prsntBlock':prsntBlock,
     'prsntPoliceStation':prsntPoliceStation,
     'prsntPostOffice':prsntPostOffice,
     'prsntPostCode':prsntPostCode,
     'prsntDistrict':prsntDistrict,
     'prsntLivingPeriod':prsntLivingPeriod,

     'prmntFlatNo':prmntFlatNo,
     'prmntHouseOrPlotNo':prmntHouseOrPlotNo,
     'prmntVillOrArea':prmntVillOrArea,
     'prmntRoad':prmntRoad,
     'prmntBlock':prmntBlock,
     'prsntPoliceStation':prmntPoliceStation,
     'prmntPostOffice':prmntPostOffice,
     'prmntPostCode':prmntPostCode,
     'prmntDistrict':prmntDistrict,
     'prmntLivingPeriod':prmntLivingPeriod
     };

     var JsonObject = JSON.stringify(JsonPersonalInfo);


     var token = $("meta[name='_csrf']").attr("content");
     var header = $("meta[name='_csrf_header']").attr("content");


     $.ajax({
     url: '/loan/loaninit/personalinfo',
     type: 'POST',
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     data: JsonObject,
     beforeSend: function(xhr){
     xhr.setRequestHeader(header, token);
     },
     success:function(data){
     alert("save done");
     if(data.errors.length > 0){
     alert('error');
     }else{
     alert(data);
     }
     }
     });


     }*/

    /*$('#gi-save').click(function(event) {


     var branchCode = $('#branchCode').val();
     var loanType = $('#loanType').val();
     var natureOfProposal = $('#natureOfProposal').val();
     var customerType =$('#customerType').val();
     var applicationType = $('#applicationType').val();
     var numberOfBorrower = $('#noOfBorrower').val();
     var appliedLoanAmount = $('#appliedLoanAmount').val();
     var appliedLoanTenor = $('#appliedLoanTenor').val();
     var interestRate = $('#interestRate').val();


     var jGeneralInfoDto = {	'branchCode':branchCode,
     'loanType':loanType,
     'customerType':customerType,
     'natureOfProposal':natureOfProposal,
     'applicationType':applicationType,
     'numberOfBorrower':numberOfBorrower,
     'appliedLoanAmount':appliedLoanAmount,
     'appliedLoanTenor':appliedLoanTenor,
     'interestRate':interestRate
     };

     var json = JSON.stringify(jGeneralInfoDto);

     var url = '/loan/create/new';
     sendJsonRequestTo(url,json);


     });*/


    /*
     $("#piCommit").click(function() {

     //adding disabled class  to disable the next button
     $(this).addClass('disabled');
     //adding disabled attribute if add class fails (fail safe)
     $(this).attr('disabled', 'disabled');



     //add all 'form' data into individual variable to generate JSON
     //General information
     var branchCode = $('#branchCode').val();
     var loanType = $('#loanType').val();
     var natureOfProposal = $('#natureOfProposal').val();
     var customerType =$('#customerType').val();
     var applicationType = $('#applicationType').val();
     var numberOfBorrower = $('#noOfBorrower').val();
     var appliedLoanAmount = $('#appliedLoanAmount').val();
     var appliedLoanTenor = $('#appliedLoanTenor').val();
     var interestRate = $('#interestRate').val();


     //Basic Personal information
     var fullName = $('#fullName1').val();
     var nickName = $('#nickName1').val();
     var dob = $('#dob1').val();
     var nid = $('#nid').val();
     var tin = $('#tin').val();
     var gender = $('#gender').val();
     var educationLevel = $('#educationLevel').val();
     var maritalStatus = $('#maritalStatus').val();
     var noOfChildren = $('#noOfChildren').val();
     var passportNo = $('#pn').val();


     //generate json string
     var jGeneralInfoDto = {	'branchCode':branchCode,
     'loanType':loanType,
     'customerType':customerType,
     'natureOfProposal':natureOfProposal,
     'applicationType':applicationType,
     'numberOfBorrower':numberOfBorrower,
     'appliedLoanAmount':appliedLoanAmount,
     'appliedLoanTenor':appliedLoanTenor,
     'interestRate':interestRate,
     'fullName':fullName,
     'nickName':nickName,
     'dob':dob,
     'nid':nid,
     'tin':tin,
     'gender':gender,
     'educationLevel':educationLevel,
     'maritalStatus':maritalStatus,
     'noOfChildren':noOfChildren,
     'passportNo':passportNo,
     };

     var json = JSON.stringify(jGeneralInfoDto);

     //set the url to requiest
     //var url = '/loan/create/new';
     var url ='/loan/create/temp';
     sendJsonRequestTo(url,json);

     });

     function sendJsonRequestTo(urlPath,object){

     var token = $("meta[name='_csrf']").attr("content");
     var header = $("meta[name='_csrf_header']").attr("content");


     $.ajax({
     url: urlPath,
     type: 'POST',
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     data: object,
     beforeSend: function(xhr){
     xhr.setRequestHeader(header, token);
     },
     success:function(data){


     if(data.errors.length > 0){
     for (var i = 0; i < data.errors.length; i++) {
     console.log(i+' '+"error field name = "+data.errors[i]);
     $('#'+data.errors[i]).addClass('error');
     }
     alert('error');
     }else{
     $('#loanType').val('0');
     $('#customerType').val('0');
     $('#applicationType').val('single');
     $('#noOfBorrower').val('1');
     $('#appliedLoanAmount').val('0.0');
     $('#appliedLoanTenor').val('0.0');
     $('#interestRate').val('0.00');


     $("#gi-commit-button").removeClass('disabled');
     //removing disabled attribute if add class fails (fail safe)
     $("#gi-commit-button").removeAttr('disabled');

     $('.modal-body').append(data.caseNumber);
     $('#go-next-button').prop('href', '/loan/create?case='+data.caseNumber);
     $('#modal-success').modal('show');
     $('#all-loan-info').removeAttr('hidden');
     alert(data.caseNumber);
     //alert(data);
     }
     }
     });

     }*/
});


