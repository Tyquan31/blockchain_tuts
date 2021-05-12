import React from 'react';
import Web3 from 'web3';
import Nav from './Components/Nav';
import Description from './Components/Description';
import Container from './Components/Container';
import Shoes from './Items/all';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.appName = 'Sindbad Commerce';
    this.shoes = Shoes;
		this.newPayment = this.newPayment.bind(this);
		this.closePayment = this.closePayment.bind(this);
		this.PaymentWait = this.PaymentWait.bind(this);
		this.tick = this.tick.bind(this);
		this.bCheck = this.bCheck.bind(this);
		this.startTimer = this.startTimer.bind(this);
		
		this.state = {
			shoes: [],
			PaymentDetail: {},
			Conv: 300,
			defaultGasPrice: null,
      defaultGasLimit: 200000,
			paymentf: false,
			mAddress: '0x',
			amount: 0,
			diff: 0,
      seconds: '00',   // responsible for the seconds 
      minutes: '15',  // responsible for the minutes
			tflag: true
		};
  }

  newPayment(index) {
    var mAddress;
    let app = this;
    (async function main(){
      
      await fetch('http://localhost:5000/api/getMAddress')
        .then(response => response.json())
        .then(data => {
          mAddress = data.MAddress;
          console.log(mAddress);
          app.setState({
            PaymentDetail: app.state.shoes[index],
            mAddress
          });
        });

        var Conv;
        await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
          .then(response => response.json())
          .then(data => {
            Conv = data.USD;
            app.setState({
              Conv
            });
          });

    })();
  }

  render() {
    return (
      <div className="appContainer">
        <Description />
        <Container 
          shoes={this.state.shoes}
          newPayment={this.newPayment}
          closePayment={this.closePayment}
          PaymentDetail={this.state.PaymentDetail}
          mAddress={this.state.mAddress}
          amount={this.state.amount}
          diff={this.state.diff}
          paymentf={this.state.paymentf}
          Conv={this.state.Conv}
          MMaskTransfer={this.MMaskTransfer}
          PaymentWait={this.PaymentWait}
          startTimer={this.startTimer}
          tick={this.tick}
          privateToAddress={this.privateToAddress}
          getRandomWallet={this.getRandomWallet}
          defaultGasPrice={this.state.defaultGasPrice}
          defaultGasLimit={this.state.defaultGasLimit}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
      </div>
    );
  }
}

export default App;