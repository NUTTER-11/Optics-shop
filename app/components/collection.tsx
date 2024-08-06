import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import MySlider from './MySlider';

const ParentComponent = () => {
  const sliderImages1 = ['pic.jpg', 'pic2.jpg', 'pic.jpg'];
  const sliderImages2 = ['pic.jpg', 'pic2.jpg', 'pic.jpg'];

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px', // Add margin to create space between divs
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="pic.jpg" altText="green iguana" title="Lizard" />
        </div>
        <MySlider id="slider1" images={sliderImages1} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="pic2.jpg" altText="blue iguana" title="Blue Lizard" />
        </div>
        <MySlider id="slider2" images={sliderImages2} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="pic.jpg" altText="green iguana" title="Lizard" />
        </div>
        <MySlider id="slider3" images={sliderImages1} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="pic2.jpg" altText="blue iguana" title="Blue Lizard" />
        </div>
        <MySlider id="slider4" images={sliderImages2} /> {/* Add unique id */}
      </div>
    </>
  );
};

export default ParentComponent;
