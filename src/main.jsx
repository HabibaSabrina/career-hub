import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetail/JobDetails';
import { appliedJobsCart } from './loaders/getAppliedJobs';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/jobs.json`)

      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedjobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: appliedJobsCart

      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
