$(document).ready(function () {
    function previewLogo() {

        var logoPreview = '<img style="width:100%" src="' + URL.createObjectURL($("#UploadLogo")[0].files[0]) + '" />';
        $("#imagePreview").empty();
        $("#imagePreview").append(logoPreview);

    }
});




