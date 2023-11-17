import { FC } from 'react'
//components block
import { AppBar, Title } from '.'
import { Outlet } from 'react-router-dom'

export const Layout: FC = (): JSX.Element => {
  return (
    <div>
      <AppBar>
        <Title>Vital Users</Title>
      </AppBar>

      <Outlet />
    </div>
  )
}
