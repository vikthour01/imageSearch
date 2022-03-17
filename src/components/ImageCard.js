import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    //react Refs gives you access to a single DOM element
    this.imageRef = React.createRef();
    this.state = {spans:0}
  }
  componentDidMount() {
    // console.log(this.imageRef)
    // console.log(this.imageRef.current)
    //we need the current to load the image before we can get the height
    this.imageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height/10)

    this.setState({spans:spans})
  };
  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
