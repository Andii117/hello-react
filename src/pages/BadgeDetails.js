import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '../components/Badge';
import ConfLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery';
import Popper from 'popper.js';
import  DeleteBadgeModal  from '../components/DeleteBadgeModal';

function BadgeDetails (props){

    const badge = props.badge;

    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={ConfLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} <br/> {badge.lastName}</h1>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={badge.firstName} 
                                lastName={badge.lastName} 
                                jobtTitle={badge.jobtTitle} 
                                twitter={badge.twitter} 
                                email={badge.email}
                            />
                        </div>
                        <div className="col-6">
                            <h2>Actions</h2>
                            <div>
                                
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`} >
                                        Edit
                                    </Link></div>
                            </div>
                            <div>
                                
                                <div>
                                    <button onClik={props.onOpenModal} className="btn btn-danger">
                                        Delete
                                    </button>

                                    <DeleteBadgeModal 
                                        isOpen={props.modalIsOpen} 
                                        onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                    > 
                                        Lorem Ipsum 
                                    </DeleteBadgeModal>
                                       
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BadgeDetails;