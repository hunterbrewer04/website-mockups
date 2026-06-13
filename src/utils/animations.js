// Animation utility helpers using Motion's standalone JS API
// https://motion.dev

import { animate, inView, hover, stagger, spring, scroll } from 'motion'

/**
 * Animate element with spring easing.
 * @param {Element} el
 * @param {object} keyframes - target style keyframes
 * @param {object} options - { delay?, duration? }
 */
export function springIn(el, keyframes = {}, options = {}) {
  if (!el) return
  const { delay = 0 } = options
  return animate(el,
    { opacity: [0, 1], transform: ['translateY(24px)', 'none'], ...keyframes },
    { delay, easing: spring({ stiffness: 200, damping: 26, mass: 0.8 }), duration: 0.7 }
  )
}

/**
 * Fade + scale in for grid/card items.
 */
export function scaleIn(el, { delay = 0 } = {}) {
  if (!el) return
  return animate(el,
    { opacity: [0, 1], transform: ['translateY(16px) scale(0.97)', 'none'] },
    { delay, easing: spring({ stiffness: 180, damping: 24 }), duration: 0.6 }
  )
}

/**
 * Observe a section ref and stagger-animate its direct children on scroll entry.
 * @param {Element} refEl - the section container element
 * @param {object} options
 * @param {number} options.staggerDelay - ms between each child
 * @param {string} options.childSelector - CSS selector for children (default: '> *')
 * @param {number} options.margin - rootMargin (e.g. '-80px')
 */
export function staggerInView(refEl, { staggerDelay = 100, childSelector = '> *', margin = '-50px', onEnter } = {}) {
  if (!refEl) return () => {}
  const children = refEl.querySelectorAll(childSelector)
  if (!children.length) return () => {}

  const { stop } = inView(refEl, () => {
    if (onEnter) onEnter()
    children.forEach((child, i) => {
      scaleIn(child, { delay: i * staggerDelay * 0.001 })
    })
  }, { margin })

  return stop
}

/**
 * Apply spring-based hover effect to an element.
 * @param {Element} el
 * @param {object} options
 * @param {number} options.scale - hover scale (default 1.03)
 * @param {string} options.shadow - box-shadow on hover
 * @param {string} options.borderColor - border-color on hover
 */
export function springHover(el, { scale: s = 1.03, shadow, borderColor, background } = {}) {
  if (!el) return () => {}
  const origShadow = el.style.boxShadow
  const origBorder = el.style.borderColor
  const origBg = el.style.background

  const enter = () => {
    const props = {}
    if (s !== 1) props.transform = `scale(${s})`
    if (shadow != null) props.boxShadow = shadow
    if (borderColor) props.borderColor = borderColor
    if (background) props.background = background
    // Apply immediately for snappy feel, but keep spring for transform
    if (shadow != null) el.style.boxShadow = shadow
    if (borderColor) el.style.borderColor = borderColor
    if (background) el.style.background = background
    animate(el, props, { easing: spring({ stiffness: 250, damping: 20 }), duration: 0.3 })
  }

  const leave = () => {
    const props = { transform: 'none' }
    if (shadow != null) { props.boxShadow = origShadow; el.style.boxShadow = origShadow }
    if (borderColor) { props.borderColor = origBorder; el.style.borderColor = origBorder }
    if (background) { props.background = origBg; el.style.background = origBg }
    animate(el, props, { easing: spring({ stiffness: 200, damping: 22 }), duration: 0.35 })
  }

  const { stop } = hover(el, { onStart: enter, onEnd: leave })
  return stop
}

/**
 * Apply spring-based press effect to a button/link.
 */
export function springPress(el) {
  if (!el) return () => {}

  let pressed = false
  const start = () => {
    if (pressed) return
    pressed = true
    animate(el, { transform: 'scale(0.97)' }, { easing: spring({ stiffness: 400, damping: 15 }), duration: 0.15 })
  }
  const end = () => {
    if (!pressed) return
    pressed = false
    animate(el, { transform: 'none' }, { easing: spring({ stiffness: 300, damping: 18 }), duration: 0.25 })
  }

  // Use mouse + touch events for press
  el.addEventListener('mousedown', start)
  el.addEventListener('mouseup', end)
  el.addEventListener('mouseleave', end)
  el.addEventListener('touchstart', start, { passive: true })
  el.addEventListener('touchend', end)

  return () => {
    el.removeEventListener('mousedown', start)
    el.removeEventListener('mouseup', end)
    el.removeEventListener('mouseleave', end)
    el.removeEventListener('touchstart', start)
    el.removeEventListener('touchend', end)
  }
}

/**
 * Smooth scroll-linked parallax effect.
 */
export function parallaxOnScroll(el, { speed = 0.5 } = {}) {
  if (!el) return () => {}
  return scroll(
    animate(el, { transform: ['translateY(-20px)', 'translateY(20px)'] }, { ease: 'linear' }),
    { target: el, offset: ['start end', 'end start'] }
  )
}

/**
 * Animate a counter from 0 to a number (for stat cards).
 */
export function countUp(el, { to = 0, duration = 1.5 } = {}) {
  if (!el) return
  return animate(0, to, {
    duration,
    easing: spring({ stiffness: 80, damping: 14 }),
    onUpdate: (v) => { el.textContent = Math.round(v).toString() }
  })
}
