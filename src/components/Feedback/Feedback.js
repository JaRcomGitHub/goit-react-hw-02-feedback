import React from "react";
import css from './Feedback.module.css'
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions"
import { Section } from "./Section"
import { Notification } from "./Notification"

const feedbackOptions = ['good', 'neutral', 'bad'];

class Feedback extends React.Component {

    handleIncrement = option => {
        this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }

    countTotalFeedback() {
        const { stateFeedback: { good, neutral, bad } } = this.props;
        return (
            good + neutral + bad
        );
    }

    countPositiveFeedbackPercentage() {
        const { stateFeedback: { good } } = this.props;
        const total = this.countTotalFeedback();
        return (
            total ? Math.round(good / total * 100) : 0
        );
    }

    render() {
        const { stateFeedback: { good, neutral, bad } } = this.props;
        return (
            <div className={css.feedbackBlock}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={ feedbackOptions }
                        onLeaveFeedback={ this.props.onFeedbackIncrement }
                    />
                </Section>
                <Section title="Statistics">
                    {
                        (this.countTotalFeedback() > 0)
                        ?
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
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
