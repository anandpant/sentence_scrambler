$(function() {
    $("#sortable").sortable();
    $("#notsortable").sortable("disable");
    $("#sortable").disableSelection();
});