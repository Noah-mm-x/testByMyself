$(function () {
    // input转p
    $('#box input').on('blur',function(e){
    	var self = $(this);
    	var index = self.data('val');
    	var val = self.val();
    	$('#box p').eq(index).html(val).show();
    	self.hide();
    	// 截图
    	html2canvas($('#box'), {
    	    onrendered: function (canvas) {
    	        $('#btn').attr('href', canvas.toDataURL());
    	        $('#btn').attr('download', 'who.png');
    	    }
    	})
    })

    // p转input
    $('#box p').on('click',function(e){
    	var self = $(this);
    	var index = self.data('val');
    	var val = self.html();
    	$('#box input').eq(index).html(val).show().focus();;
    	self.hide();
    })
   
});
