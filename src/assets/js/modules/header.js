export default () => {
    const $headerBurger = $(".js-header__burger");
    const $headerTopRight = $(".js-header__top-right");

    $headerBurger.on("click", () => {
        $(this).toggleClass("active");
        $headerTopRight.toggleClass("active");
    })

    $(document).on("click", (e) => {
        const target = e.target
        
        if (!target.closest(".js-header__burger") 
            && !target.closest(".js-select-placeholder")
            && !target.closest(".js-select-item")) {
            setTimeout(() => {
                $headerBurger.removeClass("active")
                $headerTopRight.removeClass("active");
            }, 500)
        }
    })
}