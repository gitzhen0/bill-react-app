import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState, useMemo } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {

  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  console.log(monthGroup)

  const [dateVisible, setDateVisible] = useState(false)

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  })


  const [currentMonthList, setMonthList] = useState([])

  const monthResult = useMemo(() => {

    // const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    // const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)

    const pay = currentMonthList === undefined ? 0 : currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = currentMonthList === undefined ? 0 : currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)


    return {
      pay,
      income,
      total: pay + income
    }

  }, [currentMonthList])

  const onConfirm = (date) => {
    setDateVisible(false)
    const formatDate = dayjs(date).format('YYYY-MM')

    setMonthList(monthGroup[formatDate])
    setCurrentDate(formatDate)
  }

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
              {currentDate}月账单
            </span>
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month