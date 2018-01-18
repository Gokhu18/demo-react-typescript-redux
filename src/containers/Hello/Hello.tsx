import Hello from '../../components/Hello/Hello';
import * as actions from '../../redux/actions/';
import { RootState } from '../../redux/types/index';
import { connect, Dispatch } from 'react-redux';

// Massages the data from the current store to part of the shape that our component needs
export const mapStateToProps = ({ router, enthusiasm }: RootState) => {
  return {
    router,
    name: enthusiasm.name,
    enthusiasmLevel: enthusiasm.enthusiasmLevel
  };
};

// Creates callback props to pump actions to our store using a given dispatch function
export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
};

/* connect will first take mapStateToProps and mapDispatchToProps, and then return another function that 
  we can use to wrap our component
*/
export default connect(mapStateToProps, mapDispatchToProps)(Hello);