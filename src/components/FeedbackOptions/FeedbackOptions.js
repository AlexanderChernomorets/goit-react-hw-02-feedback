import React from 'react';
import PropTypes from 'prop-types';
import { Button, OptionsContainer } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsNames = Object.keys(options);
  return (
    <OptionsContainer>
      {optionsNames.map(a => {
        return (
          <Button key={a} type="button" name={a} onClick={onLeaveFeedback}>
            {a}
          </Button>
        );
      })}
    </OptionsContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
