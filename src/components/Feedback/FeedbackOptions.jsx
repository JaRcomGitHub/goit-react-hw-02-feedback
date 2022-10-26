import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(({ label }, index) => (
                <button
                    key={label}
                    type='button'
                    onClick={() => onLeaveFeedback(index)}
                >{label}</button>
            ))}
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
    })).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};