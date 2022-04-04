export default () => {
    const $select = $(".js-select-placeholder");
    const $selectItem = $(".js-select-item");
    const $selectText = $(".js-select-text");

    const country = localStorage.getItem("country")
    
    if(country) {
        $selectText.text(country)
    }

    $select.on("click", function() {
        $(this).toggleClass("active").next().toggleClass("show")
    })

    $selectItem.on("click", function() {
        const value = $(this).data("value");
        $selectText.text(value)
        localStorage.setItem("country", value)
    })

    $(document).on("click", (e) => {
        const target = e.target;

        if (!target.closest(".js-select-placeholder")) {
            $select.removeClass("active").next().removeClass("show")
        }
    })
}