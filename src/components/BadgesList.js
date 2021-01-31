import React from 'react';
import "./styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="BadgesList">
                {this.props.badges.map((badge)=>{
                    return(
                        <li className="BadgesListItem" key={badge.id}>
                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar" />
                            <p>
                                {badge.firstName} {badge.lastName} <br/> 
                                {badge.email}    <br/>
                                {badge.jobTitle} <br/>
                                @{badge.twitter}
                            </p>
                        </li>
                    )
                    
                })}
            </ul>
        )
    }
}

export default BadgesList;