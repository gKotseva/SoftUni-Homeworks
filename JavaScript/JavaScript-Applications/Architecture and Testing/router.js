export function initialize(links) {
    document.querySelector('nav').addEventListener('click', onNavigate)

    let main = document.getElementById('main')

    let context = {
        showSection,
        goTo,
        updateNavBar
    }
    return context

    function showSection(section) {
        main.replaceChildren(section)
    }

    function onNavigate(event) {
        event.preventDefault()

        let target = event.target

        if (target.tagName === 'IMG') {
            target = target.parentElement
        }

        if (target.tagName === 'A') {
            let url = new URL(target.href)
            goTo(url.pathname)
        }
    }

    function goTo(name, ...params) {
        let handler = links[name]

        if (typeof (handler) === 'function') {
            handler(context, ...params)
        }

    }

        function updateNavBar() {
        let user = JSON.parse(sessionStorage.getItem('user'))

        if (user) {
            document.querySelectorAll('.user').forEach(e => e.style.display = 'block')
            document.querySelectorAll('.guest').forEach(e => e.style.display = 'none')
        } else {
            document.querySelectorAll('.user').forEach(e => e.style.display = 'none')
            document.querySelectorAll('.guest').forEach(e => e.style.display = 'block')
        }
    }
}