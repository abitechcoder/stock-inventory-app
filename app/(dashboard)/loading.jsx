import React from 'react'

const loading = () => {
  return (
    <div className="h-[90vh] grid place-items-center">
        <div className="grid place-items-center text-center">
            <img src="/spinner.gif" alt="Loading indicator" className="w-[50px] h-[50px]"/>
            <p className="text-foreground">loading data, please wait...</p>
        </div>
    </div>
  )
}

export default loading