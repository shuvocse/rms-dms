var t = $('#datatable-responsive').DataTable({
	"columnDefs" : [ {
		"searchable" : false,
		"orderable" : false,
		"targets" : 0
	} ],
	"order" : [ [ 1, 'asc' ] ]
});

t.on('order.dt search.dt', function() {
	t.column(0, {
		search : 'applied',
		order : 'applied'
	}).nodes().each(function(cell, i) {
		cell.innerHTML = i + 1;
	});
}).draw();


var table = $('#datatable-responsive').DataTable();
function deleteRowOfTable(id, urlp, r) {
    console.log(urlp + id);
    if (confirm('Want to delete?')) {
        $.ajax({
            type: "GET",
            url: urlp + id,
            success: function (data) {
            	table.row(r.parentNode.parentNode).remove().draw();
            },
            error: function (jqXHR, exception) {
                showUnivarsalErrorMsg(jqXHR, exception);
            }
        });

    }
}