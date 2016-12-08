import React from 'react';

const Nom = React.createClass({
    render() {
        const { nomId } = this.props.params;

        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <h3 className="view-header">Daniel Ricciardo {nomId} <span className="light">#12 <i className="fa fa-caret-down"></i></span></h3>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ibox">
                                <p>His father was born in Ficarra, Sicily and his mother was born in Australia, to Italian parents from Calabria.</p>

                                <p>Ricciardo pronounces his name 'Ricardo' instead of the Italian pronunciation 'Rit-char-do', saying that
                    is how his family pronounces it.</p>

                                <h3>Nickname</h3>
                                <p>He is also referred to as "<strong>The Honey Badger</strong>". When asked why, he said "It's supposed to be the most fearless
                    animal in the animal kingdom. When you look at it, he seems quite cute and cuddly, but as soon as someone
                    crosses his territory in a way he doesn't like, he turns into a bit of a savage and he'll go after anything
                    – tigers, pythons – he turns very quickly, but he's a good guy". He wears an image of a <a href="#">honey
                badger</a> on the back of his helmet.</p>

                                <p>Ricciardo supports the <a href="http://www.westcoasteagles.com.au/">West Coast Eagles</a> in the Australian
                    Football League, and is currently the club's number-one ticket holder.</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox"><img src="https://avatars2.githubusercontent.com/u/4286755?v=3&s=460"
                                alt="..." className="img-circle" /></div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 2</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 3</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 3</div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <ul className="nav nav-sidebar sub-menu project">
                        <li>
                            <h5><i className="fa fa-bookmark"></i> Project</h5>
                        </li>
                        <li><a href="#">Ticket System</a></li>
                    </ul>
                    <ul className="nav nav-sidebar sub-menu milestone">
                        <li>
                            <h5><i className="fa fa-calendar-o"></i> Milestone</h5>
                        </li>
                        <li><a href="#">Project delivery</a></li>
                    </ul>
                    <ul className="nav nav-sidebar sub-menu tags">
                        <li>
                            <h5><i className="fa fa-hashtag"></i> Tags</h5>
                        </li>
                        <li><a href="">#NavItem</a></li>
                        <li><a href="">#NavItemAgain</a></li>
                        <li><a href="">#OneMoreNav</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default Nom;