import React from 'react';

import "./styles/BadgeEdit.css";
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from "../components/BadgeForm";
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {

    state = { 
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            Email: '',
            jobtTitle: '',
            Twitter: '',

    } };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({loading: false, form: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    handleChange = e => {

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        });
    }

    
    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({ loading: true, error: null})

        try {
            //Actualizamos la información utilizando el API create
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false, error: null})
            //Porps proporcionado por react routes para redirigir una pagina
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }
   
    render(){
        if (this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                avatarUrl="https://es.gravatar.com/avatar?d=identicon" 
                                firstName={this.state.form.firstName || 'RIST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobtTitle={this.state.form.JobTittle || 'JOB_TITTLE'}
                                twitter={this.state.form.Twitter || 'TWITTER'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;