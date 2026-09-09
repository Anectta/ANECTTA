/**
 * ANECTTA - Global Navigation & Mobile Drawer Manager
 * Controla o drawer mobile e eventos de navegação em todas as páginas
 */
(function() {
  function initNav() {
    const openBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("mobile-menu-close");
    const navDrawer = document.getElementById("mobile-nav-drawer");

    if (openBtn && navDrawer) {
      openBtn.addEventListener("click", function() {
        navDrawer.classList.remove("translate-x-full");
      });
    }

    if (closeBtn && navDrawer) {
      closeBtn.addEventListener("click", function() {
        navDrawer.classList.add("translate-x-full");
      });
    }

    document.querySelectorAll(".mobile-nav-link").forEach(function(link) {
      link.addEventListener("click", function() {
        if (navDrawer) {
          navDrawer.classList.add("translate-x-full");
        }
      });
    });

    // Navegação suave com compensação precisa da altura do cabeçalho sticky
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener("click", function(e) {
        var targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          var targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            var header = document.querySelector("header");
            var headerHeight = header ? header.offsetHeight : 112;
            var targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: targetPos,
              behavior: "smooth"
            });
            if (history.pushState) {
              history.pushState(null, null, targetId);
            }
          }
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }
})();
