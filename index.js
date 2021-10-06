//javascript//
$(myLoad);
var myLoad = function(){$('reg').click(function(e){
    e.preventDefault();
    $('form').load(this.href);
    console.log("check");
})
}