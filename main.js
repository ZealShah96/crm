
        let clickEventFUnction = [{ "#cr97a_resourcecontributuion": "cr97a_resourcecontributuion_click_function" }, { "#yes": "yes_click_function" }]
        let hideBeforeStart=["#cr97a_specificcontribution"];


        $(document).ready(function () {
            $(clickEventFUnction).map((index, element) => {
                var selectorOfClick = Object.keys(element)[0];
                var functionOnClcik = element[selectorOfClick];
                $(selectorOfClick).click(function () {
                    debugger;
                    functions[functionOnClcik](this, selectorOfClick);
                });
            });
            $(hideBeforeStart).map((index, element) => {
               $(element).hide();
            });
        });


        let functions = {};


        functions.cr97a_resourcecontributuion_click_function = (e, selector) => {
            debugger;
            unHideOrhide("#" + $(e).attr("id"), ["583330001","583330003"], "cr97a_specificcontribution");
        }

        function unHideOrhide(sourceSelector, requiredValue, destinationSelector) {
            debugger;
            if (requiredValue.indexOf($(sourceSelector).val())==-1) {
                $('[id*="' + destinationSelector + '"]').hide();
            }
            else {
                $('[id*="' + destinationSelector + '"]').show();
            }
        }


        functions.yes_click_function = function () {
            debugger;
        }

        function unhideValue(mainSelector, value, unhideSelector) {
            debugger;
            var val = $(mainSelector).val();
            if ($(this).is(':checked') == "yes") {
                $(unhideSelector).hide();
            } else {
                $(unhideSelector).show();
            }
        }
   
