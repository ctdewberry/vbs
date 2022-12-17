import React, {Component} from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
let callAverage = 0;
let nextButton = "Start";

function statusTest(callsCompleted) {
    if (callsCompleted > 5) {
        return "Session Complete"
    } else if (callsCompleted === 0) {
            return "Press Start"
        }
        else {
            return "Call " + callsCompleted + " of 5"
        }
    }


class Homepage extends Component {
    //set up initial checkboxes and variables
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            checkbox0: false,
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
            checkbox9: false,
            checkbox10: false,
            checkbox11: false,
            checkbox12: false,
            checkbox13: false,
            checkbox14: false,
            checkbox15: false,
            checkbox16: false,
            checkbox17: false,
            checkbox18: false,
            checkbox19: false,
            checkbox20: false,
            checkbox21: false,
            checkbox22: false,
            checkbox23: false
        };
        this.callCounter = 0;
        this.call = 0;
        // this.callAverage = 0;


        this.callData = this.callData.bind(this);

        this.resetCalls = this.resetCalls.bind(this);

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

        this.resetBoxes = this.resetBoxes.bind(this);

        this.determineNext = this.determineNext.bind(this);


    }

    //more setting up of initial variables
    transfer1 = 0;
    transfer2 = 0;
    transfer3 = 0;
    transfer4 = 0;
    transfer5 = 0;


    //setup initial values for graph

    newData = [
        {name: '1', uv: 0},
        {name: '2', uv: 0},
        {name: '3', uv: 0 },
        {name: '4', uv: 0 },
        {name: '5', uv: 0 }
    ]



    //setup initial graph
    renderLineChart = (
        <LineChart width={300} height={200} data={this.newData} margin={{left:-24, bottom: 10}}>
            <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" label={{ value: "Call", angle: -90, dy: 12}} />
            <YAxis domain={[0, 100]}/>
        </LineChart>
    );


    //sets all checkboxes to false when transitioning to a new call
    determineNext(event) {
        // if (this.callCounter === 6) {
        //     nextButton = "Start New Session"

            this.callCounter = 1;
            this.newData = [
                {name: '1', uv: 0},
                {name: '2', uv: 0},
                {name: '3', uv: 0},
                {name: '4', uv: 0},
                {name: '5', uv: 0}
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData} margin={{left:-24, bottom: 10}}>

                <Line type="=monotone" dataKey="uv" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[0, 100]}/>
                </LineChart>
            );
            this.transfer1 = 0;
            this.transfer2 = 0;
            this.transfer3 = 0;
            this.transfer4 = 0;
            this.transfer5 = 0;
            this.setState({checkbox0: event.target.unchecked});
            this.setState({checkbox1: event.target.unchecked});
            this.setState({checkbox2: event.target.unchecked});
            this.setState({checkbox3: event.target.unchecked});
            this.setState({checkbox4: event.target.unchecked});
            this.setState({checkbox5: event.target.unchecked});
            this.setState({checkbox6: event.target.unchecked});
            this.setState({checkbox7: event.target.unchecked});
            this.setState({checkbox8: event.target.unchecked});
            this.setState({checkbox9: event.target.unchecked});
            this.setState({checkbox10: event.target.unchecked});
            this.setState({checkbox11: event.target.unchecked});
            this.setState({checkbox12: event.target.unchecked});
            this.setState({checkbox13: event.target.unchecked});
            this.setState({checkbox14: event.target.unchecked});
            this.setState({checkbox15: event.target.unchecked});
            this.setState({checkbox16: event.target.unchecked});
            this.setState({checkbox17: event.target.unchecked});
            this.setState({checkbox18: event.target.unchecked});
            this.setState({checkbox19: event.target.unchecked});
            this.setState({checkbox20: event.target.unchecked});
            this.setState({checkbox21: event.target.unchecked});
            this.setState({checkbox22: event.target.unchecked});
            this.forceUpdateHandler();
            this.call = 0;


    }

    calculateTotal = event => (

        // eslint-disable-next-line
        this.setState({checkbox0: event.target.unchecked}),
        this.setState({checkbox1: event.target.unchecked}),
        this.setState({checkbox2: event.target.unchecked}),
        this.setState({checkbox3: event.target.unchecked}),
        this.setState({checkbox4: event.target.unchecked}),
        this.setState({checkbox5: event.target.unchecked}),
        this.setState({checkbox6: event.target.unchecked}),
        this.setState({checkbox7: event.target.unchecked}),
        this.setState({checkbox8: event.target.unchecked}),
        this.setState({checkbox9: event.target.unchecked}),
        this.setState({checkbox10: event.target.unchecked}),
        this.setState({checkbox11: event.target.unchecked}),
        this.setState({checkbox12: event.target.unchecked}),
        this.setState({checkbox13: event.target.unchecked}),
        this.setState({checkbox14: event.target.unchecked}),
        this.setState({checkbox15: event.target.unchecked}),
        this.setState({checkbox16: event.target.unchecked}),
        this.setState({checkbox17: event.target.unchecked}),
        this.setState({checkbox18: event.target.unchecked}),
        this.setState({checkbox19: event.target.unchecked}),
        this.setState({checkbox20: event.target.unchecked}),
        this.setState({checkbox21: event.target.unchecked}),
        this.setState({checkbox22: event.target.unchecked}),
        this.callData(),
            //increases call counter by one
        this.callCounter += 1
    );
    resetBoxes = event => (
        // eslint-disable-next-line
        this.setState({checkbox0: event.target.unchecked}),
            this.setState({checkbox1: event.target.unchecked}),
            this.setState({checkbox2: event.target.unchecked}),
            this.setState({checkbox3: event.target.unchecked}),
            this.setState({checkbox4: event.target.unchecked}),
            this.setState({checkbox5: event.target.unchecked}),
            this.setState({checkbox6: event.target.unchecked}),
            this.setState({checkbox7: event.target.unchecked}),
            this.setState({checkbox8: event.target.unchecked}),
            this.setState({checkbox9: event.target.unchecked}),
            this.setState({checkbox10: event.target.unchecked}),
            this.setState({checkbox11: event.target.unchecked}),
            this.setState({checkbox12: event.target.unchecked}),
            this.setState({checkbox13: event.target.unchecked}),
            this.setState({checkbox14: event.target.unchecked}),
            this.setState({checkbox15: event.target.unchecked}),
            this.setState({checkbox16: event.target.unchecked}),
            this.setState({checkbox17: event.target.unchecked}),
            this.setState({checkbox18: event.target.unchecked}),
            this.setState({checkbox19: event.target.unchecked}),
            this.setState({checkbox20: event.target.unchecked}),
            this.setState({checkbox21: event.target.unchecked}),
            this.setState({checkbox22: event.target.unchecked})
    );

    //refreshes screen to update graph (may not be needed, but it works so don't remove...just in case)
    forceUpdateHandler(){
        this.forceUpdate()
    };


    //calculates the sum total of checked boxes, separated out so that the parent checkboxes aren't counted
    calculateTotalForCall(){
        for (let i=1; i<5; i++) {
            if(this.state['checkbox' +i]) {
                this.call +=1;
            }
        }
        for (let i=6; i<10; i++) {
            if(this.state['checkbox' +i]) {
                this.call +=1;
            }
        }
        for (let i=11; i<15; i++) {
            if(this.state['checkbox' +i]) {
                this.call +=1;
            }
        }
        for (let i=16; i<21; i++) {
            if(this.state['checkbox' +i]) {
                this.call +=1;
            }
        }
        for (let i=22; i<23; i++) {
            if(this.state['checkbox' +i]) {
                this.call +=1;
            }
        }

    }

    //runs the calculator to determine the total checkboxes for the call and updates the data for the graph
    //refreshes screen so graph gets updated
    //cycles through calls 1 through 5
    callData(event) {
        this.calculateTotalForCall()
        // if (this.callCounter === 1) {
        //     this.transfer2 = 0;
        //     this.transfer3 = 0;
        //     this.transfer4 = 0;
        //     this.transfer5 = 0;
        //     this.transfer1 = (this.call / 18)*100;
        //     callAverage = this.transfer1;
        //     this.newData = [
        //         {name: 'Call 1', uv: this.transfer1},
        //         {name: '2', uv: this.transfer2},
        //         {name: '3', uv: this.transfer3 },
        //         {name: '4', uv: this.transfer4 },
        //         {name: '5', uv: this.transfer5 }
        //     ]
        //     this.renderLineChart = (
        //         <LineChart width={300} height={200} data={this.newData}>
        //             <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
        //             <CartesianGrid stroke="#ccc" />
        //             <XAxis dataKey="name" />
        //             <YAxis domain={[0, 100]}/>
        //         </LineChart>
        //     );
        //     this.forceUpdateHandler();
        //     this.call = 0;
        // }
        // var tempTransfer =
        // eslint-disable-next-line
        let transfer = "this.transfer" + this.callCounter;
        // eslint-disable-next-line
        eval(transfer + " = (this.call / 18) * 100");
        // eval(callAverage + "= ("callAverage + "this.window[transfer]) / this.callCounter;
        // eval(callAverage + " += " + transfer + ")"  );
        // eslint-disable-next-line
        callAverage = ((callAverage * (this.callCounter-1)) + eval(transfer))/this.callCounter;
        // eslint-disable-next-line
        this.newData[this.callCounter-1].uv = eval(transfer);

        // this.newData = [
            // eslint-disable-next-line
        //     eval("{name: '" + this.callCounter.toString() + "', uv: " + transfer + "}")
        // ]
        //     this.newData = [
        //     {name: this.callCounter, uv: eval(transfer)}
        //         {name: '2', uv: this.transfer2},
        //         {name: '3', uv: this.transfer3 },
        //         {name: '4', uv: this.transfer4 },
        //         {name: '5', uv: this.transfer5 }
        //     ]
        this.renderLineChart = (
            <LineChart width={300} height={200} data={this.newData} margin={{left:-24, bottom: 10}}>

            <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" label={{ value: "Call", angle: -90, dy: 12}} />
                <YAxis domain={[0, 100]}/>
            </LineChart>
        );
        this.forceUpdateHandler();
        this.call = 0;
        // if (this.callCounter === 4 ) {
        //     nextButton = "New Session";
        // }

        if (this.callCounter === 4) {
            nextButton = "Finish"}
        else if (this.callCounter === 5) {
            nextButton = "New Session"
        } else {
            nextButton = "Next Call"
        }
    }





    // }
    //resets all data
    resetCalls(event) {
        this.callCounter = 1;
        this.newData = [
            {name: '1', uv: 0},
            {name: '2', uv: 0},
            {name: '3', uv: 0 },
            {name: '4', uv: 0 },
            {name: '5', uv: 0 }
        ]
        this.renderLineChart = (
            <LineChart width={300} height={200} data={this.newData} margin={{left:-24, bottom: 10}}>
            <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" label={{ value: "Call", angle: -90, dy: 12}} />
                <YAxis domain={[0, 100]}/>
            </LineChart>
        );
        this.transfer1 = 0;
        this.transfer2 = 0;
        this.transfer3 = 0;
        this.transfer4 = 0;
        this.transfer5 = 0;
        this.setState({checkbox0: event.target.unchecked});
        this.setState({checkbox1: event.target.unchecked});
        this.setState({checkbox2: event.target.unchecked});
        this.setState({checkbox3: event.target.unchecked});
        this.setState({checkbox4: event.target.unchecked});
        this.setState({checkbox5: event.target.unchecked});
        this.setState({checkbox6: event.target.unchecked});
        this.setState({checkbox7: event.target.unchecked});
        this.setState({checkbox8: event.target.unchecked});
        this.setState({checkbox9: event.target.unchecked});
        this.setState({checkbox10: event.target.unchecked});
        this.setState({checkbox11: event.target.unchecked});
        this.setState({checkbox12: event.target.unchecked});
        this.setState({checkbox13: event.target.unchecked});
        this.setState({checkbox14: event.target.unchecked});
        this.setState({checkbox15: event.target.unchecked});
        this.setState({checkbox16: event.target.unchecked});
        this.setState({checkbox17: event.target.unchecked});
        this.setState({checkbox18: event.target.unchecked});
        this.setState({checkbox19: event.target.unchecked});
        this.setState({checkbox20: event.target.unchecked});
        this.setState({checkbox21: event.target.unchecked});
        this.setState({checkbox22: event.target.unchecked});
        this.forceUpdateHandler();
        this.call = 0;
        nextButton = "Next Call";
        callAverage = 0;

    }


    //changes checkbox state for either each individual checkbox or the chicken of parents checkboxes
    handleCHC0 = event => (
        // eslint-disable-next-line
        this.setState({checkbox0: event.target.checked}),
        this.setState({checkbox1: event.target.checked}),
        this.setState({checkbox2: event.target.checked}),
        this.setState({checkbox3: event.target.checked}),
        this.setState({checkbox4: event.target.checked})
    );

    handleCHC1 = event => (
        this.setState({checkbox1: event.target.checked})
    );

    handleCHC2 = event => (
        this.setState({checkbox2: event.target.checked})
    );

    handleCHC3 = event => (
        this.setState({checkbox3: event.target.checked})
    );

    handleCHC4 = event => (
        this.setState({checkbox4: event.target.checked})
    );

    handleCHC5 = event => (
        // eslint-disable-next-line
        this.setState({checkbox5: event.target.checked}),
        this.setState({checkbox6: event.target.checked}),
        this.setState({checkbox7: event.target.checked}),
        this.setState({checkbox8: event.target.checked}),
        this.setState({checkbox9: event.target.checked})
    );

    handleCHC6 = event => (
        this.setState({checkbox6: event.target.checked})
    );

    handleCHC7 = event => (
        this.setState({checkbox7: event.target.checked})
    );

    handleCHC8 = event => (
        this.setState({checkbox8: event.target.checked})
    );

    handleCHC9 = event => (
        this.setState({checkbox9: event.target.checked})
    );
    handleCHC10 = event => (
        // eslint-disable-next-line
        this.setState({checkbox10: event.target.checked}),
        this.setState({checkbox11: event.target.checked}),
        this.setState({checkbox12: event.target.checked}),
        this.setState({checkbox13: event.target.checked}),
        this.setState({checkbox14: event.target.checked})
    );

    handleCHC11 = event => (
        this.setState({checkbox11: event.target.checked})
    );

    handleCHC12 = event => (
        this.setState({checkbox12: event.target.checked})
    );

    handleCHC13 = event => (
        this.setState({checkbox13: event.target.checked})
    );

    handleCHC14 = event => (
        this.setState({checkbox14: event.target.checked})
    );

    handleCHC15 = event => (
        // eslint-disable-next-line
        this.setState({checkbox15: event.target.checked}),
        this.setState({checkbox16: event.target.checked}),
        this.setState({checkbox17: event.target.checked}),
        this.setState({checkbox18: event.target.checked}),
        this.setState({checkbox19: event.target.checked}),
        this.setState({checkbox20: event.target.checked})
    );

    handleCHC16 = event => (
        this.setState({checkbox16: event.target.checked})
    );

    handleCHC17 = event => (
        this.setState({checkbox17: event.target.checked})
    );

    handleCHC18 = event => (
        this.setState({checkbox18: event.target.checked})
    );
    handleCHC19 = event => (
        this.setState({checkbox19: event.target.checked})
    );

    handleCHC20 = event => (
        this.setState({checkbox20: event.target.checked})
    );
    handleCHC21 = event => (
        // eslint-disable-next-line
        this.setState({checkbox21: event.target.checked}),
        this.setState({checkbox22: event.target.checked})
    );

    handleCHC22 = event => (
        this.setState({checkbox22: event.target.checked})
    );

    //following lines renders a table and fills it with the actual checkboxes
    render() {
        return (
            <table style={{borderWidth: 4, borderStyle: "solid", borderRadius:10, padding:10, margin: 4, borderColor: "black"}}>
                <tr>
                    <td style={{borderWidth: 4, borderStyle: "solid", borderRadius:10, paddingLeft: 10, paddingRight:10, paddingBottom: 10, width: 260}}>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>

                <tr>
                    <th style={{fontWeight: "bold", borderWidth: 4, borderStyle: "solid", borderRadius:10, width:260, fontSize: 30}}>
                    VBS Checklist
                </th>
                </tr>


                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>

<td style={{width: 280}}>
                    {/*HEADER*/}
                    <th align={"left"} bgcolor={"#7BCD43"} width={280}>
                        <input type="checkbox" checked={this.state.checkbox0} onChange={this.handleCHC0}/>
                        Engage and Connect
                    </th>

                <div style={{backgroundColor:"#e4f5d9"}}>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox1} onChange={this.handleCHC1}/>
                    Greet warmly
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox2} onChange={this.handleCHC2}/>
                    Positive interaction
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox3} onChange={this.handleCHC3}/>
                    Confirm customer info
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox4} onChange={this.handleCHC4}/>
                    Build Rapport/Personalize
                    </td>
                </tr>

                </div>

                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
    <tr></tr>
    <tr></tr>
                        {/*HEADER*/}

                    <th align={"left"} bgcolor={"#E5CA36"} width={280}>
                        <input type="checkbox" checked={this.state.checkbox5} onChange={this.handleCHC5}/>
                        Take Ownership
                    </th>

                        <div style={{backgroundColor:"#f7efc2"}}>
                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox6} onChange={this.handleCHC6}/>
                    Specific ownership
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox7} onChange={this.handleCHC7}/>
                    Restate request
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox8} onChange={this.handleCHC8}/>
                    Frame call
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox9} onChange={this.handleCHC9}/>
                    Display confidence
                    </td>
                </tr>
                        </div>

                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
    <tr></tr>
    <tr></tr>
                        {/*HEADER*/}

                    <th align={"left"} bgcolor={"#3BA9D8"} width={280}>
                        <input type="checkbox" checked={this.state.checkbox10} onChange={this.handleCHC10}/>
                        Build Value
                    </th>

                        <div style={{backgroundColor:"#d7edf7"}}>
                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox11} onChange={this.handleCHC11}/>
                    Educate on value of coverages
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox12} onChange={this.handleCHC12}/>
                    Explore needs/explain options
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox13} onChange={this.handleCHC13}/>
                    Show appreciation
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox14} onChange={this.handleCHC14}/>
                    Communicate value of LM
                    </td>
                </tr>
                        </div>

                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
    <tr></tr>
    <tr></tr>
                        {/*HEADER*/}

                    <th align={"left"} bgcolor={"#F8F649"} width={280}>
                        <input type="checkbox" checked={this.state.checkbox15} onChange={this.handleCHC15}/>
                        Thank and Deliver
                    </th>

                        <div style={{backgroundColor:"#fdfdda"}}>
                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox16} onChange={this.handleCHC16}/>
                    Summarize
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox17} onChange={this.handleCHC17}/>
                    Set expectations
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox18} onChange={this.handleCHC18}/>
                    Show Commitment
                        </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox19} onChange={this.handleCHC19}/>
                    Confirm needs met
                    </td>
                </tr>

                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox20} onChange={this.handleCHC20}/>
                    WOW close with name
                    </td>
                </tr>
                        </div>

                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
    <tr></tr>
    <tr></tr>
                        {/*HEADER*/}

                    <th align={"left"} bgcolor={"#999DA0"} width={280}>
                        <input type="checkbox" checked={this.state.checkbox21} onChange={this.handleCHC21}/>
                        Leads
                    </th>

                        <div style={{backgroundColor:"#eaebec"}}>
                <tr>
                    <td>
                    <input type="checkbox" checked={this.state.checkbox22} onChange={this.handleCHC22}/>
                    Offer lead

                    </td>
                </tr>
                        </div>
</td>
            </td>

                <td></td>
                <td></td>
                <td></td>

                <td align={"center"}>
                <th >


                        <div style={{fontSize: 36, color: "green", fontWeight: "bold", borderWidth: 4, borderStyle: "solid", borderRadius:10, textAlign: "center", width:320, height:46}}>

                            {statusTest(this.callCounter)}

                    </div>
                </th>

                    <tr><td></td></tr>
                    <tr><td></td></tr>
                <div style={{fontWeight: "bold", borderWidth: 4, borderStyle: "solid", borderRadius:10, width:320, padding: 10}}>
                <tr>
                    <th>
                        % of VBS demonstrated per call</th>

                </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr><td >{this.renderLineChart}</td></tr>
                </div>


                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <div style={{fontWeight: "bold", borderWidth: 4, borderStyle: "solid", borderRadius:10, width:300, padding: 10}}>


                        <tr>
                            <td style={{textAlign: "left", padding: 0, width: 100}}>Average</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td rowSpan={2}  style={{textAlign: "right", fontSize: 40, verticalAlign: "top", padding: 0, width: 172}}>{callAverage.toFixed(2)}%</td>
                        </tr>
    <tr>
        <td style={{textAlign: "left", padding: 0, width: 100}}>VBS usage:</td>

    </tr>


<br />
                        <tr>
                        <td style={{textAlign: "left", padding: 0, width: 60}}>
                            Call 1:
                        </td>
                        <td style={{textAlign: "right", padding: 0, width: 100}}>
                            {this.transfer1.toFixed(2)}%
                        </td>
                        </tr>
                        <tr>
                        <td style={{textAlign: "left", padding: 0, width: 60}}>
                    Call 2:
                        </td>
                        <td style={{textAlign: "right", padding: 0, width: 100}}>
                            {this.transfer2.toFixed(2)}%
                        </td>
                        </tr>
                        <tr>
                        <td style={{textAlign: "left", padding: 0, width: 60}}>
                    Call 3:
                        </td>
                        <td style={{textAlign: "right", padding: 0, width: 100}}>
                            {this.transfer3.toFixed(2)}%
                        </td>
                        </tr>
                        <tr>
                        <td style={{textAlign: "left", padding: 0, width: 60}}>
                    Call 4:
                        </td>
                        <td style={{textAlign: "right", padding: 0, width: 100}}>
                            {this.transfer4.toFixed(2)}%
                        </td>
                        </tr>
                        <tr>
                        <td style={{textAlign: "left", padding: 0, width: 60}}>
                    Call 5:</td>
                        <td style={{textAlign: "right", padding: 0, width: 100}}>
                            {this.transfer5.toFixed(2)}%
                        </td>
                        </tr>

                    </div>

<tr><td></td></tr>
                    <tr><td></td></tr>


        <tr><td>
                <button onClick={(this.callCounter < 6 && this.callCounter > 0)? this.calculateTotal: this.resetCalls} style={{borderColor: "black", borderWidth: 4, borderStyle: "solid", borderRadius:10, fontSize: 40, height: 80, width: 300, backgroundColor: "lightgreen"}}> {nextButton} </button>



            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td>
                <button onClick={this.resetBoxes} style={{borderColor: "black",borderWidth: 4, borderStyle: "solid", borderRadius:10, fontSize: 20, height: 60, width: 160}}> Clear All<br/>Boxes </button></td>
                <td>
                </td>
                <td>
                <button onClick={this.resetCalls} style={{borderColor: "black",borderWidth: 4, borderStyle: "solid", borderRadius:10, fontSize: 20, height: 60, width: 160}}> Reset<br/>Session </button>
            </td></tr>
        </td>
        </tr>

            </td>
            </tr>

            </table>


        );
    }
}


export default Homepage;

