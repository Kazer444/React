import React from 'react'
import UsersSteck from './UsersSteck/usersSteck'
import {isLoading, follow,unfollow,showMore, UsersThunk, followThunk,unfollowThunk} from '../../Reducers/UsersReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthCheck from '../HOC/withAuthCheck'


class UsersAPI extends React.Component {

    componentDidMount() {
     return this.props.UsersThunk(this.props.state.users.count)

    }

    onPageChanged = () => {return this.props.UsersThunk(this.props.state.users.count+2,this.props.state.users.users)}

    followFunc = (id) => {return this.props.followThunk(id)}


    unfollowFunc = (id) => {return this.props.unfollowThunk(id)}

    render() {
        return <UsersSteck
            state={this.props.state}
            onPageChanged={this.onPageChanged}
            showMore={this.props.showMore}
            follow={this.followFunc}
            unfollow={this.unfollowFunc}
            isLoading={this.props.isLoading}
        />
    }
}

let mapStateToProps = (state) => {return { state: state}}

export let UsersContainer =compose(
    connect(mapStateToProps,
        {isLoading, follow,unfollow,showMore,UsersThunk,followThunk,unfollowThunk}),
    // withAuthCheck
)(UsersAPI)



