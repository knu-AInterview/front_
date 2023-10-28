import React, { useState } from 'react';
import './App.css';
import Example from './Example';
import 'bootstrap/dist/css/bootstrap.min.css';
 
// Import useful components for the Carousel
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
 
// Define Photo Properties
const photos = [
  {
    id: 1,
    src: 'https://loremflickr.com/1200/400?random=1',
    alt: 'Placeholder Image',
    caption: 'Slide 1', 
  },
  {
    id: 2,
    src: 'https://loremflickr.com/1200/400?random=2',
    alt: 'Placeholder Image',
    caption: 'Slide 2', 
  },
  {
    id: 3,
    src: 'https://loremflickr.com/1200/400?random=3',
    alt: 'Placeholder Image',
    caption: 'Slide 3', 
  },
];
 
// function App() {
 
//   // Create State for current slide index
//   const [index, setIndex] = useState(0);
 
//   // Create State to know when a transition is occuring
//   const [slideAnimation, setSlideAnimation] = useState(false);
 
//   // Create function for next Slide handler
//   const next = () => {
//     if (slideAnimation) return;
//     const nextIndex = index === photos.length - 1 ? 0 : index + 1;
//     setIndex(nextIndex);
//   }
 
//   // Create function for previous Slide handler
//   const prev = () => {
//     if (slideAnimation) return;
//     const nextIndex = index === 0 ? photos.length - 1 : index - 1;
//     setIndex(nextIndex);
//   }
 
//   // Enable non-linear navigation of slides
//   const moveToIndex = (newIndex) => {
//     if (slideAnimation) return;
//     setIndex(newIndex);
//   }
 
//   // Loop over Photos to create a Carousel Item
//   const slides = photos.map(photo => (
//     <CarouselItem
//       key={photo.id}
//       onExiting={() => setSlideAnimation(true)}
//       onExited={() => setSlideAnimation(false)}
//     >
//       <img src={photo.src} alt={photo.alt} />
//       <CarouselCaption
//         captionText={photo.caption}
//         captionHeader={photo.caption} 
//       />
//     </CarouselItem>
//   ));
 
//   return (
//     // Center the Carousel
//     <div style={{margin: '0 auto', maxWidth: 1200}}>
//       <Carousel
//       activeIndex={index}
//       next={next}
//       previous={prev}
//       >
//         <CarouselIndicators
//           items={photos}
//           activeIndex={index}
//           onClickHandler={moveToIndex}
//         />
//         { slides }
//         <CarouselControl
//           direction="prev"
//           directionText="Previous"
//           onClickHandler={prev}
//         />
//         <CarouselControl
//           direction="next"
//           directionText="Next"
//           onClickHandler={next}
//         />
//       </Carousel>
//       <div>
//         <Example />
//       </div>
//       <div>
        
//       </div>  
//     </div>
//   )
// }

import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function App(){

  const [index, setIndex] = useState(0);
 
  // Create State to know when a transition is occuring
  const [slideAnimation, setSlideAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); // 대분류 선택 상태
  const [selectedSubcategory, setSelectedSubcategory] = useState(''); // 중분류 선택 상태
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { name: '카테고리1', subcategories: ['서브1', '서브2', '서브3'] },
    { name: '카테고리2', subcategories: ['서브4', '서브5', '서브6'] },
    // 다른 대분류와 중분류 데이터 추가
  ];


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  // 대분류 선택 이벤트 핸들러
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory(''); // 대분류 변경 시 중분류 선택 초기화
  };

  // 중분류 선택 이벤트 핸들러
  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  // Create function for next Slide handler
  const next = () => {
    if (slideAnimation) return;
    const nextIndex = index === photos.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  }
 
  // Create function for previous Slide handler
  const prev = () => {
    if (slideAnimation) return;
    const nextIndex = index === 0 ? photos.length - 1 : index - 1;
    setIndex(nextIndex);
  }
 
  // Enable non-linear navigation of slides
  const moveToIndex = (newIndex) => {
    if (slideAnimation) return;
    setIndex(newIndex);
  }
 
  // Loop over Photos to create a Carousel Item
  const slides = photos.map(photo => (
    <CarouselItem
      key={photo.id}
      onExiting={() => setSlideAnimation(true)}
      onExited={() => setSlideAnimation(false)}
    >
      <img src={photo.src} alt={photo.alt} />
      <CarouselCaption
        captionText={photo.caption}
        captionHeader={photo.caption} 
      />
    </CarouselItem>
  ));


  return (
      <div>
      <Form>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Job
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Please select.
      </option>
      <option>
        Front-end Engineer
      </option>
      <option>
        Back-end Engineer
      </option>
      <option>
        AI Researcher
      </option>
    </Input>
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">
      Requirements
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
      placeholder='Enter requirements.'
    />
  </FormGroup>
  <Example />
  <Button>
    Next!
  </Button>
</Form>
    </div>
  )
}

export default App;
