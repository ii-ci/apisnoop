import React from 'react'
import { connect } from 'redux-bundler-react'
import { omit } from 'lodash'
import dayjs from 'dayjs'

function ActiveTestSequence (props) {
  const {
    activeTest,
    categoryColours,
    levelColours,
    queryObject,
    doUpdateQuery
  } = props

  if (activeTest== null) return null
  let testName = Object.keys(activeTest)[0]

  return (
      <div id='test-sequence' className="mt4 tests-section">
      <h2>Sequence For <span className='fw2'>{ testName }</span></h2>
      <button onClick={handleClick}>Back</button>
      <ul className='list'>
       {activeTest[testName].map(step => {
         return <SequenceStep rawStep={ step } levelColours={levelColours} categoryColours={categoryColours}  />
       })}
    </ul>
      </div>
  )

  function handleClick () {
    var queryWithoutTest = omit(queryObject, 'test')
    doUpdateQuery(queryWithoutTest)
  }
}

function SequenceStep (props) {
  const {
    categoryColours,
    levelColours,
    rawStep
  } = props

  var step = {
    timestamp: dayjs(rawStep[0]).format('mm:ss'),
    level: rawStep[1],
    category: rawStep[2],
    method: rawStep[3],
    endpoint: rawStep[4]
  }

  return (
      <li className='' key='test_{ testItem._id }'>
      <span className='fw2 i mid-gray mr2'>{ step.timestamp}</span>
      <span className='mr1 ml1 fw2' style={{color: levelColours[step.level]}}>{step.level}</span>
      <span className='mr1 ml1 fw2' style={{color: categoryColours['category.' + step.category] }}>{step.category}</span>
      <span className='mr1 ml1 fw3 ttsc'> {step.endpoint}</span>
      </li>
  )
}

export default connect(
  'selectActiveTest',
  'selectCategoryColours',
  'selectLevelColours',
  'selectQueryObject',
  'doUpdateQuery',
  ActiveTestSequence
)
