"use client"
import React from 'react'
import { AlertTriangle } from 'lucide-react'

const Error = () => {
  return (
    <div className="h-full grid place-items-center">
        <div className="grid place-items-center text-center">
            <AlertTriangle className="text-red-600" size={100}/>
            <p className="text-foreground">Sorry, error occured while fetching data.</p>
            <p className="text-foreground">Check your internet and refresh.</p>
        </div>
    </div>
  )
}

export default Error;