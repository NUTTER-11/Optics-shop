import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import MySlider from './MySlider';

const ParentComponent = () => {
  const sliderImages1 = ['/sunglasses2.jpg', '/sunglasses3.jpg', '/sunglasses4.jpg', '/sunglasses5.jpg', '/sunglasses6.jpg'];
  const sliderImages2 = ['/Goggles2.jpg', '/Goggles3.jpg', '/Goggles4.jpg', '/Goggles5.jpg', '/Goggles6.jpg'];
  const sliderImages3 = ['/Lenslessglasses2.jpg', '/Lenslessglasses3.jpg', '/Lenslessglasses4.jpg', '/Lenslessglasses5.jpg', '/Lenslessglasses6.jpg'];
  const sliderImages4 = ['/Bug-eyeglasses2.jpg', '/Bug-eyeglasses3.jpg', '/Bug-eyeglasses4.jpg', '/Bug-eyeglasses2.jpg', '/Bug-eyeglasses6.jpg'];

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px', // Add margin to create space between divs
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="sunglasses1.jpg" altText="glasses" title="Sunglasses" />
        </div>
        <MySlider id="slider1" images={sliderImages1} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="Goggles1.jpg" altText="blue iguana" title="Goggles" />
        </div>
        <MySlider id="slider2" images={sliderImages2} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="Lenslessglasses1.jpg" altText="Lensless glasses." title="Lensless glasses." />
        </div>
        <MySlider id="slider3" images={sliderImages3} /> {/* Add unique id */}
      </div>
      <div style={containerStyle}>
        <div style={{ marginLeft: '-19px', padding: '1px' }}>
          <ActionAreaCard image="Bug-eyeglasses1.jpg" altText="blue iguana" title="Bug-eyeglasses" />
        </div>
        <MySlider id="slider4" images={sliderImages4} /> {/* Add unique id */}
      </div>
    </>
  );
};

export default ParentComponent;
