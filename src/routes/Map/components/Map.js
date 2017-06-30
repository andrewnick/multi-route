import React from 'react'
import PropTypes from 'prop-types'

export const Map = ({ state, mapFailure, mapSuccess }) => (
  <div>
    <div id='map'>{state.loading ? 'Loading' : 'Done!'}</div>
    <button className='btn btn-secondary' onClick={mapFailure}>
      Fail
    </button>
    <button className='btn btn-secondary' onClick={mapSuccess}>
      Success
    </button>
  </div>
)

Map.propTypes = {
  state: PropTypes.object.isRequired,
  mapFailure: PropTypes.func.isRequired,
  mapSuccess: PropTypes.func.isRequired,
}

export default Map
