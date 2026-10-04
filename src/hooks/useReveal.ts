import { useEffect, useRef } from 'react'

/**
 * Adds .is-in to every .reveal / .mask-line descendant when it enters
 * the viewport. One observer per component subtree.
 */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll('.reveal, .mask-line')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
