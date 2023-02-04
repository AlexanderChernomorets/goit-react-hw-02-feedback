import PropTypes from 'prop-types';
import {
  StatList,
  StatTitle,
  StatItem,
  ItemText,
  ItemNum,
} from './Statistic.styled';

function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return (
    <section>
      <StatTitle>Statistics</StatTitle>
      <StatList>
        <StatItem>
          <ItemText>
            Good: <ItemNum>{good}</ItemNum>
          </ItemText>
        </StatItem>
        <StatItem>
          <ItemText>
            Neutral: <ItemNum>{neutral}</ItemNum>
          </ItemText>
        </StatItem>
        <StatItem>
          <ItemText>
            Bad: <ItemNum>{bad}</ItemNum>
          </ItemText>
        </StatItem>
        <StatItem>
          <ItemText>
            Total: <ItemNum>{total}</ItemNum>
          </ItemText>
        </StatItem>
        <StatItem>
          <ItemText>
            Positive feedback: <ItemNum>{positivePercentage}%</ItemNum>
          </ItemText>
        </StatItem>
      </StatList>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
