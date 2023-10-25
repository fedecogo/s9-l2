import { Row,Col,Container } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class Booklist extends Component{
    render(){
        return(
            <Container>
                <Row>
                    {this.props.arrayOfBooks.map((book)=>{
                        return(
                            <Col xs={6} sm={4} lg={3} key={book.asin}>
                            <SingleBook oneBook={book}/>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        )
    }
}

export default Booklist