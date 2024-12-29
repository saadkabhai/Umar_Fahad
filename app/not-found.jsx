import React from 'react'
import '../styles/not-found.css'
import Link from 'next/link'

export default function notfound() {
    return (
        <div className='error-container'>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href={'/'}>
                <button>Back To Home</button>
            </Link>
        </div>
    )
}