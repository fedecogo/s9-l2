import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'


const Welcome = ()=> {
    return(
        <Container fluid >
            <Row >
                <Col> 
                 <Alert variant="success">
              <Alert.Heading className="fw-bold">Dove le parole prendono vita.</Alert.Heading>
              <p>
                Caro amante della lettura,
                Hai mai sognato di immergerti in mondi infiniti, di scoprire nuove storie e di arricchire la tua mente con la magia delle parole stampate su carta? La Libreria Capizzi è il luogo perfetto per trasformare questi sogni in realtà.
                In questo meraviglioso santuario per gli amanti dei libri, troverai una vasta selezione di opere letterarie che spaziano da classici senza tempo a nuove scoperte letterarie. Ogni visita alla Libreria Capizzi è un'esperienza unica e avventurosa, un viaggio attraverso generi, epoche e culture.
              </p>
              <hr />
              <p className="mb-0">
                Basta ricercare i tuoi libri preferiti
              </p>
            </Alert>
                </Col>
            </Row>
        </Container>
    )
}


export default Welcome