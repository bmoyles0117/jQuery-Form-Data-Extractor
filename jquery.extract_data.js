$.fn.extend({
    extract_data    : function() {
        var data_set = {};
    
        $('input[name], textarea[name], select[name]', this).each(function() {
            data_set[$(this).attr('name')] = $(this).val();
        });
    
        $(':checkbox[name]', this).each(function() {
            data_set[$(this).attr('name')] = $(this).attr('checked') ? 1 : 0;
        });
    
        $(':radio[name]:checked', this).each(function() {
            data_set[$(this).attr('name')] = $(this).val();
        });
    
        return data_set;
    }
});