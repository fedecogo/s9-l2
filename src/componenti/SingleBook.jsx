import { Component } from "react";
import { Card} from "react-bootstrap";

class SingleBook extends Component{
    state={
        selected:false
    }
    render(){
        return(
            <Card>
                <Card.Img src={this.props.oneBook.img} style={{height:'220px'}}/>
                <Card.Body>
                    <Card.Title>{this.props.oneBook.title}</Card.Title>
                    <Card.Text className="text-truncate">{this.props.oneBook.price}</Card.Text>
                </Card.Body>
                    

            </Card>
        )
    }
}

export default SingleBook 



