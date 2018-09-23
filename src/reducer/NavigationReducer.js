import Navigator from '../navigation/navigationStack';

const initialState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Login')
);

const navigationReducer = (state = initialState, action) => {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navigationReducer;