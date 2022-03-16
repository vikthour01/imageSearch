import React from "react";

class SearchBar extends React.Component {
  // controlled and uncontrolled components. if you are confused in the future go check your note. taking the data from the dom and putting it into the react world
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
//   constructor(){
//       super()
//       this.onFormSubmit = this.onFormSubmit.bind(this)
//   }

state = { term: "" };

onFormSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.term)
    //we need to work on the input gotten from the users, we use to use the app components, since props can only be passed from top to bottom. we used a callback function passed as props to send the user input to the parent component(app)
    this.props.onSubmit(this.state.term)
}
//fix for the error of undefined or use a constructor

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}  className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="enter a text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              //   onChange={(e) => {console.log(e.target.value)} this is an inline styling. you can either use this or define it above}
            />
            {/* the onChange is an inbuilt property */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
