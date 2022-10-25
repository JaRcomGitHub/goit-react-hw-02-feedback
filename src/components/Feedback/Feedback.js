import React from "react";
import css from './Feedback.module.css'
import { Statistics } from "./Statistics"
// import { FeedbackOptions } from "./FeedbackOptions"
import { Section } from "./Section"
import { Notification } from "./Notification"

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    // handleIncrement = () => {
    //     this.setState(prevState => {
    //         return ({
    //             good: prevState.good + 1,
    //         });
    //     });
    // }

    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }

    countTotalFeedback() {
        return (
            this.state.good + this.state.neutral + this.state.bad
        );
    }

    countPositiveFeedbackPercentage() {
        return (
            (this.state.good + this.state.neutral + this.state.bad) ?
            Math.round(
                this.state.good /
                (this.state.good + this.state.neutral + this.state.bad)
                * 100) : 0
        );
    }

    render() {
        return (
            <div className={css.feedbackBlock}>
                <Section title="Please leave feedback">

                    <button type="button" onClick={ this.handleIncrementGood }>
                        Good
                    </button>
                    <button type="button" onClick={ this.handleIncrementNeutral }>
                        Neutral
                    </button>
                    <button type="button" onClick={ this.handleIncrementBad }>
                        Bad
                    </button>

                    {/* <FeedbackOptions
                        options={ 1 }
                        onLeaveFeedback={ 2 }
                    /> */}
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
