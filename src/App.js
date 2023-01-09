import { Component } from "react";
import './App.css';
import ImageCard from "./ImageCard/ImageCard";

const images = [
  {
    src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Malaysian Mountains"
  },
  {
    src: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Mount Japhal"
  },
  {
    src: "https://i.pinimg.com/236x/76/92/cd/7692cd623ac4dbaffc4f6d4938759a79.jpg",
    name: "OG"
  },
  {
    src: "https://i.pinimg.com/236x/9e/18/e3/9e18e3481aa0eddad028dfe48cd68ea6.jpg",
    name: "Wizkid"
  },
  {
    src: "https://i.pinimg.com/236x/f8/8d/92/f88d9291910c11a27824b1eb5e3a30b1.jpg", 
    name: "Mario Brothers"
  },
  {
    src: "https://images.pexels.com/photos/6898855/pexels-photo-6898855.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Emoji World"
  },
  {
    src: "https://images.pexels.com/photos/1013326/pexels-photo-1013326.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Happy jane"
  },
  {
    src: "https://i.pinimg.com/236x/4c/59/6f/4c596ff818e29edea16bb21b6c5ab482.jpg",
    name: "Huey"
  },
  {
    src: "https://i.pinimg.com/236x/4d/83/f9/4d83f92dfb95b731cf107d9fb916b38d.jpg",
    name: "Rilley"
  }
]

export default class App extends Component{

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  add() {
    this.setState({count: (this.state.count + 1) % images.length})
  }
  sub () {
    const count = (this.state.count - 1)
    this.setState({count: count < 0 ? 0 : count})
  }

  render () {
    console.log(images)
    return (
      <div className='main'>
      <div className='snow'>
        <img src={images[this.state.count].src} alt={images[this.state.count].name}></img>
        <p>{this.state.count +1}: {images[this.state.count].name}</p>
      </div>
        <div className='counter'>
          <button onClick={this.sub.bind(this)}>-</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.add.bind(this)}>+</button>
        </div>
        <div className="images">
      {images.map((image, index) => {
      <ImageCard
      key={image.src}
      src={image.src}
      name={image.name}
      selected={index === this.state.count}
      />
      })}
        </div>
    </div>
);
}
}
