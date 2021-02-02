import React from 'react';

class BadgeForm extends React.Component{

    state = {};

    handleChange = e =>{
            /*Visualizamos el componente y su valor
            console.log({
                name : e.target.name,
                value : e.target.value
            })*/
            
            this.setState({
                //Crea un objeto con cada nombre ejp:(fisrtName) :  value 
                [e.target.name]:  e.target.value
            });
    }

    /*handleClick = e =>{
        console.log(
                "Button was clicked"
            )
    }

    //Servicio para que no se actialice la página
    handleSubmit = e =>{
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.props.formValues);
    }*/

    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label> First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            //Evita que se duplique la info y lea el estado de cada variable
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label> Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            //Evista que se duplique la info y lea el estado de cada variable
                            value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label> Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="Email"
                            //Evista que se duplique la info y lea el estado de cada variable
                            value={this.props.formValues.Email}/>
                    </div>

                    <div className="form-group">
                        <label> Job Tittle</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="JobTittle"
                            //Evista que se duplique la info y lea el estado de cada variable
                            value={this.props.formValues.JobTittle}/>
                    </div>

                    <div className="form-group">
                        <label> Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="Twitter"
                            //Evista que se duplique la info y lea el estado de cada variable
                            value={this.props.formValues.Twitter}/>
                    </div>

                    <button  onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                
                    {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}

                </form>
            </div>
        );
    }  
}

export default BadgeForm;