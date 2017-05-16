import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../components/AppFrames/AppView';
import FullScreenView from '../components/AppFrames/FullScreenView';

// import all action creators
import * as CommentsActions from './Comment/actions';
import * as HashtagActions from './Hashtag/actions';
import * as LoginActions from './Login/actions';
import * as NomActions from './Nom/actions';
import * as NomViewActions from './NomView/actions';
import * as SettingsActions from './Settings/actions';
import * as TrackActions from './Track/actions';
import * as UIActions from './UI/actions';
import * as UserActions from './User/actions';
import * as AccountActions from './Account/actions';
import * as ViewActions from './View/actions';

function mapStateToProps(state) {
    return {
        comments: state.comments,
        hashtags: state.hashtags,
        login: state.login,
        noms: state.noms,
        nomViews: state.nomViews,
        tracks: state.tracks,
        settings: state.settings,
        ui: state.ui,
        account: state.account,
        users: state.users,
        views: state.views
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...CommentsActions,
        ...HashtagActions,
        ...LoginActions,
        ...NomActions,
        ...NomViewActions,
        ...SettingsActions,
        ...TrackActions,
        ...UIActions,
        ...UserActions,
        ...AccountActions,
        ...ViewActions
    }, dispatch)
}

export const App = connect(mapStateToProps,
    mapDispatchToProps)(AppView);

export const FullScreen = connect(mapStateToProps,
    mapDispatchToProps)(FullScreenView);