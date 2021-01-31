import React from 'react';

import "./styles/BadgeNew.css";
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {

    state = { form: {} };

    handleChange = e => {

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        });
    }

    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                avatarUrl="https://es.gravatar.com/avatar?d=identicon" 
                                firstName="Harold" 
                                lastName="Jara" 
                                jobtTitle="FrontEnd Enginieer" 
                                twitter="hjara"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;