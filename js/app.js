// navigation 
// function handleSticky() {
//     var stickyElement = $(".sticky");
//     var stickyPosition = stickyElement.offset().top;
//     var fixedPosition = $(".position-fixed-top");

//     $(window).scroll(function() {
//         var currentPosition = $(window).scrollTop();
//         if (currentPosition >= stickyPosition) {
//             stickyElement.addClass("sticky-fixed");
//             fixedPosition.removeClass("position-fixed-top");
//         } else {
//             stickyElement.removeClass("sticky-fixed");
//             fixedPosition.addClass("position-fixed-top"); 
//         }
//     });
// }

document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault();

    //Typed js
    var options = {
        strings: ['Developer', 'Programmer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        startDelay: 500,
        backDelay: 1000,
        showCursor: true,
        cusorChar: '|',
        contentType: 'html',
    }

    var typed = new Typed('#typed', options);


    //waypoints js
    var progressWaypoints = new Waypoint({
        element: document.getElementById('skills'),
        handler: function() {
            var progress_bar = document.querySelectorAll('.progress-bar');

            progress_bar[0].setAttribute('style', 'width: 80%; transition: all 1s;');
            progress_bar[1].setAttribute('style', 'width: 80%; transition: all 1s;');
            progress_bar[2].setAttribute('style', 'width: 50%; transition: all 1s;');
            progress_bar[3].setAttribute('style', 'width: 50%; transition: all 1s;');
            progress_bar[4].setAttribute('style', 'width: 50%; transition: all 1s;');
        },
        offset: '90%',
    });

    var historyWaypoints = new Waypoint({
        element: $('.history'),
        handler: function() {
            var historyContent = document.querySelectorAll('.history h3, .history h4, .history p');

            historyContent.forEach(function(element) {
                element.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');
            });
        },
        offset: '90%',
    });

    var experienceWaypoints = new Waypoint({
        element: $('.filter-controls'),
        handler: function() {
            var btnExperience = document.querySelectorAll('.filter-controls');

            btnExperience.forEach(function(element) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            });
        },
        offset: '90%',
    });

    // filterizr js
    var filterizr = new Filterizr('.filter-container', {
        layout: 'sameWidth',
        animationDuration: 0.3,
        delay: 50,
        filter: 'all',
        setupControls: true,
    });
});
