import { h } from 'preact';

const Fox = ({ name } = {}) => {
  const handleClick = () => alert('fox');
  return (
    <div class="fox" onClick={handleClick}>
      <h5>{name}</h5>
      <p>This page is all about {name}.</p>
    </div>
  );
};

export default Fox;
