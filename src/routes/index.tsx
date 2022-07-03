import React, { useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '../modules/auth/AuthLayout'
import DashboardLayout from '../modules/dashboard/DashboardLayout'

export default function MainRoute() {
    const [isLoggedIn] = useState<boolean>(false)
    const setDefaultPath = isLoggedIn ? '/dashboard' : '/auth';
  return (
    <Routes>
        <Route 
          path="/auth/*"
          element={!isLoggedIn ? <AuthLayout/> : <Navigate to='/dashboard'/>}
          />
          <Route 
          path= "/dashbaord/*"
          element ={isLoggedIn ? <DashboardLayout/> : <Navigate to='/auth'/>}
          />
          <Route path="*" element={<Navigate to={setDefaultPath} />} />
    </Routes>
  )
}
