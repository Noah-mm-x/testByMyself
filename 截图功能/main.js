/**
 * Created by mengfanxu on 16/12/30.
 */
$(function () {
    print();
});
function print() {
    html2canvas($('#box'), {
        onrendered: function (canvas) {
            $('#download-button').attr('href', canvas.toDataURL());
            $('#download-button').attr('download', 'myjobdeer.png');
        }
    })
}