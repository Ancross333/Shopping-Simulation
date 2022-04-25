import React, { Component } from 'react';
class Shop extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            item1: 0,
            item2: 0,
            money: 50,
            totalCost: 0,
            checkoutLabel: "",
            color: "pink"
        }

        this.addItem1 = this.addItem1.bind(this)
        this.addItem2 = this.addItem2.bind(this)
        this.removeItem1 = this.removeItem1.bind(this)
        this.removeItem2 = this.removeItem2.bind(this)
        this.checkout = this.checkout.bind(this)
        this.clear = this.clear.bind(this)
    }

    addItem1(){
        this.state.item1++;
        this.state.totalCost += 5
        this.setState(state =>({
            item1: this.state.item1,
            totalCost: this.state.totalCost
        }));
    }

    addItem2(){
        this.state.item2++;
        this.state.totalCost += 10
        this.setState(state =>({
            item2: this.state.item2,
            totalCost: this.state.totalCost
        }));
    }

    removeItem1(){
        if(this.state.item1 != 0){
            this.state.item1--;
            this.state.totalCost -= 5;
        }

        this.setState(state => ({
            item1: this.state.item1,
            totalCost: this.state.totalCost
        }));
    }

    removeItem2(){
        if(this.state.item2 != 0){
            this.state.item2--;
            this.state.totalCost -= 10;
        }

        this.setState(state =>({
            item2: this.state.item2,
            totalCost: this.state.totalCost
        }));
    }

    checkout(){
        if(this.state.money >= this.state.totalCost && this.state.totalCost != 0){
            this.state.checkoutLabel = "Items Purchased Succesfully"
            this.state.color = "lime";
            this.state.money -= this.state.totalCost;
        }
        else if(this.state.money >= this.state.totalCost){
            this.state.checkoutLabel = "Add an item you wish to purchase into your cart."
            this.state.color = "black"
        }
        else{
            this.state.checkoutLabel = "You cannot afford everything in your cart"
            this.state.color = "red"
        }

        this.setState(state =>({
            checkoutLabel: this.state.checkoutLabel,
            color: this.state.color,
            money: this.state.money
        }))
    }

    clear(){
        this.setState(state => ({
            item1: 0,
            item2: 0,
            totalCost: 0,
            checkoutLabel: ""

        }));
    }


    render() { 
        return (
            <div
                style = {{
                            
                        }}
            >
                {/*Header*/}
                <div 
                    style = {{textAlign: "center"}}
                >
                    <h1>
                        Shop Title
                    </h1>
                </div>

                {/*Wallet*/}

                <div
                    style = {{
                                textAlign: "center"
                            }}
                >

                <h2>
                    {"You have: $" + this.state.money}
                </h2>
                </div>

                {/*Item 1*/}

                <div
                    style = {{
                                textAlign: "center",
                                marginBottom: 20
                            }}
                >

                    {/*Text for first item*/}

                    <label
                        style = {{
                                    marginRight: 20            
                                }}
                    >
                        First Item ($5):
                    </label>

                    {/*Add Button for first item*/}

                    <button
                        style = {{
                                }}

                        onClick = {this.removeItem1}
                    >
                        Remove
                    </button>

                    {/*Subtract Button for second item*/}

                    <button
                        style = {{
                                    marginLeft: 25
                                }}
                        
                        onClick = {this.addItem1}
                    >
                        Add
                    </button>

                    {/*Label Displaying How much is there*/}

                    <label
                        style = {{
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                    >

                        {this.state.item1}

                    </label>
                </div>

                {/*Item 2*/}

                <div
                    style = {{
                                textAlign: "center"
                            }}
                >


                    {/*Label for item 2*/}

                    <label
                        style = {{
                                    marginRight: 20,
                                    marginLeft: 20
                                }}
                    >
                        Second Item ($10):
                    </label>
                    
                    {/*Buttons for item 2*/}

                    <button
                        onClick = {this.removeItem2}
                    >
                        Remove
                    </button>

                    <button
                        style = {{
                                    marginLeft: 25
                                }}

                        onClick = {this.addItem2}
                    >
                        Add
                    </button>

                    {/*Label to display item 2 contents*/}

                    <label
                        style = {{
                                    marginLeft: 20,
                                    marginRight: 68,
                                    //textAlign: "left"
                                }}
                    >
                        {this.state.item2}
                    </label>
                </div>




                {/*Checkout and Clear Buttons*/}

                <div 
                    style = {{
                                textAlign: "center",
                                marginTop: 250
                            }}
                    >
                    <button
                        style = {{
                                    marginRight: 25,
                                    
                                }}

                        onClick = {this.clear}
                    >
                        Clear
                    </button>

                    <button
                        style = {{
                                    
                                }}

                        onClick = {this.checkout}
                    >
                        Checkout
                    </button>
                </div>

                {/*Total Cost Label*/}

                <div
                    style = {{
                                textAlign: "center",
                                marginTop: 15,
                            }}
                >
                    <label 
                    >
                        {"Total Cost: $" + this.state.totalCost}
                    </label>
                </div>

                {/*Checkout Label*/}

                <div
                    style = {{
                                textAlign: "center"
                            }}
                >

                    <h2
                        style = {{
                                    color: this.state.color
                                }}
                    >
                        {this.state.checkoutLabel}
                    </h2>
                </div>
            </div>
        );
    }
}
 
export default Shop;