$("#applicationType").change(function() {
	var applicationType = $("#applicationType").val();

	if (applicationType == "odCard") {
		$("#currencyType").val("local").change();
		$('#currencyType').attr('disabled', 'disabled');
		$(".condcls").hide();
		$(".intcondcls").hide();
	}else if(applicationType == ""){
		$(".condcls").hide();
		$(".intcondcls").hide();
		$("#currencyType option").removeAttr('selected');
	} else {
		$("#currencyType option").removeAttr('selected');
		$('#currencyType').removeAttr('disabled');
		$('#currencyType').val("");
	}

});

$("#currencyType").change(function() {
	console.log("hello " + $(this).val());
	var applicationType = $("#applicationType").val();
	var currencyType = $("#currencyType").val();

	if (applicationType == "creditcard" && currencyType == "Multicurrency") {
		$(".condcls").show();
		$(".intcondcls").show();
	} else if (applicationType == "creditcard" && currencyType == "local") {
		$(".condcls").hide();
		$(".intcondcls").hide();
	} else {
	}
});

$("#cardCaseEntryFrom").submit(
		function(event) {
			var customerType = $("#customerType").val();
			var applicationType = $("#applicationType").val();
			var cardType = $("#cardType").val();
			var natureOfProposal = $("#natureOfProposal").val();
			var totalLimit = $("#totalLimit").val();
			if (customerType == "" || applicationType == "" || cardType == ""
					|| natureOfProposal == "" || totalLimit == "") {
				$('#errorGen li').remove();
				$("#errorGen").append(
						'<li>Required field must have a value.</li>');
				event.preventDefault();
			}

		});
