import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 950)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`page-loader ${isLoading ? '' : 'is-hidden'}`} aria-hidden={!isLoading}>
      <div className="loader-mark">X</div>
      <div className="loader-line">
        <span />
      </div>
      <p>Preparing Xitamin growth system</p>
    </div>
  )
}
