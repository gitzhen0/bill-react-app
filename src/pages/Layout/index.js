import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBillList } from '@/store/modules/billStore'



const Layout = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

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