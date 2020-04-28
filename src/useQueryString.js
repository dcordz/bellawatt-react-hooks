import {useLocation, useHistory} from 'react-router-dom'

function useQueryString() {
  const currentQueryString = new URLSearchParams(useLocation().search)
  const queryParams = [...currentQueryString.entries()].reduce(
    (qs, [key, value]) => ({...qs, [key]: JSON.parse(value)}),
    {}
  )
  const history = useHistory()

  const setQueryString = (params) => {
    const processedParams = Object.keys(params).reduce((processing, key) => {
      return {...processing, [key]: JSON.stringify(params[key])}
    }, {})
    const newParams = new URLSearchParams({...currentQueryString, ...processedParams})
    history.replace(`?${newParams}`)
  }

  return [queryParams, setQueryString]
}

export default useQueryString
