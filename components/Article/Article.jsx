import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <div style={stls.text}>
              <p style={stls.pLead}>
                Новый год - <br />
                Время светлых надежд, ожидания чуда, <br />
                предвкушения перемен ...
              </p>
              <p style={stls.p}>
                Время, когда мы начинаем верить в сказки и с замиранием <br />{' '}
                сердца ждать чего-то прекрасного ... <br /> Время, когда
                случается все самое доброе и происходит <br /> только хорошее
                ...
              </p>
              <p style={stls.p}>
                Пусть в новом году успех сопутствует вам в любом деле <br />и
                все мечты станут реальностью! <br /> Пусть в Вашем доме всегда
                живут счастье <br /> и уют, согласие и любовь!
              </p>
              <p style={stls.p}>
                Поздравляем вас с наступающим <br /> Новым Годом и Рождеством!
              </p>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
