import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        Comments: state.Comments,
        Hashtags: state.Hashtags,
        Milestones: state.Milestones,
        Noms: state.Noms,
        Projects: state.Projects,
        Settings: state.Settings,
        UI: state.UI,
        UserProfile: state.UserProfile,
        Users: state.Users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,
        dispatch)
}

const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;
