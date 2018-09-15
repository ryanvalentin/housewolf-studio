import * as React from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react';
import { menuItems } from '../layouts';

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

export default (props: IndexPageProps) =>
    <div>
        <Segment vertical inverted textAlign='center' className='masthead'>
            <Container text>
                <Header inverted as='h1'>Knight's Sky</Header>
                <Header inverted as='h3'>
                    Survive the Luftwaffe's annihilation in the skies above Europe.
                </Header>
                <Button primary size='huge'>
                    Coming soon
                </Button>
            </Container>
        </Segment>

        <Segment vertical className='stripe'>
            <Grid stackable verticalAlign='middle' className='container'>
                <Grid.Row>
                    <Grid.Column width='8'>
                        <Header>Lorem ipsum</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                        <Header>Dolor sit amet</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                    </Grid.Column>
                    <Grid.Column width='6' floated='right'>
                        {/* TODO replace with a pretty GIF */}
                        <Header>Lorem ipsum</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                        <Header>Dolor sit amet</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        {/* Key features */}
        <Segment vertical className='stripe alternate feature'>
            <Grid columns='3' textAlign='center' divided relaxed stackable className='container'>
                <Grid.Row>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard'></Icon>
                            A kind of magic!
            </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard'></Icon>
                            A kind of magic!
            </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard'></Icon>
                            A kind of magic!
            </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>;
