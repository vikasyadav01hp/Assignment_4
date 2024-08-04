$(document).ready(function(){
    function childCheckByParent() {
        $("#parent").change(function () {
            $(this).siblings('.child').find('input[type="checkbox"]').prop('checked', $(this).is(':checked'))
        })
    }
    childCheckByParent()
    
})