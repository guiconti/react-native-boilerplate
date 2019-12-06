import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/example-page.css';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  return (
    <div>
      <h2 className="alt-header">Example</h2>
      <p>
        This example page.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default ExamplePage;
