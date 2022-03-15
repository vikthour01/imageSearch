import React from "react";
import Unsplash from "../Api/Unsplash"
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

class App extends React.Component {
  //this callback function is responsible for collecting the value passed into the input in the searchBar component
//we can either use the .then method to get our response or we use the async and await method

state = {images:[]}

///callback function passed down to a child component, this callback is responsible for working on the user input gotten from the searchBar component. we passed a callback function to the searchBar component as props so we can get thr user input and worked on them.
   onSearchSubmit = async(term) => {
    const response = await Unsplash.get("/search/photos", {
        params: {query: term},
         
    })
    //the .then method it return a promise to use the .then method no need to put async and await in front again
    // .then((response)=>{
    //     console.log(response.data.results)

    
    // })
    this.setState({images: response.data.results})
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* this component is responsible for getting the user's input */}
        <SearchBar onSubmit={this.onSearchSubmit} victor="gggg" />
          {/* here you can use anyName cos this is not a built prop it was created by you */}
        {/* this component is responsible for displaying the images */}
        <ImageList images={this.state.images}/>
      
      </div>
    );
  }
}

export default App;
