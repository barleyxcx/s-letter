// $(document).ready(function() {
//     $('.container-body').scroll(function() {
//         var scrollPosition = $('.container-body').scrollTop();

//         // Define thresholds where you want to change the background image
//         var threshold1 = 300; // Example threshold
//         var threshold2 = 500; // Example threshold
//         var threshold2 = 800; // Example threshold

//         // Example conditions to change background images of body
//         if (scrollPosition < threshold1) {
//             $('body').css('background-image', 'url("images/bg.jpg")');
//         } else if (scrollPosition < threshold2) {
//             $('body').css('background-image', 'url("images/bg2.jpg")');
//         } else {
//             $('body').css('background-image', 'url("images/bg3.jpg")');
//         }
//     });
// });

$(document).ready(function() {
    $('.container-body').scroll(function() {
        var scrollPosition = $('.container-body').scrollTop();

        // Define thresholds where you want to change the background image
        var threshold1 = 500; // Example threshold
        var threshold2 = 1000; // Example threshold
        var threshold3 = 1500; // Example threshold
        var threshold4 = 2500; // Example threshold
        var threshold5 = 3500; // Example threshold
        var threshold6 = 4000; // Example threshold
        var threshold7 = 5000; // Example threshold
        var threshold8 = 5500; // Example threshold
        var threshold9 = 6500; // Example threshold
        var threshold10 = 7000; // Example threshold
        var threshold11 = 7800; // Example threshold
        var threshold12 = 8500; // Example threshold
        var threshold13 = 9000; // Example threshold
        var threshold14 = 9900; // Example threshold
        var threshold15 = 10200; // Example threshold
        var threshold16 = 11000; // Example threshold
        var threshold17 = 12000; // Example threshold





        // Example conditions to change background images of body
        if (scrollPosition < threshold1) {
            $('body').css('background-image', 'url("images/bg1.jpg")');
        } else if (scrollPosition < threshold2) {
            $('body').css('background-image', 'url("images/bg2.jpg")');
        } else if (scrollPosition < threshold3) {
            $('body').css('background-image', 'url("images/bg3.jpg")');
        } else if (scrollPosition < threshold4) {
            $('body').css('background-image', 'url("images/bg4.jpg")');
        } else if (scrollPosition < threshold5) {
            $('body').css('background-image', 'url("images/bg5.jpg")');
        } else if (scrollPosition < threshold6) {
            $('body').css('background-image', 'url("images/bg6.jpg")');
        } else if (scrollPosition < threshold7) {
            $('body').css('background-image', 'url("images/bg7.jpg")');
        } else if (scrollPosition < threshold8) {
            $('body').css('background-image', 'url("images/bg8.jpg")');
        } else if (scrollPosition < threshold9) {
            $('body').css('background-image', 'url("images/bg9.jpg")');
        } else if (scrollPosition < threshold10) {
            $('body').css('background-image', 'url("images/bg10.jpg")');
        } else if (scrollPosition < threshold11) {
            $('body').css('background-image', 'url("images/bg11.jpg")');
        } else if (scrollPosition < threshold12) {
            $('body').css('background-image', 'url("images/bg12.jpg")');
        } else if (scrollPosition < threshold13) {
            $('body').css('background-image', 'url("images/bg13.jpg")');
        } else if (scrollPosition < threshold14) {
            $('body').css('background-image', 'url("images/bg14.jpg")');
        }
        else if (scrollPosition < threshold15) {
            $('body').css('background-image', 'url("images/bg15.jpg")');
        }
        else if (scrollPosition < threshold16) {
            $('body').css('background-image', 'url("images/bg16.jpg")');
        }
        else if (scrollPosition < threshold17) {
            $('body').css('background-image', 'url("images/bg17.jpg")');
        }
        
         else {
            $('body').css('background-image', 'url("images/default-bg.jpg")');
        }
    });
});
