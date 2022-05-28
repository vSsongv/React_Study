import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';
  return (
    <div>
      <h1>About</h1>
      {detail && <p>detail이 true군요</p>}
    </div>
  );
};

export default About;
