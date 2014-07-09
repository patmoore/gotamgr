function onReady() {
    var args = arguments;
    object = new Object();
    object.ready = function() {
        var result = true;
        _.each(args, function(item){
           if ( item == null || !item.ready()) {
               result = false;
           }
        });
        return result;
    };
    return object;
}