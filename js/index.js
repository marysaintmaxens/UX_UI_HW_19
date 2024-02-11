console.log("Your index.js file is loaded correctly!");

    $("#resume").mouseenter(function(){
        $(this).css("background-color", "#617B7B");
    });

    $("#resume").mouseleave(function(){
        $(this).css("background-color", "black");
    });

    $(".readMore").mouseenter(function(){
        $(this).css("color", "#617B7B");
    });

    $(".readMore").mouseleave(function(){
        $(this).css("color", "black");
    });