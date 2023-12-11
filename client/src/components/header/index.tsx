import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { CustomButton } from '../custom-button'
import styles from './index.module.css'

import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/auth/authSlice'

export const Header = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const OnLogoutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('login')
  }

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={'/'}>
          <CustomButton type='ghost'>
            <Typography.Title level={1}>Employee</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {
        user ? (
          <CustomButton
            type='ghost'
            icon={<LogoutOutlined />}
            onClick={OnLogoutClick}
          >
            Logout
          </CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton icon={<UserOutlined />}>Register</CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton icon={<LoginOutlined />}>Login</CustomButton>
            </Link>
          </Space>
        )
      }
    </Layout.Header>
  )
}
