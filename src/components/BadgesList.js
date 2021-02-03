import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
        if (this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to= "/badges/new">
                        Create new badge
                    </Link>
                </div>                
            );
        }
        return (
            <ul className="BadgesList">
                {this.props.badges.map((badge)=>{
                    return(
                        <li className="BadgesListItem" key={badge.id}>
                            <Link  className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar" />
                                <p>
                                    {badge.firstName} {badge.lastName} <br/> 
                                    {badge.email}    <br/>
                                    {badge.jobTitle} <br/>
                                    @{badge.twitter}
                                </p>    
                            </ Link>                            
                        </li>
                    )
                    
                })}
            </ul>
        )
    }
}

export default BadgesList;