export default () => {
    const $nav = $(".js-nav");
    const linkText = $nav.attr("data-linkText");
    const linkTextAll = $nav.attr("data-linkTextAll");
    const menu = $nav.find('ul.navmenu')

    const params = {
        showOnHover: true,
        linkText: linkText,
        linkTextAll: linkTextAll,
        popupClass: 'nav-dropdown'
    }

    menu.flexMenu(params);

    let isInit = false

    $(window).on("load resize", function() {
        const width = $(this).width()
        if(width > 769 && isInit) {
            $('[data-undo="true"]').find("ul.navmenu").flexMenu(params)
            isInit = false
        }

        if(width < 769 && !isInit) {
            $('[data-undo="true"]').find("ul.navmenu").flexMenu({undo: true})
            isInit = true
        }
    })
}