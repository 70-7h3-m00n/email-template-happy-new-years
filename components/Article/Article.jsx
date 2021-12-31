import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}></div>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
