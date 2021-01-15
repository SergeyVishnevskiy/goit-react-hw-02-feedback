import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGood = () => {
    this.setState((prev) => ({
      good: (prev.good += 1),
    }));
  };
  addNeutral = () => {
    this.setState((prev) => ({
      neutral: (prev.neutral += 1),
    }));
  };
  addBad = () => {
    this.setState((prev) => ({
      bad: (prev.bad += 1),
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  coutnPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good * 100) / (good + neutral + bad);
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback =)">
          <FeedbackOptions
            addGood={this.addGood}
            addNeutral={this.addNeutral}
            addBad={this.addBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.coutnPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
