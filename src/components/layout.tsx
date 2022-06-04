import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer';

interface Props{
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <div className='flex flex-col h-screen'>
        <Header />
            <main className='grow flex justify-center items-center'>
                {children}
            </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout