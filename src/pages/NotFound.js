import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div
            className="flex flex-col items-center justify-center md:py-24 lg:py-32"
          >
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
            <p
              className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
            >
              <span className="text-green-400">Oops!</span> Page not found
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for still development
            </p>
            <Link
              to="/"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
              >Go home
            </Link>
          </div>
          <div className="mt-4">
            <img
              src="https://images.unsplash.com/photo-1520783077-5c05dd1fdc99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5vdCUyMGZvdW5kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound