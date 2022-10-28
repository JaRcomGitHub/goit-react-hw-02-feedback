import React from "react";
import css from './Feedback.module.css'
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions"
import { Section } from "./Section"
import { Notification } from "./Notification"

const feedbackButtonOptions = [
    { label: 'Good' },
    { label: 'Neutral' },
    { label: 'Bad' },
];

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = index => {
        this.setState(prevState => {
            if (index === 0) return ({ good: prevState.good + 1 });
            if (index === 1) return ({ neutral: prevState.neutral + 1 });
            if (index === 2) return ({ bad: prevState.bad + 1 });
        });
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return (
            good + neutral + bad
        );
    }

    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return (
            total ? Math.round(good / total * 100) : 0
        );
    }

    render() {
        return (
            <div className={css.feedbackBlock}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={ feedbackButtonOptions }
                        onLeaveFeedback={ this.handleIncrement }
                    />
                </Section>
                <Section title="Statistics">
                    {
                        (this.countTotalFeedback() > 0)
                        ?
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                        :
                        <Notification message="There is no feedback" />
                    }
                </Section>
            </div>
        );
    }
}

export default Feedback;
