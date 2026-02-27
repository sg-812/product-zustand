import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-black py-4 px-20'>
      <div className="container">
        <nav className='flex justify-between items-center'>
          <div className="navbar_brand">
            <span className='text-3xl text-amber-300 text-shadow-amber-50 text-shadow-md'>
              <Link href="/">CRUD</Link>
            </span>
          </div>
          <div className="navbar_items">
            <ul className="flex">
              <li><Link href="/add-user" className='text-amber-50 mr-3 hover:text-amber-300'>Add User</Link></li>
              <li><Link href="/view-users" className='text-amber-50 hover:text-amber-300'>View User</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header