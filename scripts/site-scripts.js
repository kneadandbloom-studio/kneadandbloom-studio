  ;(function () {
    const toggle = document.querySelector('.nav-toggle')
    const links = document.querySelector('.nav-links')
    if (!toggle || !links) return

    function openMenu() {
      toggle.classList.add('is-open')
      links.classList.add('is-open')
      toggle.setAttribute('aria-expanded', 'true')
      toggle.setAttribute('aria-label', 'Close menu')
      document.body.classList.add('nav-open')
    }

    function closeMenu() {
      toggle.classList.remove('is-open')
      links.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open menu')
      document.body.classList.remove('nav-open')
    }

    function toggleMenu() {
      links.classList.contains('is-open') ? closeMenu() : openMenu()
    }

    // Toggle on button click
    toggle.addEventListener('click', toggleMenu)

    // Close when a nav link is tapped (SPA-style anchor or page nav)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu)
    })

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu()
    })

    // Close when clicking outside the nav
    document.addEventListener('click', function (e) {
      if (!e.target.closest('nav')) closeMenu()
    })
  })()
