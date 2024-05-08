import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

// TOOD: This is honestly probably good?
// Some minor styling to fit the Vogue theme but other than that I'm pretty
// content with how it looks off the rip

function Sidebar() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>New YouTube Video</ListGroup.Item>
      <ListGroup.Item>Summer Styling!</ListGroup.Item>
      <ListGroup.Item>Can't believe I thought of this new dress idea</ListGroup.Item>
      <ListGroup.Item>Thanks for celebrating 10000 followers with me <span role='img' aria-label='Celebration Emoji'>🥳</span></ListGroup.Item>
    </ListGroup>
  );
}

export default Sidebar;