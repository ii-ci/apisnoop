import React from 'react'
import { connect } from 'redux-bundler-react'
import UseragentSearchBar from './useragent-search-bar'
import UseragentSearchResults from './useragent-search-results'
import UseragentsActiveFilter from './useragents-active-filter'


function UseragentSearchContainer (props) {
  const {
    useragentsResource
  } = props

  if (useragentsResource == null || useragentsResource.length === 0) return null

  return (
    <div id='useragent-search'>
      <UseragentSearchBar />
      <UseragentSearchResults />
      <UseragentsActiveFilter />
    </div>
  )
}
export default connect(
  'selectUseragentsResource',
  UseragentSearchContainer
)
