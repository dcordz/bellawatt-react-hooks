import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

export default function useGoogleAnalytics(analyticsId) {
  ReactGA.initialize(analyticsId)

  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  }, [location.pathname])
}
