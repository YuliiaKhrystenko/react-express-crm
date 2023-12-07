import { Link } from 'react-router-dom'
import { Paths } from '../../paths'
import { CustomButton } from '../custom-button'
import styles from './index.module.css'

import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

export const Header = () => {
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
      <Space>

        <Link to={Paths.register}>
          <CustomButton icon={ <UserOutlined /> }>Register</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton icon={ <LoginOutlined/> }>Login</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  )
}
