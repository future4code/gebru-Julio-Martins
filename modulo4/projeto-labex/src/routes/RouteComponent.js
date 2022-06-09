import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import ListTripsPage from '../pages/ListTripsPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../components/ErrorPage'

export default function RouteComponent() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/trips/list' element={<ListTripsPage/>} />
          <Route path='/trips/application' element={<ApplicationFormPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin/trips/list' element={<AdminHomePage />} />
          <Route path='/admin/trips/create' element={<CreateTripPage />} />
          <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
