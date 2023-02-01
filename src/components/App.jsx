import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrementGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  handleClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          color: '191919',
          maxWidth: '400px',
          margin: '0 auto',
          marginTop: '50px',
          border: '1px solid grey',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
          // onIncrementGood={this.handleIncrementGood}
          // onIncrementBad={this.handleIncrementBad}
          // onDecrementNeutral={this.handleIncrementNeutral}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            total={total}
            positivePercentage={positiveFeedbackPercentage}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        )}
      </div>
    );
  }
}

export default App;
