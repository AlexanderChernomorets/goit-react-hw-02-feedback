import PropTypes from 'prop-types';

import { Title } from './Section.styled';

function Section({ title }) {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
}