function advSearch(){
	var customerContactNo = [];
	var permanentAddress = [];
	var customerName =$('#advCustomerName').val();
	var customerNID =$('#advNid').val();
	var tin =$('#advTin').val();
	var tempCustomerContactNo = $('#advMobileNo').val();
	var fatherName = $('#advFatherName').val();
	var motherName = $('#advMotherName').val();
	var customerType =$('#advCustomerType').val();
	var passportNo =$('#advPassportNo').val();
	var drivingLicenseNo =$('#advDrivingLicense').val();
	var tempPermanentAddress = $('#advPermanentAddress').val();
	//array of customer contact number
	customerContactNo.push(tempCustomerContactNo);
	permanentAddress.push(tempPermanentAddress);
	var JesonAdvanceSearch = {
			'customerName' : customerName,
			'customerNID' : customerNID,
			'tin' : tin,
			'customerContactNo' : customerContactNo,
			'fatherName' : fatherName,
			'motherName' : motherName,
			'customerType' : customerType,
			'passportNo' : passportNo,
			'drivingLicenseNo' : drivingLicenseNo,
			'permanentAddress' : permanentAddress
	};
	
	var JsonObject = JSON.stringify(JesonAdvanceSearch);
	
	 var token = $("meta[name='_csrf']").attr("content");
     var header = $("meta[name='_csrf_header']").attr("content");
	
	 $.ajax({
         url: '/search/advanceCustomerSearch',
         type: 'POST',
         contentType: 'application/json; charset=utf-8',
         dataType: 'json',
         data: JsonObject,
         beforeSend: function (xhr) {
             xhr.setRequestHeader(header, token);
         },
         success: function (data) {
        	 console.log(data);
        	 $("#advSearch tbody").empty();
        	 if(data.length!==0){
        		 for(var i=0; i<data.length;i++){
        			 var n="";
        			 
        			 for(var j= 0; j<data[i].customerContactNo.length; j++){
 						 n += data[i].customerContactNo[j]+"</br>";
 					 }
        			 var css = "";
        			 var source = data[i].dbSource;
        			 if(source=="LMS")
        				 css="adv-lms";
        			 else if(source=="CBS")
        				 css="adv-cbs";
        			 
        				 $("#advSearch tbody").append("<tr class='"+css+"'><td>"
            					 +data[i].customerName+"</td><td>"+data[i].fatherName+"</td><td>"+ data[i].motherName +"</td><td>"+n+"</td><td>"+data[i].customerNID+"</td><td>"
            					 +data[i].tin+"</td><td>"+data[i].passportNo+"</td><td>"+data[i].drivingLicenseNo+"</td><td>"+data[i].permanentAddress+"</td><td>"
            					 +data[i].dbSource+"</td></tr>");
        			 
        			
        			 
        		 }
        	 }else{
        		 alert("No data found");
        	 }
        	 
         },error:function(jqXHR, exception){
         	showUnivarsalErrorMsg(jqXHR, exception);
         }
     });
}

function checkFunction(){
    if(document.getElementById("oCsName").checked==true){
    	$('#advCustomerName').val($('#hCsName').val());
    }else{
    	$('#advCustomerName').val("");
    }
    
    if(document.getElementById("oFatName").checked==true){
    	$('#advFatherName').val($('#hFatName').val());
    }else{
    	$('#advFatherName').val("");
    }
    
    if(document.getElementById("oMotName").checked==true){
    	$('#advMotherName').val($('#hMotName').val());
    }else{
    	$('#advMotherName').val("");
    }
    
    if(document.getElementById("oMobile").checked==true){
    	$('#advMobileNo').val($('#hMobile').val());
    }else{
    	$('#advMobileNo').val("");
    }
    
    if(document.getElementById("oNid").checked==true){
    	$('#advNid').val($('#hNid').val());
    }else{
    	$('#advNid').val("");
    }
    
    if(document.getElementById("oTin").checked==true){
    	$('#advTin').val($('#hTin').val());
    }else{
    	$('#advTin').val("");
    }
    
    if(document.getElementById("oPass").checked==true){
    	$('#advPassportNo').val($('#hPass').val());
    }else{
    	$('#advPassportNo').val("");
    }
    
    if(document.getElementById("oDri").checked==true){
    	$('#advDrivingLicense').val($('#hDri').val());
    }else{
    	$('#advDrivingLicense').val("");
    }
    
    if(document.getElementById("oAdd").checked==true){
    	$('#advPermanentAddress').val($('#hAdd').val());
    }else{
    	$('#advPermanentAddress').val("");
    }
   
}