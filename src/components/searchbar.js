import React from 'react';

class searchBar extends React.Component{

    state = {text: ''}

    submitForm=(event)=>{
        event.preventDefault(); //stops from refreshing after submission of form.
        this.props.submit(this.state.text);
    }
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.submitForm} className="ui form"> 
                <div className="field">
                    <label htmlFor="input-area">Enter Text here</label>
                </div>
                    <input 
                        type="text"
                        id="input-area"
                        value={this.state.text}
                        onChange={(event)=>{
                            this.setState({text:event.target.value});
                        }}
                    />
                </form>
                </div> 
        );
    }
}       

export default searchBar;