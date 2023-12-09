import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'

const Layout = () => {
  return (
    <div>
      <Outlet />
      i am layout
      <Button color="primary">test all everywhere</Button>
      <div className='purple'>
        <Button color="primary">test local</Button>
      </div>
    </div>
  )
}

export default Layout