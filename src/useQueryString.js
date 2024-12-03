import { useLocation, useNavigate } from 'react-router-dom'

const encodeValue = value => (value && typeof value === 'object') ? JSON.stringify(value) : value
const parseValue = value => {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

function useQueryString() {
  const navigate = useNavigate();

  const currentQueryString = new URLSearchParams(useLocation().search)
  const queryParams = [...currentQueryString.entries()].reduce(
    (qs, [key, value]) => ({...qs, [key]: parseValue(value)}),
    {}
  )

  const setQueryString = (params) => {
    const processedParams = Object.keys(params).reduce((processing, key) => {
      return {...processing, [key]: encodeValue(params[key])}
    }, {})
    const newParams = new URLSearchParams({...currentQueryString, ...processedParams})
    navigate(`?${newParams}`, { replace: true })
  }

  return [queryParams, setQueryString]
}

export default useQueryString
