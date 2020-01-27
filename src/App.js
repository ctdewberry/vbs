import React, {Component} from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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
        this.callCounter = 1;
        this.call = 0;


        this.callData = this.callData.bind(this);

        this.resetCalls = this.resetCalls.bind(this);

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);


    }

    //more setting up of initial variables
    transfer1 = 0;
    transfer2 = 0;
    transfer3 = 0;
    transfer4 = 0;
    transfer5 = 0;

    //setup initial values for graph
    newData = [{name: 'Call 1', uv: 0},
        {name: '2', uv: 0},
        {name: '3', uv: 0 },
        {name: '4', uv: 0 },
        {name: '5', uv: 0 }
    ]

    //setup initial graph
    renderLineChart = (
        <LineChart width={300} height={200} data={this.newData}>
            <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );


    //sets all checkboxes to false when transitioning to a new call
    calculateTotal = event => (
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
            //increasees call counter by one
            this.callCounter += 1

    );

    //refreshes screen to update graph (may not be needed but it works so dont remove...just in case)
    forceUpdateHandler(){
        this.forceUpdate()
    };

    //calculates the sum total of checkmarked boxes, separated out so that the parent checkboxes arent counted
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
        if (this.callCounter === 1) {
            this.transfer2 = 0;
            this.transfer3 = 0;
            this.transfer4 = 0;
            this.transfer5 = 0;
            this.transfer1 = (this.call / 18)*100;
            this.newData = [{name: 'Call 1', uv: this.transfer1},
                {name: '2', uv: this.transfer2},
                {name: '3', uv: this.transfer3 },
                {name: '4', uv: this.transfer4 },
                {name: '5', uv: this.transfer5 }
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData}>
                    <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            );
            this.forceUpdateHandler();
            this.call = 0;
        }
        if (this.callCounter === 2) {
            this.transfer2 = (this.call / 18)*100;
            this.newData = [{name: 'Call 1', uv: this.transfer1},
                {name: '2', uv: this.transfer2},
                {name: '3', uv: this.transfer3 },
                {name: '4', uv: this.transfer4 },
                {name: '5', uv: this.transfer5 }
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData}>
                    <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            );
            this.forceUpdateHandler();
            this.call = 0;
        }
        if (this.callCounter === 3) {
            this.transfer3 = (this.call / 18)*100;
            this.newData = [{name: 'Call 1', uv: this.transfer1},
                {name: '2', uv: this.transfer2},
                {name: '3', uv: this.transfer3 },
                {name: '4', uv: this.transfer4 },
                {name: '5', uv: this.transfer5 }
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData}>
                    <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            );
            this.forceUpdateHandler();
            this.call = 0;
        }
        if (this.callCounter === 4) {
            this.transfer4 = (this.call / 18)*100;
            this.newData = [{name: 'Call 1', uv: this.transfer1},
                {name: '2', uv: this.transfer2},
                {name: '3', uv: this.transfer3 },
                {name: '4', uv: this.transfer4 },
                {name: '5', uv: this.transfer5 }
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData}>
                    <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            );
            this.forceUpdateHandler();
            this.call = 0;
        }
        if (this.callCounter === 5) {
            this.transfer5 = (this.call / 18)*100;
            this.newData = [{name: 'Call 1', uv: this.transfer1},
                {name: '2', uv: this.transfer2},
                {name: '3', uv: this.transfer3 },
                {name: '4', uv: this.transfer4 },
                {name: '5', uv: this.transfer5 }
            ]
            this.renderLineChart = (
                <LineChart width={300} height={200} data={this.newData}>
                    <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            );
            this.forceUpdateHandler();
            this.call = 0;
            this.callCounter = 0;
        }


    }
    //resets all data
    resetCalls(event) {
        this.callCounter = 1;
        this.newData = [{name: 'Call 1', uv: 0},
            {name: '2', uv: 0},
            {name: '3', uv: 0 },
            {name: '4', uv: 0 },
            {name: '5', uv: 0 }
        ]
        this.renderLineChart = (
            <LineChart width={300} height={200} data={this.newData}>
                <Line type="=monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        );
        this.transfer1 = 0;
        this.transfer2 = 0;
        this.transfer3 = 0;
        this.transfer4 = 0;
        this.transfer5 = 0;
        this.forceUpdateHandler();
        this.call = 0;

    }


    //changes checkbox state for either each individual checkbox or the chicken of parents checkboxes
    handleCHC0 = event => (
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
        this.setState({checkbox21: event.target.checked}),
            this.setState({checkbox22: event.target.checked})
    );

    handleCHC22 = event => (
        this.setState({checkbox22: event.target.checked})
    );

    //following lines renders a table and fills it with the actual checkboxes
    render() {
        return (
            <table>
                <tr>
                    <th align={"left"} bgcolor={"#7BCD43"}>
                        <input type="checkbox" checked={this.state.checkbox0} onChange={this.handleCHC0}/>
                        Engage and Connect
                    </th>
                    {/*rendering of chart data*/}
                    <th rowSpan={15}><pre>       % of VBS model on each call</pre> {this.renderLineChart}

                    </th>
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox1} onChange={this.handleCHC1}/>
                    Greet warmly

                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox2} onChange={this.handleCHC2}/>
                    Positive interaction
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox3} onChange={this.handleCHC3}/>
                    Confirm customer info
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox4} onChange={this.handleCHC4}/>
                    Build Rapport/Personalize
                </tr>
                <br/>
                <tr>
                    <th align={"left"} bgcolor={"#E5CA36"}>
                        <input type="checkbox" checked={this.state.checkbox5} onChange={this.handleCHC5}/>
                        Take Ownership
                    </th>
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox6} onChange={this.handleCHC6}/>
                    Specific ownership

                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox7} onChange={this.handleCHC7}/>
                    Restate request
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox8} onChange={this.handleCHC8}/>
                    Frame call
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox9} onChange={this.handleCHC9}/>
                    Display confidence
                </tr>
                <br/>
                <tr>
                    <th align={"left"} bgcolor={"#3BA9D8"}>
                        <input type="checkbox" checked={this.state.checkbox10} onChange={this.handleCHC10}/>
                        Build Value
                    </th>
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox11} onChange={this.handleCHC11}/>
                    Educate on value of coverages

                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox12} onChange={this.handleCHC12}/>
                    Explore needs/explain options
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox13} onChange={this.handleCHC13}/>
                    Show appreciation
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox14} onChange={this.handleCHC14}/>
                    Communicate value of LM
                </tr>
                <br/>
                <tr>
                    <th align={"left"} bgcolor={"#F8F649"}>
                        <input type="checkbox" checked={this.state.checkbox15} onChange={this.handleCHC15}/>
                        Thank and Deliver
                    </th>
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox16} onChange={this.handleCHC16}/>
                    Summarize
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox17} onChange={this.handleCHC17}/>
                    Set expectations
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox18} onChange={this.handleCHC18}/>
                    Show Commitment
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox19} onChange={this.handleCHC19}/>
                    Confirm needs met
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox20} onChange={this.handleCHC20}/>
                    WOW close with name
                </tr>
                <br/>
                <tr>
                    <th align={"left"} bgcolor={"#999DA0"}>
                        <input type="checkbox" checked={this.state.checkbox21} onChange={this.handleCHC21}/>
                        Leads
                    </th>
                </tr>
                <tr>
                    <input type="checkbox" checked={this.state.checkbox22} onChange={this.handleCHC22}/>
                    Offer lead

                </tr>
                <br/>
                {/*counter for call*/}
                Call {this.callCounter} of 5<br/>
                {/*calls functions to calculate total and update chart*/}
                <button onClick={this.calculateTotal}> Next Call </button>
                {/*calls function to reset data*/}
                <button onClick={this.resetCalls}> Reset </button>



            </table>


        );
    }
}


export default Homepage;

