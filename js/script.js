/* =========================================================
   LANDING PAGE — NICOLE BRENER
   JS vanilla — sin dependencias externas
   ========================================================= */

function __initSitio() {
  /* ---------- Menú mobile (hamburguesa) ---------- */
  var navToggle = document.querySelector(".nav__toggle");
  var navMobileMenu = document.querySelector(".nav__mobile-menu");

  if (navToggle && navMobileMenu) {
    navToggle.addEventListener("click", function () {
      navMobileMenu.classList.toggle("activo");
      var expandido = navMobileMenu.classList.contains("activo");
      navToggle.setAttribute("aria-expanded", expandido ? "true" : "false");
    });

    // cerrar el menú mobile al clickear un link de ancla
    navMobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMobileMenu.classList.remove("activo");
      });
    });
  }

  /* ---------- Modales (recursos + curso) ----------
     Cada botón "Lo quiero" / "Anotate en la lista de espera" tiene
     data-abrir-modal="id-del-modal" y cada modal tiene id="id-del-modal".
  */
  var botonesAbrirModal = document.querySelectorAll("[data-abrir-modal]");
  var overlays = document.querySelectorAll(".modal-overlay");
  var elementoActivoAntesDeModal = null;

  function abrirModal(id) {
    var overlay = document.getElementById(id);
    if (!overlay) return;
    elementoActivoAntesDeModal = document.activeElement;
    overlay.classList.add("activo");
    document.body.style.overflow = "hidden";
    var cerrar = overlay.querySelector(".modal__cerrar");
    if (cerrar) cerrar.focus();
  }

  function cerrarModal(overlay) {
    overlay.classList.remove("activo");
    document.body.style.overflow = "";
    if (elementoActivoAntesDeModal) {
      elementoActivoAntesDeModal.focus();
    }
  }

  botonesAbrirModal.forEach(function (boton) {
    boton.addEventListener("click", function () {
      abrirModal(boton.getAttribute("data-abrir-modal"));
    });
  });

  overlays.forEach(function (overlay) {
    // click en el fondo oscuro cierra el modal
    overlay.addEventListener("click", function (evento) {
      if (evento.target === overlay) {
        cerrarModal(overlay);
      }
    });

    // botón de cerrar (la X)
    var botonCerrar = overlay.querySelector(".modal__cerrar");
    if (botonCerrar) {
      botonCerrar.addEventListener("click", function () {
        cerrarModal(overlay);
      });
    }
  });

  // cerrar con tecla ESC
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      overlays.forEach(function (overlay) {
        if (overlay.classList.contains("activo")) {
          cerrarModal(overlay);
        }
      });
    }
  });

  /* ---------- Popup newsletter automático (a los 30s, una vez por sesión) ---------- */
  var popupNewsletter = document.getElementById("modal-popup-newsletter");
  if (popupNewsletter && !sessionStorage.getItem("popupNewsletterMostrado")) {
    setTimeout(function () {
      var hayModalAbierto = document.querySelector(".modal-overlay.activo");
      if (!hayModalAbierto) {
        abrirModal("modal-popup-newsletter");
        sessionStorage.setItem("popupNewsletterMostrado", "true");
      }
    }, 30000);
  }

  /* ---------- Formularios de newsletter: mensaje de agradecimiento in situ ----------
     Los forms apuntan a un iframe oculto (target="brevo-hidden-iframe") para que el
     envío a Brevo no navegue la página; al enviarlos mostramos un mensaje de gracias
     directamente en el mismo lugar del formulario.
  */
  document.querySelectorAll("[data-newsletter-form]").forEach(function (form) {
    form.addEventListener("submit", function () {
      var wrap = form.closest("[data-newsletter-wrap]");
      if (!wrap) return;
      setTimeout(function () {
        wrap.innerHTML =
          '<p style="font-weight:700; font-size:18px; margin:0 0 6px;">¡Gracias por sumarte! 🎉</p>' +
          '<p style="margin:0;">Te va a encantar todo lo que tengo para contarte.</p>';
      }, 400);
    });
  });

  /* ---------- Tabs del preview de páginas (curso) ---------- */
  var previewTabs = document.querySelectorAll("[data-preview-tab]");
  var previewPanels = document.querySelectorAll("[data-preview-panel]");

  previewTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var destino = tab.getAttribute("data-preview-tab");

      previewTabs.forEach(function (t) {
        var activo = t === tab;
        t.classList.toggle("activo", activo);
        t.setAttribute("aria-selected", activo ? "true" : "false");
      });

      previewPanels.forEach(function (panel) {
        var activo = panel.getAttribute("data-preview-panel") === destino;
        panel.classList.toggle("activo", activo);
        if (activo && panel.__iniciarAutoScroll) panel.__iniciarAutoScroll();
      });
    });
  });

  /* ---------- Toggle de detalle en recurso-card (mobile) ---------- */
  document.querySelectorAll("[data-toggle-detalle]").forEach(function (boton) {
    boton.addEventListener("click", function (evento) {
      evento.stopPropagation();
      var card = boton.closest(".recurso-card");
      if (!card) return;
      var expandida = card.classList.toggle("expandida");
      boton.setAttribute("aria-expanded", expandida ? "true" : "false");
      if (!expandida) {
        boton.blur();
      }
    });
  });

  /* ---------- Auto-scroll suave en preview de curso (desktop) ---------- */
  document.querySelectorAll(".curso__preview-panel").forEach(function (panel) {
    var iframe = panel.querySelector(".curso__preview-iframe");
    if (!iframe) return;
    var dir = 1;
    var raf = null;
    var pausado = false;

    function paso() {
      raf = null;
      if (!panel.classList.contains("activo") || pausado) return;
      var maxScroll = panel.scrollHeight - panel.clientHeight;
      if (maxScroll > 0) {
        var actual = panel.scrollTop + dir * 1.6;
        if (actual >= maxScroll) {
          actual = maxScroll;
          dir = -1;
        } else if (actual <= 0) {
          actual = 0;
          dir = 1;
        }
        panel.scrollTop = actual;
      }
      raf = requestAnimationFrame(paso);
    }

    panel.__iniciarAutoScroll = function () {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paso);
    };

    panel.addEventListener("wheel", function () {
      pausado = true;
      clearTimeout(panel.__pausaTimeout);
      panel.__pausaTimeout = setTimeout(function () { pausado = false; }, 2500);
    });

    iframe.addEventListener("load", panel.__iniciarAutoScroll);
    if (panel.classList.contains("activo")) panel.__iniciarAutoScroll();
  });

  /* ---------- Carrusel de recursos (mobile) ---------- */
  var trackRecursos = document.querySelector("[data-carrusel-track]");
  var flechaPrev = document.querySelector("[data-carrusel-prev]");
  var flechaNext = document.querySelector("[data-carrusel-next]");

  if (trackRecursos && flechaPrev && flechaNext) {
    function desplazarCarrusel(direccion) {
      var card = trackRecursos.querySelector(".recurso-card");
      if (!card) return;
      var distancia = card.getBoundingClientRect().width + 16;
      trackRecursos.scrollBy({ left: direccion * distancia, behavior: "smooth" });
    }

    flechaPrev.addEventListener("click", function () {
      desplazarCarrusel(-1);
    });
    flechaNext.addEventListener("click", function () {
      desplazarCarrusel(1);
    });
  }

  /* ---------- Animaciones sutiles al hacer scroll ---------- */
  var elementosReveal = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && elementosReveal.length) {
    var observer = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elementosReveal.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // fallback: si no hay soporte, mostrar todo directamente
    elementosReveal.forEach(function (el) {
      el.classList.add("visible");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", __initSitio);
} else {
  __initSitio();
}
