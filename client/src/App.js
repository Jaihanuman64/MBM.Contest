import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import ContestPage from './components/ContestPage';
import Dashboard from './Admin/Dashboard'
import CreateContest from './Admin/CreateContest'
import PastContest from './Admin/PastContest'
import LeaderBoard from './Admin/LeaderBoard'
/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/Dashboard',
        element : <Dashboard/>
    },
    {
        path : '/CreateContest',
        element : <CreateContest/>
    },
    {
        path : '/LeaderBoard',
        element : <LeaderBoard/>
    },
    {
        path : '/PastContest',
        element : <PastContest/>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/ContestPage',
        element : <AuthorizeUser><ContestPage></ContestPage></AuthorizeUser>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
