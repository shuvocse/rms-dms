function sameAddress(){
	  // alert("do copy");
	
	   var check = $('#check').is(":checked");
	   
	   //var grprsntId = $('#guarantorPresentId').val();
       var grprsntline1 = $('#grprline1' ).val();
       var grprsntline2 = $('#grprline2' ).val();
       var grprsntcountryId = $('#grprcoutnry').val();
       var grprsntcityId = $('#grprcity').val();
       var grprsntpostCode = $('#grprpostcode').val(); 
       var grprsntnoOfYear = $('#grprlivingperiodYear' ).val();
       var grprsntnoOfMonth = $('#grprlivingperiodMonth').val();
       /*
        * flood permanent address with present address value
        */
       if(check){
    	   
    	   isAddressSame = 1;
       	$('#grpmline1').val(grprsntline1);
		$('#grpmline2').val(grprsntline2);
		$('#grpmcoutnry').val(grprsntcountryId);
		$('#grpmcity').val(grprsntcityId);
		$('#grpmpostcode').val(grprsntpostCode);
		$('#grpmlivingperiodYear').val(grprsntnoOfYear);
		$('#grpmlivingperiodMonth').val(grprsntnoOfMonth);
       }
       else{
    	   isAddressSame = 0;
        $('#grpmline1').val('');
   		$('#grpmline2').val('');
   		$('#grpmcoutnry').val('');
   		$('#grpmcity').val('');
   		$('#grpmpostcode').val('');
   		$('#grpmlivingperiodYear').val('');
   		$('#grpmlivingperiodMonth').val('');
   	  
    	   
       }
       
        
       
   };
/*
Created By : {Asad}
Created Date:{22/5/2017}
Guarantor city list according to Country
*/
function CityListgrpr(countryId){
  		 
  		 
  		 $("#grprcity").empty();
  		 console.log($("#grprcoutnry").val());
  		 var counId=$("#grprcoutnry").val();
  		 var token = $("meta[name='_csrf']").attr("content");
           var header = $("meta[name='_csrf_header']").attr("content");
           $.ajax({
               url: '/address/cityList?countryId='+counId,
               type: 'GET',
               contentType: 'application/json; charset=utf-8',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader(header, token);
               },
               success: function (data) {
             	  console.log(data.length);
                    for (var key=0; key < data.length; key++){
                 	   $("#grprcity").append(
                 			   "<option value='"+data[key][0]+"'>"+data[key][1]+"</option>"
                 			   );
                 	  $("#grpmcity").append(
                			   "<option value='"+data[key][0]+"'>"+data[key][1]+"</option>"
                			   );
                       
                   } 
               }
           });
  		 
  		 
  	 };
  	 
  	 
  	//-------Guarantor Personal Info operations--------
  	
  	var gaurantorRowIndex=1;
    
    var i = 1;
   
    function addGuarantorData(){
    	if(getRequiredFieldIdByLabelUsingClass('gInfo')){
 
    	$("#check").prop('checked', false);	
    	var GurantorId= $("#gurantorId").val();
    	var loanGuarId = $('#LoanId').val();
    	var is_editGurantorInfo = $('#is_editGuarantorInfo').text();
    	var rowIndexGuarantorInfo = $('#rowIndexGuarantorInfo').text();
    	
    	var fullName = $('#grFullName').val();
        var nickName = $('#grName' ).val();
        var grbirthday=$('#grdobDay').val();
        var grbirthdayMonth=$('#grdobMonth').val();
        var grbirthdayYear=$('#grdobYear').val();
        var dob = $('#grdobDay').val() + "/" + $('#grdobMonth').val()+ "/" + $('#grdobYear').val();
        console.log(dob);
        var nid = $('#grNID').val();
        var tin = $('#grTin').val();
        var gender = $('#grGender').val();
        var educationLevel = $('#grEduLevel').val();
        var maritalStatus = $('#grMaritalStatus').val();
        var noOfChildren = $('#grChildNo').val();
        var passportNo = $('#grPassNo').val();
        
        var carOwnership = $('#grCarOwnership').val();
        var drvLicNo = $('#grDlNo').val();
       
        var residentialStatus = $('#grResidentialStatus').val();
        console.log("residential Status: "+ residentialStatus);
        console.log("full name : "+fullName );
        console.log("maritalStatus : "+ maritalStatus);
    	var guarantorRelationship=$('#grrelationship').val();
    	var GuarantorOfficeTelNo = $ ("#grOffice").val();
    	var GuarantorMobileNo = $ ("#grMobile").val();
    	/*
    	 * Guarantor Personal Information
    	 * End Declaration
    	 */
      //Personal Present Address
        
        /*
         * Asad
         * Modified Date: {23/5/2017}
         */

        var grprsntId = $('#guarantorPresentId').val();
        var grprsntline1 = $('#grprline1' ).val();
        var grprsntline2 = $('#grprline2' ).val();
        var grprsntcountryId = $('#grprcoutnry').val();
        var grprsntcityId = $('#grprcity').val();
        var grprsntpostCode = $('#grprpostcode').val(); 
        var grprsntnoOfYear = $('#grprlivingperiodYear' ).val();
        var grprsntnoOfMonth = $('#grprlivingperiodMonth').val();
        console.log($('#grprlivingperiodMonth').val());
        
      //Personal permanent Address
        var grprmtId = $('#guarantorPermanentId').val();
        var grprmtline1 = $('#grpmline1').val();
        var grprmtline2 = $('#grpmline2').val();
        var grprmtcountryId = $('#grpmcoutnry').val();
        var grprmtcityId = $('#grpmcity').val();
        var grprmtpostCode = $('#grpmpostcode').val();
        var grprmtnoOfYear = $('#grpmlivingperiodYear').val();
        var grprmtnoOfMonth = $('#grpmlivingperiodMonth').val();
        
        
        //Guarantor Employment information
       /* var GuarantorEmpId = $('#grEmploymentId').val();*/
        var GuarantorDesignation = $ ("#grDesignation").val();
        var grdepartment = $('#grdepartment').val();
       // var fromDate = $('#' + modal + 'borrowerFrom' + number).val();
        var grfromDate=$('#gremDay').val()+"/"+$('#gremMonth').val()+"/"+$('#gremYear').val();
        var grbusinessNature = $('#grbusinessNature').val();
        var GuarantorProId = $ ("#grProId").val();
    	var GuarantorProfessionName = $('#grProId option[value="'+ GuarantorProId +'"]').text(); 
    	var grorganizationId= $('#grOrgId').val();
    	var GuarantorCompanyName=  $('#grOrgId option[value="'+ grorganizationId +'"]').text();
        var detailsaboutborrower= $('#grdetails').val();
        var gremploystartday=$('#gremDay').val();
        var gremploystartMonth=$('#gremMonth').val();
        var gremploystartYear=$('#gremYear').val();
    	var guarantorFormData = {
    			
    			'loanId': loanGuarId,

                'fullname': fullName,
                'nickName': nickName,
                'dob': dob,
                'nid': nid,
                'tin': tin,
                'gender': gender,
                'educationLevel': educationLevel,
                'maritialStatus': maritalStatus,
                'noOfChildren': noOfChildren,
                'passportNo': passportNo,
                
                'carOwnership': carOwnership,
                'licenseNo': drvLicNo,
                'residentialStatus': residentialStatus,
                'gurantorRelationship':guarantorRelationship,
                'seeconderyContactNo':GuarantorOfficeTelNo,
    			'primaryContactNo':GuarantorMobileNo,
                /*
                 * Present Address
                 */
                'prsntline1': grprsntline1,
                'prsntline2': grprsntline2,
                'prsntcountryId': grprsntcountryId,
                'prsntcityId': grprsntcityId,
                'prsntpostCode': grprsntpostCode,
                'prsntnoOfYear': grprsntnoOfYear,
                'prsntnoOfMonth': grprsntnoOfMonth,

               /* 'isAddressSame': isAddressSame,*/


                'prmtline1': grprmtline1,
                'prmtline2': grprmtline2,
                
                'prmtcountryId': grprmtcountryId,
                'prmtcityId': grprmtcityId,
                'prmtpostCode': grprmtpostCode,
                'prmtnoOfYear': grprmtnoOfYear,
                'prmtnoOfMonth': grprmtnoOfMonth,
                
                //Guarantor Employment Information
                
                'designation': GuarantorDesignation,
                'department': grdepartment,
                'empStartDate': grfromDate,
                'businessNature': grbusinessNature,
                'organizationId': grorganizationId,
                'professionId': GuarantorProId,
                'details': detailsaboutborrower,
                'enabled':true
    			};
    	
    	
    	console.log(guarantorFormData);
    	var JsonObjectForGr = JSON.stringify(guarantorFormData);
    	var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
    	
    
    	$.ajax({
            url: '/guarantor/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObjectForGr,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    header, token);
            },

            success: function (data) {
            	alert("File Successfully Save");
            	$('#modal-guarantor-info').modal('hide'); 
                if(is_editGurantorInfo==0){
                var newGuarantorRow = '<tr>' +
                    '<td><label id="gurantorId'+ gaurantorRowIndex + '"style="display: none">' + data.gurantorId + '</label>' +
                    '<label id="grFullName' +gaurantorRowIndex + '">' + fullName  + '</label></td>' +
                    '<td><label id="grrelationship' +gaurantorRowIndex + '">' + guarantorRelationship + '</label></td>' +
                    '<td><label id="grOrgId' +gaurantorRowIndex + '"style="display: none">'+ grorganizationId +'</label>' +
                    '<label id="GuarantorCompanyName' + gaurantorRowIndex +'">'+ GuarantorCompanyName +'</label></td>' +
                    '<td><label id="grProId' +gaurantorRowIndex + '"style="display: none">'+ GuarantorProId +'</label>' +
                    '<label id="GuarantorProfessionName' + gaurantorRowIndex +'">'+ GuarantorProfessionName +'</label></td>' +
                    '<td><label id="grDesignation' +gaurantorRowIndex + '">'+ GuarantorDesignation +'</label></td>' +
                    
                    
                    
                    
                    '<td><label id="grName' +gaurantorRowIndex + '"style="display: none">'+ nickName +'</label>' +
                    '<label id="grdobDay' +gaurantorRowIndex + '"style="display: none">'+ grbirthday +'</label>' +
                    '<label id="grdobMonth' +gaurantorRowIndex + '"style="display: none">'+ grbirthdayMonth +'</label>' +
                    '<label id="grdobYear' +gaurantorRowIndex + '"style="display: none">'+ grbirthdayYear +'</label>' +
                    '<label id="grNID' +gaurantorRowIndex + '"style="display: none">'+ nid +'</label>' +
                    '<label id="grTin' +gaurantorRowIndex + '"style="display: none">'+ tin +'</label>' +
                    '<label id="grGender' +gaurantorRowIndex + '"style="display: none">'+ gender +'</label>' +
                    '<label id="grEduLevel' +gaurantorRowIndex + '"style="display: none">'+ educationLevel +'</label>' +
                    '<label id="grMaritalStatus' +gaurantorRowIndex + '"style="display: none">'+ maritalStatus +'</label>' +
                    '<label id="grChildNo' +gaurantorRowIndex + '"style="display: none">'+ noOfChildren +'</label>' +
                    '<label id="grPassNo' +gaurantorRowIndex + '"style="display: none">'+ passportNo +'</label>' +
                    '<label id="grCarOwnership' +gaurantorRowIndex + '"style="display: none">'+ carOwnership +'</label>' +
                    '<label id="grDlNo' +gaurantorRowIndex + '"style="display: none">'+ drvLicNo +'</label>' +
                    '<label id="grResidentialStatus' +gaurantorRowIndex + '"style="display: none">'+ residentialStatus +'</label>' +
                    '<label id="grprline1' +gaurantorRowIndex + '"style="display: none">'+ grprsntline1 +'</label>' +
                    '<label id="grprline2' +gaurantorRowIndex + '"style="display: none">'+ grprsntline2 +'</label>' +
                    '<label id="grprcoutnry' +gaurantorRowIndex + '"style="display: none">'+ grprsntcountryId +'</label>' +
                    '<label id="grprcity' +gaurantorRowIndex + '"style="display: none">'+ grprsntcityId +'</label>' +
                    '<label id="grprpostcode' +gaurantorRowIndex + '"style="display: none">'+ grprsntpostCode +'</label>' +
                    '<label id="grprlivingperiodYear' +gaurantorRowIndex + '"style="display: none">'+ grprsntnoOfYear +'</label>' +
                    '<label id="grprlivingperiodMonth' +gaurantorRowIndex + '"style="display: none">'+ grprsntnoOfMonth +'</label>' +
                    '<label id="grpmline1' +gaurantorRowIndex + '"style="display: none">'+ grprmtline1 +'</label>' +
                    '<label id="grpmline2' +gaurantorRowIndex + '"style="display: none">'+ grprmtline2 +'</label>' +
                    '<label id="grpmcoutnry' +gaurantorRowIndex + '"style="display: none">'+ grprmtcountryId +'</label>' +
                    '<label id="grpmcity' +gaurantorRowIndex + '"style="display: none">'+ grprmtcityId +'</label>' +
                    '<label id="grpmpostcode' +gaurantorRowIndex + '"style="display: none">'+ grprmtpostCode +'</label>' +
                    '<label id="grpmlivingperiodYear' +gaurantorRowIndex + '"style="display: none">'+ grprmtnoOfYear +'</label>' +
                    '<label id="grpmlivingperiodMonth' +gaurantorRowIndex + '"style="display: none">'+ grprmtnoOfMonth +'</label>' +
                    '<label id="grdepartment' +gaurantorRowIndex + '"style="display: none">'+ grdepartment +'</label>' +
                    '<label id="grbusinessNature' +gaurantorRowIndex + '"style="display: none">'+ grbusinessNature +'</label>' +
                    '<label id="grdetails' +gaurantorRowIndex + '"style="display: none">'+ detailsaboutborrower +'</label>' +
                    '<label id="gremDay' +gaurantorRowIndex + '"style="display: none">'+ gremploystartday +'</label>' +
                    '<label id="gremMonth' +gaurantorRowIndex + '"style="display: none">'+ gremploystartMonth +'</label>' +
                    '<label id="gremYear' +gaurantorRowIndex + '"style="display: none">'+ gremploystartYear +'</label>' +
                   '<label id="grOffice' +gaurantorRowIndex + '"style="display: none">'+ GuarantorOfficeTelNo +'</label>' +
                    '<label id="grMobile' +gaurantorRowIndex + '"style="display: none">'+ GuarantorMobileNo +'</label></td>'+
                    /*'<label id="grExt' +gaurantorRowIndex + '"style="display: none">'+ GuarantorExtId +'</label></td>' +*/
                    
                    
                    
                    
                    
                    '<td><a href="#" onclick="editGaurantorRow(this,' +gaurantorRowIndex + ')" data-toggle="modal" data-target="#modal-guarantor-info"><i class="fa fa-pencil" ></i></a>' +
                    '<a href="#" onclick="removeGaurantorRow(this,' +gaurantorRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
                    '</tr>';
                    $ ("#guarantor_info").append(newGuarantorRow);  
                    gaurantorRowIndex++;
                }else{
                	
                $('#gurantorId' + rowIndexGuarantorInfo).text(data.gurantorId); 
               	$('#grFullName' + rowIndexGuarantorInfo).text(fullName); 
               	$('#grName' + rowIndexGuarantorInfo).text(nickName);
               	$('#grdobDay' + rowIndexGuarantorInfo).text(grbirthday); 
               	$('#grdobMonth' + rowIndexGuarantorInfo).text(grbirthdayMonth); 
               	$('#grdobYear' + rowIndexGuarantorInfo).text(grbirthdayYear); 
               	$('#grNID' + rowIndexGuarantorInfo).text(nid); 
               	$('#grTin' + rowIndexGuarantorInfo).text(tin); 
               	$('#grGender' + rowIndexGuarantorInfo).text(gender); 
               	$('#grEduLevel' + rowIndexGuarantorInfo).text(educationLevel); 
               	$('#grMaritalStatus' + rowIndexGuarantorInfo).text(maritalStatus); 
               	$('#grChildNo' + rowIndexGuarantorInfo).text(noOfChildren); 
               	$('#grPassNo' + rowIndexGuarantorInfo).text(passportNo); 
               	$('#grCarOwnership' + rowIndexGuarantorInfo).text(carOwnership); 
               	$('#grDlNo' + rowIndexGuarantorInfo).text(drvLicNo); 
               	$('#grResidentialStatus' + rowIndexGuarantorInfo).text(residentialStatus); 
               	$('#grrelationship' + rowIndexGuarantorInfo).text(guarantorRelationship); 
               	$('#grprline1' + rowIndexGuarantorInfo).text(grprsntline1); 
               	$('#grprline2' + rowIndexGuarantorInfo).text(grprsntline2); 
               	$('#grprcoutnry' + rowIndexGuarantorInfo).text(grprsntcountryId); 
               	$('#grprcity' + rowIndexGuarantorInfo).text(grprsntcityId); 
               	$('#grprpostcode' + rowIndexGuarantorInfo).text(grprsntpostCode); 
               	$('#grprlivingperiodYear' + rowIndexGuarantorInfo).text(grprsntnoOfYear); 
               	$('#grprlivingperiodMonth' + rowIndexGuarantorInfo).text(grprsntnoOfMonth); 
               	$('#grpmline1' + rowIndexGuarantorInfo).text(grprmtline1); 
               	$('#grpmline2' + rowIndexGuarantorInfo).text(grprmtline2); 
               	$('#grpmcoutnry' + rowIndexGuarantorInfo).text(grprmtcountryId); 
               	$('#grpmcity' + rowIndexGuarantorInfo).text(grprmtcityId); 
               	$('#grpmpostcode' + rowIndexGuarantorInfo).text(grprmtpostCode);
               	$('#grpmlivingperiodYear' + rowIndexGuarantorInfo).text(grprmtnoOfYear);
               	$('#grpmlivingperiodMonth' + rowIndexGuarantorInfo).text(grprmtnoOfMonth);
               	$('#grdepartment' + rowIndexGuarantorInfo).text(grdepartment);
               	$('#grbusinessNature' + rowIndexGuarantorInfo).text(grbusinessNature);
               	$('#grdetails' + rowIndexGuarantorInfo).text(detailsaboutborrower);
               	$('#gremDay' + rowIndexGuarantorInfo).text(gremploystartday);
               	$('#gremMonth' + rowIndexGuarantorInfo).text(gremploystartMonth);
            	$('#gremYear' + rowIndexGuarantorInfo).text(gremploystartYear);
            	$('#grMobile' + rowIndexGuarantorInfo).text(GuarantorMobileNo); 
               	$('#grOffice' + rowIndexGuarantorInfo).text(GuarantorOfficeTelNo); 
               	
               	
               	/* $('#grRelationship' + rowIndexGuarantorInfo).text(GuarantorRelationship); */
               	 $('#grDesignation' + rowIndexGuarantorInfo).text(GuarantorDesignation); 
               	/*
               	 $('#grExt' + rowIndexGuarantorInfo).text(GuarantorExtId); */
               	 $('#grProId' + rowIndexGuarantorInfo).text(GuarantorProId); 
               	 $('#grOrgId' + rowIndexGuarantorInfo).text(grorganizationId); 
               	
                }
                resetGuarantorInfo();
                
            },
            error: function (err) {
                alert(err);
            }
        });
    }else{
    	$('#modal-guarantor-info').animate({ scrollTop: 0 }, 'slow');
    }
    	
    }
    ;
	function resetGuarantorInfo(){
    	
		removeErrorMessage('gInfo');
		
		$('#grFullName').val('');
		$('#grdobDay').val('');
		$('#grdobMonth').val('');
		$('#grdobYear').val('');
		$('#grNID').val('');
		$('#grTin').val('');
		$('#grGender').val('');
		$('#grEduLevel').val('');
		$('#grMaritalStatus').val('');
		$('#grChildNo').val('');
		$('#grPassNo').val('');
		$('#grCarOwnership').val('');
		$('#grDlNo').val('');
		$('#grResidentialStatus').val('');
		$('#grprline1').val('');
		$('#grprline2').val('');
		$('#grprcoutnry').val('');
		$('#grprcity').val('');
		$('#grprpostcode').val('');
		$('#grprlivingperiodYear').val('');
		$('#grprlivingperiodMonth').val('');
		$('#grpmline1').val('');
		$('#grpmline2').val('');
		$('#grpmcoutnry').val('');
		$('#grpmcity').val('');
		$('#grpmpostcode').val('');
		$('#grpmlivingperiodYear').val('');
		$('#grpmlivingperiodMonth').val('');
		$('#grdepartment').val('');
		$('#grbusinessNature').val('');
		$('#grdetails').val('');
		$('#gremDay').val('');
		$('#gremMonth').val('');
		$('#gremYear').val('');
		$ ("#grName").val('');
    	$ ("#grrelationship").val('');
    	$ ("#grMobile").val('');
    	/*$ ("#grExt").val('');*/
    	$ ("#grOffice").val('');
    	$ ("#grDesignation").val('');
    	$ ("#grProId").val('');
    	$ ('#grOrgId').val('');
    	$ ("#is_editGuarantorInfo").text('0');
    	$ ("#rowIndexGuarantorInfo").text('');
    	
    
    }
    ;
    
		function editGaurantorRow(i, gaurantorRowIndex){
			
    	
    	var GurantorId= $('#gurantorId'+gaurantorRowIndex).text();
    	var nickName = $ ("#grName" +gaurantorRowIndex).text();
    	
     	/*var guarantorRelationship = $ ('#grrelationship' +gaurantorRowIndex).text();*/
     	var grorganizationId = $ ('#grOrgId' +gaurantorRowIndex).text();
     	var GuarantorOfficeTelNo = $ ('#grOffice' +gaurantorRowIndex).text();
     	var GuarantorMobileNo = $ ('#grMobile' +gaurantorRowIndex).text();
     	var GuarantorDesignation = $ ('#grDesignation' +gaurantorRowIndex).text();
     	var GuarantorProId = $ ('#grProId' +gaurantorRowIndex).text();
     	/*var GuarantorExtId= $ ('#grExt' +gaurantorRowIndex).text();*/
     	var fullName = $ ("#grFullName" +gaurantorRowIndex).text();
     	var grbirthday = $ ("#grdobDay" +gaurantorRowIndex).text();
     	var grbirthdayMonth = $ ("#grdobMonth" +gaurantorRowIndex).text();
     	var grbirthdayYear = $ ("#grdobYear" +gaurantorRowIndex).text();
     	var nid = $ ("#grNID" +gaurantorRowIndex).text();
     	var tin = $ ("#grTin" +gaurantorRowIndex).text();
     	var gender = $ ("#grGender" +gaurantorRowIndex).text();
     	var educationLevel = $ ("#grEduLevel" +gaurantorRowIndex).text();
     	var maritalStatus = $ ("#grMaritalStatus" +gaurantorRowIndex).text();
     	var noOfChildren = $ ("#grChildNo" +gaurantorRowIndex).text();
     	var passportNo = $ ("#grPassNo" +gaurantorRowIndex).text();
     	var carOwnership = $ ("#grCarOwnership" +gaurantorRowIndex).text();
     	var drvLicNo = $ ("#grDlNo" +gaurantorRowIndex).text();
     	var residentialStatus = $ ("#grResidentialStatus" +gaurantorRowIndex).text();
     	var guarantorRelationship = $ ("#grrelationship" +gaurantorRowIndex).text();
     	var grprsntline1 = $ ("#grprline1" +gaurantorRowIndex).text();
     	var grprsntline2 = $ ("#grprline2" +gaurantorRowIndex).text();
     	var grprsntcountryId = $ ("#grprcoutnry" +gaurantorRowIndex).text();
     	var grprsntcityId = $ ("#grprcity" +gaurantorRowIndex).text();
     	var grprsntpostCode = $ ("#grprpostcode" +gaurantorRowIndex).text();
     	var grprsntnoOfYear = $ ("#grprlivingperiodYear" +gaurantorRowIndex).text();
     	var grprsntnoOfMonth = $ ("#grprlivingperiodMonth" +gaurantorRowIndex).text();
     	var grprmtline1 = $ ("#grpmline1" +gaurantorRowIndex).text();
     	var grprmtline2 = $ ("#grpmline2" +gaurantorRowIndex).text();
     	var grprmtcountryId = $ ("#grpmcoutnry" +gaurantorRowIndex).text();
     	var grprmtcityId = $ ("#grpmcity" +gaurantorRowIndex).text();
     	var grprmtpostCode = $ ("#grpmpostcode" +gaurantorRowIndex).text();
     	var grprmtnoOfYear = $ ("#grpmlivingperiodYear" +gaurantorRowIndex).text();
     	var grprmtnoOfMonth = $ ("#grpmlivingperiodMonth" +gaurantorRowIndex).text();
     	var grdepartment = $ ("#grdepartment" +gaurantorRowIndex).text();
     	var grbusinessNature = $ ("#grbusinessNature" +gaurantorRowIndex).text();
     	var detailsaboutborrower = $ ("#grdetails" +gaurantorRowIndex).text();
     	var gremploystartday = $ ("#gremDay" +gaurantorRowIndex).text();
     	var gremploystartMonth = $ ("#gremMonth" +gaurantorRowIndex).text();
     	var gremploystartYear = $ ("#gremYear" +gaurantorRowIndex).text();
     	/*var grprsntnoOfYear = $ ("#grprlivingperiodYear" +gaurantorRowIndex).text();*/
     	
   
     	/*console.log('office Telephone no ' + GuarantorOfficeTelNo);
     	console.log('Mobile No' + GuarantorMobileNo);
     	console.log('GuarantorExtId' + GuarantorExtId);*/
    	
        //flood fields with value
       /* $('#gurantorId').val(GurantorId);
        $('#grName').val(GuarantorName);
        $('#grRelationship').val(GuarantorRelationship);
        $('#grOrgId').val(organizationId);
        $('#grOffice').val(GuarantorOfficeTelNo);
        $('#grMobile').val(GuarantorMobileNo);
        $('#grDesignation').val(GuarantorDesignation);
        $('#grProId').val(GuarantorProId);
        $('#grExt').val(GuarantorExtId);
        $('#is_editGuarantorInfo').text(1);
        $('#rowIndexGuarantorInfo').text(gaurantorRowIndex); */
        
        
        
        
        /*
         * start 
         * flood fields with value
         */
        $('#gurantorId').val(GurantorId);
        $('#grFullName').val(fullName);
		$('#grdobDay').val(grbirthday);
		$('#grdobMonth').val(grbirthdayMonth);
		$('#grdobYear').val(grbirthdayYear);
		$('#grNID').val(nid);
		$('#grTin').val(tin);
		$('#grGender').val(gender);
		$('#grEduLevel').val(educationLevel);
		$('#grMaritalStatus').val(maritalStatus);
		$('#grChildNo').val(noOfChildren);
		$('#grPassNo').val(passportNo);
		$('#grCarOwnership').val(carOwnership);
		$('#grDlNo').val(drvLicNo);
		$('#grResidentialStatus').val(residentialStatus);
		$('#grprline1').val(grprsntline1);
		$('#grprline2').val(grprsntline2);
		$('#grprcoutnry').val(grprsntcountryId);
		$('#grprcity').val(grprsntcityId);
		$('#grprpostcode').val(grprsntpostCode);
		$('#grprlivingperiodYear').val(grprsntnoOfYear);
		$('#grprlivingperiodMonth').val(grprsntnoOfMonth);
		$('#grpmline1').val(grprmtline1);
		$('#grpmline2').val(grprmtline2);
		$('#grpmcoutnry').val(grprmtcountryId);
		$('#grpmcity').val(grprmtcityId);
		$('#grpmpostcode').val(grprmtpostCode);
		$('#grpmlivingperiodYear').val(grprmtnoOfYear);
		$('#grpmlivingperiodMonth').val(grprmtnoOfMonth);
		$('#grdepartment').val(grdepartment);
		$('#grbusinessNature').val(grbusinessNature);
		$('#grdetails').val(detailsaboutborrower);
		$('#gremDay').val(gremploystartday);
		$('#gremMonth').val(gremploystartMonth);
		$('#gremYear').val(gremploystartYear);
		
		$ ("#grName").val(nickName);
    	$ ("#grrelationship").val(guarantorRelationship);
    	$ ("#grMobile").val(GuarantorMobileNo);
    	/*$ ("#grExt").val('');*/
    	$ ("#grOffice").val(GuarantorOfficeTelNo);
    	$ ("#grDesignation").val(GuarantorDesignation);
    	$ ("#grProId").val(GuarantorProId);
    	$ ('#grOrgId').val(grorganizationId);
    	$('#is_editGuarantorInfo').text(1);
        $('#rowIndexGuarantorInfo').text(gaurantorRowIndex); 
    
        /*
         * End 
         * flood fields with value
         */
    }
    ;
    function removeGaurantorRow(i,gaurantorRowIndex){
   	 
   	 if (confirm('Want to delete?')) {
   		 
   		 
   		
	       		/*var GurantorId= $('#gurantorId'+gaurantorRowIndex).text();
	        	var GuarantorName = $ ("#grName" +gaurantorRowIndex).text();
	         	var GuarantorRelationship = $ ('#grRelationship' +gaurantorRowIndex).text();
	         	var organizationId = $ ('#grOrgId' +gaurantorRowIndex).text();
	         	var GuarantorOfficeTelNo = $ ('#grOffice' +gaurantorRowIndex).text();
	         	var GuarantorMobileNo = $ ('#grMobile' +gaurantorRowIndex).text();
	         	var GuarantorDesignation = $ ('#grDesignation' +gaurantorRowIndex).text();
	         	var GuarantorProId = $ ('#grProId' +gaurantorRowIndex).text();
	         	var GuarantorExtId= $ ('#grExt' +gaurantorRowIndex).text();
	         	var loanGuarId = $('#LoanId').val();*/
	         	
	         	/*
	         	 * Delete Start 
	         	 * 
	         	 */
	         	var GurantorId= $("#gurantorId"+gaurantorRowIndex).text();
	        	var loanGuarId = $('#LoanId').val();
	         	var fullName = $('#grFullName'+gaurantorRowIndex).text();
	            var nickName = $('#grName' +gaurantorRowIndex).text();
	            var grbirthday=$('#grdobDay'+gaurantorRowIndex).text();
	            var grbirthdayMonth=$('#grdobMonth'+gaurantorRowIndex).text();
	            var grbirthdayYear=$('#grdobYear'+gaurantorRowIndex).text();
	            var dob = $('#grdobDay'+gaurantorRowIndex).text() + "/" + $('#grdobMonth'+gaurantorRowIndex).text()+ "/" + $('#grdobYear'+gaurantorRowIndex).text();
	            console.log(dob);
	            var nid = $('#grNID'+gaurantorRowIndex).text();
	            var tin = $('#grTin'+gaurantorRowIndex).text();
	            var gender = $('#grGender'+gaurantorRowIndex).text();
	            var educationLevel = $('#grEduLevel'+gaurantorRowIndex).text();
	            var maritalStatus = $('#grMaritalStatus'+gaurantorRowIndex).text();
	            var noOfChildren = $('#grChildNo'+gaurantorRowIndex).text();
	            var passportNo = $('#grPassNo'+gaurantorRowIndex).text();
	            
	            var carOwnership = $('#grCarOwnership'+gaurantorRowIndex).text();
	            var drvLicNo = $('#grDlNo'+gaurantorRowIndex).text();
	           
	            var residentialStatus = $('#grResidentialStatus'+gaurantorRowIndex).text();
	            console.log("residential Status: "+ residentialStatus);
	            console.log("full name : "+fullName );
	            console.log("maritalStatus : "+ maritalStatus);
	        	var guarantorRelationship=$('#grrelationship'+gaurantorRowIndex).text();
	        	var GuarantorOfficeTelNo = $ ('#grOffice' +gaurantorRowIndex).text();
	         	var GuarantorMobileNo = $ ('#grMobile' +gaurantorRowIndex).text();
	         	
	        	/*
	        	 * Guarantor Personal Information
	        	 * End Declaration
	        	 */
	          //Personal Present Address
	            
	            /*
	             * Asad
	             * Modified Date: {23/5/2017}
	             */

	            var grprsntId = $('#guarantorPresentId'+gaurantorRowIndex).text();
	            var grprsntline1 = $('#grprline1' +gaurantorRowIndex).text();
	            var grprsntline2 = $('#grprline2' +gaurantorRowIndex).text();
	            var grprsntcountryId = $('#grprcoutnry'+gaurantorRowIndex).text();
	            var grprsntcityId = $('#grprcity'+gaurantorRowIndex).text();
	            var grprsntpostCode = $('#grprpostcode'+gaurantorRowIndex).text(); 
	            var grprsntnoOfYear = $('#grprlivingperiodYear'+gaurantorRowIndex).text();
	            var grprsntnoOfMonth = $('#grprlivingperiodMonth'+gaurantorRowIndex).text();
	           /* console.log($('#grprlivingperiodMonth'+gaurantorRowIndex).text();*/
	            
	          //Personal permanent Address
	            var grprmtId = $('#guarantorPermanentId'+gaurantorRowIndex).text();
	            var grprmtline1 = $('#grpmline1'+gaurantorRowIndex).text();
	            var grprmtline2 = $('#grpmline2'+gaurantorRowIndex).text();
	            var grprmtcountryId = $('#grpmcoutnry'+gaurantorRowIndex).text();
	            var grprmtcityId = $('#grpmcity'+gaurantorRowIndex).text();
	            var grprmtpostCode = $('#grpmpostcode'+gaurantorRowIndex).text();
	            var grprmtnoOfYear = $('#grpmlivingperiodYear'+gaurantorRowIndex).text();
	            var grprmtnoOfMonth = $('#grpmlivingperiodMonth'+gaurantorRowIndex).text();
	            
	            
	            //Guarantor Employment information
	           /* var GuarantorEmpId = $('#grEmploymentId').val();*/
	            var GuarantorDesignation = $ ("#grDesignation"+gaurantorRowIndex).text();
	            var grdepartment = $('#grdepartment'+gaurantorRowIndex).text();
	           // var fromDate = $('#' + modal + 'borrowerFrom' + number).val();
	            var grfromDate=$('#gremDay'+gaurantorRowIndex).text()+"/"+$('#gremMonth'+gaurantorRowIndex).text()+"/"+$('#gremYear'+gaurantorRowIndex).text();
	            var grbusinessNature = $('#grbusinessNature'+gaurantorRowIndex).text();
	            var GuarantorProId = $ ("#grProId"+gaurantorRowIndex).text();
	        	var GuarantorProfessionName = $('#grProId option[value="'+ GuarantorProId +'"]').text(); 
	        	var grorganizationId= $('#grOrgId'+gaurantorRowIndex).text();
	        	var GuarantorCompanyName=  $('#grOrgId option[value="'+ grorganizationId +'"]').text();
	            var detailsaboutborrower= $('#grdetails'+gaurantorRowIndex).text();
	            var gremploystartday=$('#gremDay'+gaurantorRowIndex).text();
	            var gremploystartMonth=$('#gremMonth'+gaurantorRowIndex).text();
	            var gremploystartYear=$('#gremYear'+gaurantorRowIndex).text();
	            
	            var guarantorFormData = {
	        			
	        			/*'gurantorId':GurantorId,
	        			'name':GuarantorName,
	        			'relation':GuarantorRelationship,
	        			'seeconderyContactNo':GuarantorOfficeTelNo,
	        			'primaryContactNo':GuarantorMobileNo,
	        			'designation':GuarantorDesignation,
	        			'professionId':GuarantorProId,
	        			'ext':GuarantorExtId,
	        			'loanId':loanGuarId,
	        			'organizationId':organizationId,
	        			'enabled':true*/
	        			'loanId': loanGuarId,

	                    'fullname': fullName,
	                    'nickName': nickName,
	                    'dob': dob,
	                    'nid': nid,
	                    'tin': tin,
	                    'gender': gender,
	                    'educationLevel': educationLevel,
	                    'maritialStatus': maritalStatus,
	                    'noOfChildren': noOfChildren,
	                    'passportNo': passportNo,
	                    
	                    'carOwnership': carOwnership,
	                    'licenseNo': drvLicNo,
	                    'seeconderyContactNo':GuarantorOfficeTelNo,
	        			'primaryContactNo':GuarantorMobileNo,
	                    'residentialStatus': residentialStatus,
	                    'gurantorRelationship':guarantorRelationship,
	                    /*
	                     * Present Address
	                     */
	                    'prsntline1': grprsntline1,
	                    'prsntline2': grprsntline2,
	                    'prsntcountryId': grprsntcountryId,
	                    'prsntcityId': grprsntcityId,
	                    'prsntpostCode': grprsntpostCode,
	                    'prsntnoOfYear': grprsntnoOfYear,
	                    'prsntnoOfMonth': grprsntnoOfMonth,

	                   /* 'isAddressSame': isAddressSame,*/


	                    'prmtline1': grprmtline1,
	                    'prmtline2': grprmtline2,
	                    
	                    'prmtcountryId': grprmtcountryId,
	                    'prmtcityId': grprmtcityId,
	                    'prmtpostCode': grprmtpostCode,
	                    'prmtnoOfYear': grprmtnoOfYear,
	                    'prmtnoOfMonth': grprmtnoOfMonth,
	                    
	                    //Guarantor Employment Information
	                    
	                    'designation': GuarantorDesignation,
	                    'department': grdepartment,
	                    'empStartDate': grfromDate,
	                    'businessNature': grbusinessNature,
	                    'organizationId': grorganizationId,
	                    'professionId': GuarantorProId,
	                    'details': detailsaboutborrower,
	                    'enabled':false
	        			};
	            
	         	
	         	
	         	/*
	         	 * Delete End
	         	 */
	         	
	         	
	         	
	         	
	         	
   
	         	
	         	
	         	/*var guarantorFormData = {
	        			'gurantorId':GurantorId,
	        			'name':GuarantorName,
	        			'relation':GuarantorRelationship,
	        			'seeconderyContactNo':GuarantorOfficeTelNo,
	        			'primaryContactNo':GuarantorMobileNo,
	        			'designation':GuarantorDesignation,
	        			'professionId':GuarantorProId,
	        			'ext':GuarantorExtId,
	        			'loanId':loanGuarId,
	        			'organizationId':organizationId,
	        			'enabled':false
	        			};*/
	         	
	         	var JsonObjectForGr = JSON.stringify(guarantorFormData);
	         	console.log("before send : "+ JsonObjectForGr);
	        	var token = $("meta[name='_csrf']").attr("content");
	            var header = $("meta[name='_csrf_header']").attr("content");
	        	
	        	$.ajax({
	                url: '/guarantor/create',
	                type: 'POST',
	                contentType: 'application/json; charset=utf-8',
	                dataType: 'json',
	                data: JsonObjectForGr,
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
        

