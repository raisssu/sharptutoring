import Link from "next/link"
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row p-8 space-x-12 text-st-100">
        <Link href="/">
            Home
        </Link>
        <Link href="/tutors">
            Our Tutors
        </Link>
        <Link href="/signup">
            Sign Up
        </Link>
    </nav>
  )
}

export default Navbar