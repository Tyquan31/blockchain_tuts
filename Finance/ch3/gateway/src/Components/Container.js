import React from 'react';
import Shoerack from './Shoerack';
import Payment from './Payment';
import PVerification from './PVerification';

function Container (props){
    return (
        <div id="appContainer">
            <div className="columns">
                <div className="is-half is-offset-one-quarter column">
                    <div className="panel">

                        {
                            props.paymentf ?
                            <div>
                                <PVerification
                                    mAddress={props.mAddress}
                                    PaymentDetail={props.PaymentDetail}
                                    amount={props.amount}
                                    diff={props.diff}
                                    closePayment={props.closePayment}
                                    minutes={props.minutes}
                                    seconds={props.seconds}
                                />
                            </div>:

                            props.PaymentDetail.hasOwnProperty('name') ?
                            <div>
                                <Payment
                                    PaymentDetail={props.PaymentDetail}
                                    newPayment={props.newPayment}
                                    Conv={props.Conv}
                                    mAddress={props.mAddress}
                                    closePayment={props.closePayment}
                                    getRandomWallet={props.getRandomWallet}
                                    privateToAddress={props.privateToAddress}
                                    MMaskTransfer={props.MMaskTransfer}
                                    PaymentWait={props.PaymentWait}
                                    startTimer={props.startTimer}
                                    minutes={props.minutes}
                                    seconds={props.seconds}
                                />
                            </div>:

                            <div>
                                <Shoerack
                                    shoes={props.shoes}
                                    newPayment={props.newPayment}
                                />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;