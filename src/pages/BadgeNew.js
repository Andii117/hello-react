import React from 'react';

import "./styles/BadgeNew.css";
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {

    state = { form: {
        firstName: '',
        lastName: '',
        Email: '',
        jobtTitle: '',
        Twitter: '',

    } };

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
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobtTitle={this.state.form.JobTittle}
                                twitter={this.state.form.Twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;