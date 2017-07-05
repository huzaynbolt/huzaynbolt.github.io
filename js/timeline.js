/* instantiate markDown editor for general posts */
var simplemde = new SimpleMDE({ 
    element: $("#post_input")[0],
    placeholder: "What's up?",
    toolbar: false,
    status: false,
    spellChecker: true,
});

/* instantiate markDown editor for buy/hire posts */
var simplemde = new SimpleMDE({ 
    element: $("#request_input")[0],
    placeholder: "Kindly provide information on what you want to buy/hire",
    toolbar: false,
    status: false,
    spellChecker: true,
});

/* instantiate markDown editor for sell posts */
var simplemde = new SimpleMDE({ 
    element: $("#sell_input")[0],
    placeholder: "What do you want to sell",
    toolbar: false,
    status: false,
    spellChecker: true,
});

/* instantiate markDown editor for question posts */
var simplemde = new SimpleMDE({ 
    element: $("#question_input")[0],
    placeholder: "What is your question?",
    toolbar: false,
    status: false,
    spellChecker: true,
});

/* instantiate markDown editor for portfolio posts */
var simplemde = new SimpleMDE({ 
    element: $("#portfolio_input")[0],
    placeholder: "Tell us about the project",
    toolbar: false,
    status: false,
    spellChecker: true,
});

$(function() {

    /*Collapse and expand post widget*/
    var input_field = $('.post_input_widget'),
        other_trigger = $('.post_type_nav a'),
        close_widget = $('.collapse_widget'),
        obj_tray = $('.new_post_widget');
    
    other_trigger.on("click", function() {
       expand_widget(); 
    });

    input_field.on("click", function(event) {
        expand_widget();
    });
    
    close_widget.on("click", function() {
        collapse_widget()
    });
    
    function expand_widget() {
        obj_tray.addClass("widget_expanded");
    };
    
    function collapse_widget() {
        obj_tray.removeClass("widget_expanded");
    };

    /*Category and subcategory selection control*/
    var open_subcats = $('.has_children .cat_button'),
        subcat_panel = $('.alt_panel'),
        go_back = $('.track_back'),
        mother_panel = $('.modal-body');

    open_subcats.on('click', function(e){
        if(!(mother_panel.hasClass("is_opened"))) {
            $(this).parents(".modal-body").addClass("is_opened");
            $(this).siblings(".list_children").removeClass("is_hidden");
        }
    });

    go_back.on('click', function() {
        if(mother_panel.hasClass("is_opened")) {
            mother_panel.removeClass("is_opened");
            $(".list_children").addClass("is_hidden");
        }
    });

});

