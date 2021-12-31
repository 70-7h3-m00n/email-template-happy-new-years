import { headerLogoStyles as stls } from './headerLogoStyles'
import { Container, FullWidth, Row, Link, Column } from 'postonents'

const HeaderLogo = () => {
  return (
    <FullWidth style={stls.container}>
      <Link href='https://ipo.msk.ru/'></Link>
    </FullWidth>
  )
}

export default HeaderLogo
