import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Outlet />
      i am layout
    </div>
  )
}

export default Layout