import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        comments: state.comments,
        hashtags: state.hashtags,
        milestones: state.milestones,
        noms: state.noms,
        tracks: state.tracks,
        settings: state.settings,
        ui: state.ui,
        userProfile: state.userProfile,
        users: state.users,
        views: state.views
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,
        dispatch)
}

const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;
