import React from 'react';

const containerStyle = {
  display: 'flex',
  height: '100vh',
};

const leftColumnStyle = {
  width: '20%',
  minWidth: '180px',
  background: '#f4f4f4',
  padding: '1rem',
  boxSizing: 'border-box',
  borderRight: '1px solid #e0e0e0',
};

const rightColumnStyle = {
  width: '80%',
  padding: '1rem',
  boxSizing: 'border-box',
};

export function MainPageLayout({ left, right }) {
  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        {left}
      </div>
      <div style={rightColumnStyle}>
        {right}
      </div>
    </div>
  );
}

export default MainPageLayout;