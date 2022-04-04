export default () => {
    const $searchForm = $(".js-search");
    const $searchInput = $searchForm.find(".js-search-input");
    const $searchWrap = $searchForm.children()
    const $searchBtn = $searchWrap.children("button")

    const getValue = () => $searchInput.val()

    const resets = () => setTimeout(()=> {
        $searchInput.removeClass("open")
        $searchWrap.removeClass("open")
    }, 300)

    $searchBtn.on("click", () => {
        const value = getValue()
        if (!value) {
            $searchInput.focus()
            $searchInput.toggleClass("open")
            $searchWrap.toggleClass("open")
            clearTimeout(resets)
        } 
    })

    $searchForm.on("submit", (e) => {
        e.preventDefault()
        const value = getValue()
        if (value) {
            console.log(value)
            e.target.reset()
            resets()
        }
    })

    $(document).on("click", (e) => {
        const value = getValue()
        if(!e.target.closest(".js-search") && !value) {
            resets()
        }
    })
}