import React from 'react'
import {useRoutes}  from 'react-router-dom'
import { routes } from '../utils/routes'

function useRoutesWraper() {
  return useRoutes(routes)
}

export default useRoutesWraper