import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Contacts } from '../../api/contact/Contacts';
import Contact from '../components/Contact';
import { Notes } from '../../api/note/Notes';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListContacts extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header inverted as="h2" textAlign="center">List Contacts</Header>
          <Card.Group>
            {this.props.contacts.map((contact, index) => <Contact key={index} contact={contact}
             notes={this.props.notes.filter(note => (note.contactId === contact._id))}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscriptionContacts = Meteor.subscribe('Contacts');
  const subscriptionNotes = Meteor.subscribe('Notes');
  return {
    contacts: Contacts.find({}).fetch(),
    notes: Notes.find({}).fetch(),
    ready: subscriptionContacts.ready() && subscriptionNotes.ready(),
  };
})(ListContacts);
