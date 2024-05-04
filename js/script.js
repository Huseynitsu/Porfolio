$(document).ready(function () {
    let outerCursor = $(".circle-cursor--outer");
    let innerCursor = $(".circle-cursor--inner");

    $(document).on("mousemove", function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        outerCursor.css({ left: mouseX + "px", top: mouseY + "px" });
        innerCursor.css({ left: mouseX + "px", top: mouseY + "px" });
    });

    $(".navbar").mouseleave(function () {
        $(".navbar a").css("opacity", "1");
    });

    $(".navbar a").mouseover(function () {
        $(".navbar a").not(this).css("opacity", "0.5");
        $(this).css("opacity", "1");
    });

    // Cache the header elements
    const header = $("header");

    // Store a flag to track whether the header is sticky
    let isHeaderSticky = false;

    if ($(".ham-menu").hasClass("active")) {
        header.toggleClass("bg-light");
    }

    $(window).scroll(function () {
        // Calculate the scroll position once
        const scrollTop = $(this).scrollTop();

        // Check if the scroll position is greater than 80
        const shouldBeSticky = scrollTop > 80;

        // Only update the classes if there's a change in the sticky state
        if (shouldBeSticky !== isHeaderSticky) {
            header.toggleClass("sticky", shouldBeSticky);
            isHeaderSticky = shouldBeSticky;
        }
    });

    $(".accordion").click(function () {
        $(this).toggleClass("active");
        let $accDesc = $(this).next(".accordion-desc");
        $accDesc.slideToggle();
    
        $(".accordion-desc").not($accDesc).slideUp();
        $(".accordion").not($(this)).removeClass("active");
    });

    $(".bars").click(function(){
        $(".nav-menu").toggleClass("active");
    });
});
