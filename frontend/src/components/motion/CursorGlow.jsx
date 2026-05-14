import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const dot = document.createElement('div')
    const ring = document.createElement('div')

    dot.className = 'cursor-dot'
    ring.className = 'cursor-ring'
    document.documentElement.classList.add('has-premium-cursor')
    document.body.append(dot, ring)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let ringX = x
    let ringY = y
    let frameId = 0

    function animate() {
      ringX += (x - ringX) * 0.18
      ringY += (y - ringY) * 0.18
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frameId = requestAnimationFrame(animate)
    }

    function onPointerMove(event) {
      x = event.clientX
      y = event.clientY

      const target = event.target.closest('a, button, summary, input, textarea, select, .motion-card, .premium-button')
      ring.classList.toggle('is-hovering', Boolean(target))
    }

    function onPointerDown() {
      dot.classList.add('is-pressed')
      ring.classList.add('is-pressed')
    }

    function onPointerUp() {
      dot.classList.remove('is-pressed')
      ring.classList.remove('is-pressed')
    }

    function onPointerLeave() {
      dot.classList.add('is-hidden')
      ring.classList.add('is-hidden')
    }

    function onPointerEnter() {
      dot.classList.remove('is-hidden')
      ring.classList.remove('is-hidden')
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointerup', onPointerUp)
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    document.documentElement.addEventListener('pointerenter', onPointerEnter)
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      document.documentElement.removeEventListener('pointerenter', onPointerEnter)
      document.documentElement.classList.remove('has-premium-cursor')
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}
