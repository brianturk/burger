
$(document).ready(function () {
    $('#burger').focus();

    $(window).resize(function () {
        if ($(window).width() < 500) {
            $("#addBurger").html('Add&nbsp&nbsp&nbsp<i class="fas fa-hamburger"></i>');
        } else {
            $("#addBurger").html('Add Da Burger&nbsp&nbsp&nbsp<i class="fas fa-hamburger"></i>');
        }
    })
    
    $("#addBurger").on("submit", function (e) {
        e.preventDefault();
        var allValues = {
            burgerName: $("#burger").val()
        };
        $.post("/api/addBurger", allValues)
                    .then(function (data) {
                        location.reload();
                    });
    })


    $(document).on('mouseenter','.notEaten',function() {
        let buttonId = '#devourBtn-' + $(this).attr('data-item');

        if ($(buttonId).length === 0) {
             makeDevourButton($(this));
        }
    })

    $(document).on('mouseleave','.notEaten',function() {
            $('#devourBtn-' + $(this).attr('data-item')).remove();
    })


    function makeDevourButton (element) {
        let itemLeft = element.width() - element.position().left - 11;
        let newB = $('<button>');
        newB.attr('data-item',element.attr('data-item'));
        newB.css('position','absolute');
        newB.text('Devour');
        newB.attr('type','button');
        newB.attr('class','btn-info devour');
        newB.attr('id','devourBtn-' + element.attr('data-item'))
        newB.css('left',itemLeft + 'px');
        element.append(newB)
    }


    //For touchscreen?
    $(document).on("click",".notEaten", function() {
        let buttonId = '#devourBtn-' + $(this).attr('data-item');

        if (!$(buttonId).data('clicked') && ($(buttonId).length === 0)) {
            makeDevourButton($(this));
        } else if ($(buttonId).data('clicked')) {
            $('#eatenList').append($(buttonId).parent());
            $(buttonId).remove();
        }
    });


    $(document).on('click','.devour',function() {
        $(this).data('clicked',true);
    })
});


