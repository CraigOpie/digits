import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='custom-background-image'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='users'/>
              <Header inverted as='h1'>Multiple Users</Header>
              <Header inverted as='h3'>This address book enables any number of users to register and save their business
              contacts. You can only see the contacts you have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='file alternate'/>
              <Header inverted as='h1'>Contact Details</Header>
              <Header inverted as='h3'>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='calendar check outline'/>
              <Header inverted as='h1'>Multiple Users</Header>
              <Header inverted as='h3'>Each time you make contact with a contact, you can write a note that summarizes
              the conversation. This note is saved along with a timestamp with the contact.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
