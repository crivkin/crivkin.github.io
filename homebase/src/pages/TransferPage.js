import React, { Component } from 'react';
import { TopBar } from '../components';

class TransferPage extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', name: '', email: '', address: '', city: '', state: '', zip:''};
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (
        <div className="TransferPage">
        <TopBar />
        <h2>Transfer Page</h2>
        <div class="row">
          <div class="col-50">

        <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Billing Address</h3>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>

            <div class="col-50">
            <h3>Payment</h3>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <input type="text" id="expyear" name="expyear" placeholder="2018"/>
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352"/>
            </div>
        </label>

        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
      </div>
      );
    }
}

export default TransferPage;
