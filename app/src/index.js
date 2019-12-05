import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Container, Header, Image } from 'semantic-ui-react';

class SquareImage extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content className='square-image'>
          <Image src={this.props.image} fluid />
        </Card.Content>
        <Card.Content>
          <Card.Header>Header</Card.Header>
          <Card.Meta>Meta</Card.Meta>
          <Card.Description>Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          Extra
        </Card.Content>
      </Card>
    );
  }
}

class SquareBackgroundImage extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content className='square-image' style={{ background: `url(${this.props.image}) center no-repeat` }} />
        <Card.Content>
          <Card.Header>Header</Card.Header>
          <Card.Meta>Meta</Card.Meta>
          <Card.Description>Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          Extra
        </Card.Content>
      </Card>
    );
  }
}

class SquareImageDemo extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Square Images</Header>

        <Card.Group>
          { ['./images/s-l300.jpg',
             './images/unusual_sarcasm_notice2-300x150.jpg'].map((image) => <SquareImage image={image} />) }
        </Card.Group>

        <Header as='h1'>Square Background Images</Header>

        <Card.Group>
          { ['./images/s-l300.jpg',
            './images/unusual_sarcasm_notice2-300x150.jpg'].map((image) => <SquareBackgroundImage image={image} />) }
        </Card.Group>
      </Container>
    );
  }
}

ReactDOM.render(<SquareImageDemo />, document.getElementById('root'));