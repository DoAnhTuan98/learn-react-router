import React, {Component} from "react";
import { Redirect } from "react-router-dom";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (e) => {
        var { txtUsername,txtPassword } = this.state;
        e.preventDefault();
        // console.log(this.state.txtUsername,this.state.txtPassword)
        if(txtUsername === "admin" && txtPassword === "admin") {
            localStorage.setItem('user',JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }))
            // return <Redirect to="/product" />
        }
    }
    render() {
        var { txtUsername,txtPassword } = this.state;
        var loggedInUser = localStorage.getItem('user');
        var { location } = this.props;
        console.log(location);
        if(loggedInUser !== null ) {
            return <Redirect to={{
                pathname : "/product",
                state : {
                    from : location
                }
            }} />
        }
        return (
            <div className="row">
                <div className="col-xs-6">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onHandleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default About;
