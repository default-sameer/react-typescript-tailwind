import React from 'react'
import GithubCorner from './GithubCorner'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between p-2'>
            <h1>React Tailwind</h1>
            <div className=''>
                <ul className='flex justify-between'>
                    <GithubCorner />
                </ul>
            </div>

        </nav>
    </>
  )
}

export default Header