function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

function getTodos(id,callback){
    jQuery.ajax({
        url:"/todo/"+id+"/items",
        success:function(data){
            callback(null,data)
        }
    });
}