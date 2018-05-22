$("a").first().on('click', function(event) {
    event.preventDefault();
    $.ajax({
        url: "/index.html",
        data: "html",
        success: function(data) {
            $(".page-content").hide();
            $(".page-content").html(data).slideDown(1500);
            console.log("index");
        },

    })
})

$("li").first().on('click', function(event) {
    event.preventDefault();
    $.ajax({
        url: "/about.html",
        data: "html",
        success: function(data) {
            $(".container").hide();
            $(".container").html(data).slideDown(1500);
            console.log("about");
        },

    })
})

$("li:nth-child(2)").on('click', function(event) {
    event.preventDefault();
    $.ajax({
        url: "/projects.html",
        data: "html",
        success: function(data) {
            $(".container").hide();
            $(".container").html(data).slideDown(1500);
            console.log("[projects]");
        },

    })
})
