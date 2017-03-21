import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';

// import all action creators
import * as CommentsActions from '../store/Comment/actions';
import * as HashtagActions from '../store/Hashtag/actions';
import * as MilestoneActions from '../store/Milestone/actions';
import * as LoginActions from '../store/Login/actions';
import * as NomActions from '../store/Nom/actions';
import * as NomViewActions from '../store/NomView/actions';
import * as SettingsActions from '../store/Settings/actions';
import * as TrackActions from '../store/Track/actions';
import * as UIActions from '../store/UI/actions';
import * as UserActions from '../store/User/actions';
import * as UserProfileActions from '../store/UserProfile/actions';
import * as ViewActions from '../store/View/actions';

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
    return bindActionCreators({
        ...CommentsActions,
        ...HashtagActions,
        ...MilestoneActions,
        ...LoginActions,
        ...NomActions,
        ...NomViewActions,
        ...SettingsActions,
        ...TrackActions,
        ...UIActions,
        ...UserActions,
        ...UserProfileActions,
        ...ViewActions
    }, dispatch)
}

const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;
