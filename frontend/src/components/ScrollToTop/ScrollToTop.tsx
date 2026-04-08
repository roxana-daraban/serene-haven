import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * La navigare între rute (SPA), browserul păstrează uneori poziția de scroll.
 * Acest component aduce mereu fereastra în capul paginii la schimbarea rutei.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}
