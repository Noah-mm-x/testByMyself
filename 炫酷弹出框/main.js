/**
 * Created by mengfanxu on 17/1/3.
 */
(function () {

    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // swal("this is msg!");
        // swal("this is msg","is or not")
        // swal("good job","is or not","success");
        // swal({
        //     title: "this is msg",
        //     text:"i will ...",
        //     timer:2000
        // });
        // swal({
        //     title: "are you sure?",
        //     text:"you will not able to...",
        //     type:"warning",
        //     showCancelButton:true,
        //     confirmButtonColor:"#abcdef",
        //     confirmButtonText:"yes",
        //     closeOnConfirm:false
        // },function () {
        //     swal("yes","is deleted","success");
        // });
        // swal({
        //         title: "Are you sure?",
        //         text: "You will not be able to recover this imaginary file!",
        //         type: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#DD6B55",
        //         confirmButtonText: "Yes, delete it!",
        //         cancelButtonText: "No, cancel plx!",
        //         closeOnConfirm: false,
        //         closeOnCancel: false
        //     },
        //     function (isConfirm) {
        //         if (isConfirm) {
        //             swal("Deleted!", "Your imaginary file has been deleted.", "success");
        //         } else {
        //             swal("Cancelled", "Your imaginary file is safe :)", "error");
        //         }
        //     });
        swal({
            title:"images",
            text:"img",
            imageUrl:"1.jpg",
        })
    }

})();