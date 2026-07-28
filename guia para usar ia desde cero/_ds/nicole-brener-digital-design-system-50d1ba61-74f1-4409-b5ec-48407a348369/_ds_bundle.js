/* @ds-bundle: {"format":4,"namespace":"NicoleBrenerDigitalDesignSystem_50d1ba","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"LinkCard","sourcePath":"components/content/LinkCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"},{"name":"MarqueeBanner","sourcePath":"components/navigation/MarqueeBanner.jsx"},{"name":"SocialIconButton","sourcePath":"components/navigation/SocialIconButton.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"1055d21ac11d","components/content/Badge.jsx":"7dcdd8f84e4e","components/content/LinkCard.jsx":"a03cf8bd1557","components/forms/Button.jsx":"4ba9106766e4","components/forms/NewsletterForm.jsx":"3c3b98b11dd0","components/navigation/MarqueeBanner.jsx":"2935e7fa45a8","components/navigation/SocialIconButton.jsx":"857c31ef87c8","ui_kits/link-hub/HomeScreen.jsx":"960ee6a1af69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NicoleBrenerDigitalDesignSystem_50d1ba = window.NicoleBrenerDigitalDesignSystem_50d1ba || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  withWordmark = true,
  src = '../../assets/logo.gif'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, React.createElement('img', {
    src,
    style: {
      width: '52px',
      height: '52px',
      borderRadius: 'var(--radius-circle)',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), withWordmark && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: '-0.5px',
      color: 'var(--color-olive)'
    }
  }, 'Nicole Brener ', React.createElement('span', {
    style: {
      color: 'var(--color-terracotta)'
    }
  }, 'Digital')));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function Badge({
  children
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-block',
      background: 'var(--color-pink)',
      color: 'var(--color-ink)',
      fontWeight: 700,
      fontSize: '13px',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/LinkCard.jsx
try { (() => {
function LinkCard({
  title,
  description,
  cta,
  href,
  variant = 'terracotta',
  soon = false
}) {
  const bg = {
    terracotta: 'var(--color-terracotta)',
    olive: 'var(--color-olive)',
    pink: 'var(--color-pink)',
    white: 'var(--color-white)'
  }[variant] || 'var(--color-terracotta)';
  const color = variant === 'pink' || variant === 'white' ? 'var(--color-ink)' : 'var(--color-white)';
  const ctaColor = variant === 'white' ? 'var(--color-terracotta)' : color;
  return React.createElement('a', {
    href: href || '#',
    target: '_blank',
    rel: 'noopener',
    style: {
      background: bg,
      color,
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(14px,2.5vw,24px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 'clamp(90px,14vw,150px)',
      border: 'var(--border-width-strong) solid var(--border-strong)',
      position: 'relative',
      fontFamily: 'var(--font-body)'
    }
  }, soon && React.createElement('span', {
    style: {
      position: 'absolute',
      top: '93px',
      left: '-5px',
      background: 'var(--color-ink)',
      color: 'var(--color-cream)',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: '0.5px',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, 'Próximamente'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-card-title)'
    }
  }, title), React.createElement('div', null, React.createElement('p', {
    style: {
      fontSize: '15px',
      margin: '0 0 16px',
      opacity: variant === 'terracotta' || variant === 'olive' ? 0.9 : 0.75
    }
  }, description), React.createElement('span', {
    style: {
      fontWeight: 700,
      fontSize: '14px',
      color: ctaColor
    }
  }, cta || 'Ver más →')));
}
Object.assign(__ds_scope, { LinkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LinkCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'solid',
  onClick,
  type = 'button'
}) {
  const styles = {
    solid: {
      background: 'var(--color-terracotta)',
      color: 'var(--color-white)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: 'var(--border-width-strong) solid var(--border-strong)'
    }
  }[variant];
  return React.createElement('button', {
    type,
    onClick,
    style: {
      ...styles,
      fontWeight: 700,
      fontSize: '15px',
      padding: '14px 22px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
function NewsletterForm({
  action,
  onSubmit,
  sent
}) {
  if (sent) {
    return React.createElement('div', {
      style: {
        background: 'var(--color-pink)',
        color: 'var(--color-ink)',
        fontWeight: 700,
        fontSize: '16px',
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)'
      }
    }, '¡Gracias! Ahora sos parte de la comunidad.');
  }
  return React.createElement('form', {
    method: 'POST',
    action,
    onSubmit,
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, React.createElement('input', {
    type: 'text',
    name: 'NOMBRE',
    placeholder: 'Tu nombre',
    required: true,
    style: {
      flex: 1,
      minWidth: '120px',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      fontSize: '15px',
      fontFamily: 'var(--font-body)'
    }
  }), React.createElement('input', {
    type: 'email',
    name: 'EMAIL',
    placeholder: 'tu@email.com',
    required: true,
    style: {
      flex: 1,
      minWidth: '160px',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      fontSize: '15px',
      fontFamily: 'var(--font-body)'
    }
  }), React.createElement('button', {
    type: 'submit',
    style: {
      background: 'var(--color-terracotta)',
      color: 'var(--color-cream)',
      fontWeight: 700,
      fontSize: '15px',
      padding: '14px 22px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer'
    }
  }, 'Sumarme'));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MarqueeBanner.jsx
try { (() => {
function MarqueeBanner({
  items
}) {
  const group = key => React.createElement('div', {
    key,
    style: {
      display: 'flex',
      gap: '40px',
      paddingRight: '40px'
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement('span', {
    style: {
      color: 'var(--color-cream)',
      fontWeight: 700,
      fontSize: '15px',
      whiteSpace: 'nowrap'
    }
  }, it), React.createElement('span', {
    style: {
      color: 'var(--color-pink)',
      fontWeight: 700,
      fontSize: '15px',
      whiteSpace: 'nowrap'
    }
  }, '·'))));
  return React.createElement('div', {
    style: {
      background: 'var(--color-olive)',
      padding: '14px 0',
      overflow: 'hidden',
      borderBottom: 'var(--border-width-strong) solid var(--border-strong)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'marquee 22s linear infinite'
    }
  }, [0, 1, 2, 3].map(group)));
}
Object.assign(__ds_scope, { MarqueeBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MarqueeBanner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialIconButton.jsx
try { (() => {
function SocialIconButton({
  label,
  href,
  icon
}) {
  const icons = {
    instagram: React.createElement('svg', {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none'
    }, React.createElement('rect', {
      x: 2,
      y: 2,
      width: 20,
      height: 20,
      rx: 6,
      stroke: '#f1ecdf',
      'strokeWidth': 1.8
    }), React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 4.2,
      stroke: '#f1ecdf',
      'strokeWidth': 1.8
    }), React.createElement('circle', {
      cx: 17.3,
      cy: 6.7,
      r: 1.1,
      fill: '#f1ecdf'
    })),
    tiktok: React.createElement('svg', {
      width: 22,
      height: 22,
      viewBox: '0 0 24 24',
      fill: 'none'
    }, React.createElement('path', {
      d: 'M16 3c.5 2.4 2 3.9 4.4 4.1v3.1c-1.5 0-2.9-.4-4.1-1.2v6.3c0 3.3-2.6 5.7-5.7 5.7S4.9 18.6 4.9 15.3c0-3.2 2.7-5.7 6-5.6v3.2c-1.5-.1-2.8 1-2.8 2.5 0 1.5 1.2 2.6 2.7 2.6 1.6 0 2.9-1.2 2.9-2.9V3h2.3z',
      fill: '#f1ecdf'
    })),
    linkedin: React.createElement('svg', {
      width: 22,
      height: 22,
      viewBox: '0 0 24 24',
      fill: 'none'
    }, React.createElement('rect', {
      x: 2,
      y: 2,
      width: 20,
      height: 20,
      rx: 4,
      stroke: '#f1ecdf',
      'strokeWidth': 1.8
    }), React.createElement('rect', {
      x: 6.2,
      y: 10,
      width: 2.4,
      height: 8,
      fill: '#f1ecdf'
    }), React.createElement('circle', {
      cx: 7.4,
      cy: 6.6,
      r: 1.4,
      fill: '#f1ecdf'
    }), React.createElement('path', {
      d: 'M11.5 10h2.3v1.3c.6-.9 1.5-1.5 2.9-1.5 2.2 0 3.5 1.4 3.5 4.1V18h-2.4v-3.7c0-1.3-.5-2.1-1.6-2.1-1 0-1.7.7-1.9 1.4-.1.2-.1.5-.1.8V18h-2.4z',
      fill: '#f1ecdf'
    }))
  };
  return React.createElement('a', {
    href: href || '#',
    target: '_blank',
    rel: 'noopener',
    'aria-label': label,
    style: {
      background: 'var(--color-ink)',
      width: '52px',
      height: '52px',
      borderRadius: 'var(--radius-circle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icons[icon] || null);
}
Object.assign(__ds_scope, { SocialIconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialIconButton.jsx", error: String((e && e.message) || e) }); }

// ui_kits/link-hub/HomeScreen.jsx
try { (() => {
function HomeScreen() {
  const {
    LinkCard,
    SocialIconButton,
    MarqueeBanner,
    Logo,
    Badge
  } = window.NicoleBrenerDigitalDesignSystem_50d1ba;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-cream)',
      color: 'var(--color-ink)',
      overflowX: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px clamp(16px,5vw,40px)',
      background: 'var(--color-cream)',
      borderBottom: 'var(--border-width-strong) solid var(--border-strong)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    withWordmark: true,
    src: "../../assets/logo.gif"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@nicolebrenerdigital.com",
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--color-ink)'
    }
  }, "Contacto")), /*#__PURE__*/React.createElement(MarqueeBanner, {
    items: ["PORTFOLIO", "SERVICIOS", "CURSOS Y RECURSOS GRATIS", "LISTA DE AMAZON"]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px clamp(20px,6vw,40px) 8px',
      margin: '0 auto',
      maxWidth: 900,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sticker-sparkle.png",
    style: {
      position: 'absolute',
      top: 23,
      right: '4%',
      width: 'clamp(56px,9vw,88px)',
      zIndex: 2,
      transform: 'rotate(8deg)',
      filter: 'drop-shadow(var(--shadow-sticker))'
    }
  }), /*#__PURE__*/React.createElement(Badge, null, "MARKETING \xB7 IA \xB7 CONTENIDO \xB7 ESTRATEGIA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-tight)',
      margin: '18px 0 18px',
      color: 'var(--color-ink)'
    }
  }, "Todo lo que hago,", /*#__PURE__*/React.createElement("br", null), "en un solo lugar."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sticker-hello.png",
    style: {
      position: 'absolute',
      top: -21,
      left: 21,
      width: 62,
      height: 54,
      zIndex: 2,
      transform: 'rotate(-8deg)',
      filter: 'drop-shadow(var(--shadow-sticker))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: '60%',
      background: 'var(--color-ink)',
      opacity: 0.15,
      margin: '10px auto'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '14px clamp(20px,6vw,40px) 20px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      margin: '0 0 8px',
      color: 'var(--color-ink)'
    }
  }, "Explor\xE1"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--color-muted-ink)',
      margin: '0 0 36px'
    }
  }, "Todo mi trabajo, organizado para que encuentres lo que busc\xE1s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LinkCard, {
    title: "Portfolio",
    description: "Mis proyectos y trabajos destacados.",
    cta: "Ver proyectos \u2192",
    href: "https://nicolebrener.github.io/portfolio/",
    variant: "terracotta"
  }), /*#__PURE__*/React.createElement(LinkCard, {
    title: "Trabajemos juntos",
    description: "C\xF3mo puedo ayudarte a crecer tu marca.",
    cta: "Ver servicios \u2192",
    href: "https://nicolebrener.github.io/my-services/",
    variant: "olive"
  }), /*#__PURE__*/React.createElement(LinkCard, {
    title: "Cursos y recursos gratis",
    description: "Gu\xEDas, plantillas y clases para aprender a tu ritmo.",
    cta: "Ver m\xE1s \u2192",
    href: "https://nicolebrener.github.io/cursos-y-recursos-gratis/",
    variant: "pink"
  }), /*#__PURE__*/React.createElement(LinkCard, {
    title: "Lista de Amazon",
    description: "Lo que uso y recomiendo para trabajar y crear contenido.",
    cta: "Ver lista \u2192",
    href: "https://www.amazon.es/shop/nickibrener",
    variant: "white"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px clamp(20px,6vw,40px) 30px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-ink)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(28px,5vw,52px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--color-cream)',
      margin: '0 0 14px'
    }
  }, "Sumate a mi newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-newsletter-muted)',
      fontSize: 15,
      lineHeight: 'var(--leading-body)',
      margin: 0
    }
  }, "Tips de marketing, IA y contenido directo a tu mail. Sin spam, lo prometo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, !sent && /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Tu nombre",
    required: true,
    style: {
      flex: 1,
      minWidth: 120,
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      fontSize: 15,
      fontFamily: 'var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "tu@email.com",
    required: true,
    style: {
      flex: 1,
      minWidth: 160,
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      fontSize: 15,
      fontFamily: 'var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: 'var(--color-terracotta)',
      color: 'var(--color-white)',
      fontWeight: 700,
      fontSize: 15,
      padding: '14px 22px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Sumarme")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-pink)',
      color: 'var(--color-ink)',
      fontWeight: 700,
      fontSize: 16,
      padding: '16px 20px',
      borderRadius: 'var(--radius-md)'
    }
  }, "\xA1Gracias! Ahora sos parte de la comunidad de Nicole Brener Digital."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@nicolebrenerdigital.com",
    style: {
      color: 'var(--color-pink)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "\xBFPrefer\xEDs escribirme directo? Contactame ac\xE1 \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px clamp(20px,6vw,40px) 56px',
      maxWidth: 1180,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2-fluid)',
      margin: '0 0 26px',
      color: 'var(--color-ink)'
    }
  }, "\xA1Seguime!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "Instagram",
    href: "https://www.instagram.com/nicolebrener_digital/",
    icon: "instagram"
  }), /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "TikTok",
    href: "https://www.tiktok.com/@nicolebrener",
    icon: "tiktok"
  }), /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolebrener",
    icon: "linkedin"
  }))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--border-width-strong) solid var(--border-strong)',
      padding: '26px clamp(20px,6vw,40px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-muted-ink)'
    }
  }, "\xA9 2026 Nicole Brener Digital"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-muted-ink)'
    }
  }, "Hecho con estrategia y mucho caf\xE9")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/link-hub/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LinkCard = __ds_scope.LinkCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.MarqueeBanner = __ds_scope.MarqueeBanner;

__ds_ns.SocialIconButton = __ds_scope.SocialIconButton;

})();
