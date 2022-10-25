import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <p><span>{ options }</span></p>
            <p><span>{ onLeaveFeedback }</span></p>
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.number.isRequired,
};