import React from 'react'
import UsersMap from '../UsersMap/usersMap'
import userPhoto from '../img/user.png'
import c from './usersSteck.module.css'
import loadGif from '../img/free-gif-preloaders-psds-09.gif'
import { NavLink } from 'react-router-dom'


let UsersSteck = (props) => {
        let UserMap = props.state.users.users.map(
        d => <div className={c.main}>
            <div className={c.second}>
                <NavLink to={`/body/profile/${d.id}`}>
                     <img src={d.photos.small != null ? d.photos.small : userPhoto} alt={d.id} className={c.img} />
                     </NavLink>
                <UsersMap id={d.id} FullName={d.name}  Country={d.Country} followed={d.followed} followFunc={props.follow}  unfollowFunc={props.unfollow}
                isLoading={props.isLoading} loadStatus={props.state.users.isLoading} idFilter={props.state.users.idFilter}  />
            </div>
        </div>)


    let usersReturn = () => {

        return (
            props.showMore(props.state.users.count+2),
            props.onPageChanged(props.state.users.count)
        )
    }

    return (
        
        <div>
            <img src={props.state.users.isFetching?null:`${loadGif}`}/>
            <div>{UserMap}</div>
            <button  onClick={usersReturn} className={c.showMore}>Show more</button>
        </div>
    )
}





export default UsersSteck




