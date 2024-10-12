


//  const age=34;
// let name="megha";
// const sub="math";

import Home from "./Home";



  
// const App=()=>{
// return(

//   <>
//   <h1> heloo i am {age*2} year old my name {name}</h1>
//   <h1>my subject :{sub}</h1>
//   <h1>application form</h1>
//   name: <input type="text" />
//   <br />
//   <br />
//   city: <input type="text"/>
//   <br />
//   <br />
//   <input type="button" value="save"/>
//   <h1 className="data">welcome to cybrom</h1>

//   </>
// )


// }
// export default App;

// import Cybrom from "./cybrom";
// import Header from "./Header";
// import Middle from "./middle";
// import Footer from "./Footer";
// const App=()=>{
//   return(
//     <>
//     <h1>this cybrom class</h1>
  

//     <Cybrom/>
//     <Middle />
//     <Header />
//     <Footer />
   
//     </>
//   )

// }
// export default App;


// import College from "./College";
// const rollno=1250;
// const namee= "megha";
// const city="bhopal";
// const fees=12300;
// import Stu from "./Stu";
// const Student={
//   rollno:121,
// namee:"megha",
// city:"bhopal",
//  fees:34567



// }
// const App=()=>{
// return(
//   <>
//   <h1 align="center">welcome to cybrom</h1>
//    {/* <College rno={rollno} nm={namee} ct={city} fs={fees}/>  */}
//   <Stu rno={Student.rollno}  nm={namee} ct={Student.city}/>
//   </>
// )

// }
// export default App;

// const age=[2,45,6,7,8,9,]
// const name=["anju","unal","simran","sham"];
// const mydata=age.map(key=> <h2> {key*3}</h2>)
// const mydata=age.map((key)=>{

//   return(
//     <>
//     <h1>{key*3}</h1></>
//   )
// })

// const mynm=name.map((key)=>{
// return(

//   <>
  
//   <h1>{key}</h1></>
// )


// });
// const App=()=>{
// return(
//   <>
//   <h1>welocme to map() method in js</h1>
//   {mynm}
//   {mydata}
//   </>
  
// )
// }
// export default App;

// const student=[
// {
//   "rollno":120,
//   "name":"rashi",
//   "city":"bhopal"
// },
// {
//   "rollno":120,
//   "name":"rashi",
//   "city":"bhopal"
// },
// {
//   "rollno":121,
//   "name":"rashi",
//   "city":"bhopal"
// },
// {
//   "rollno":122,
//   "name":"rashi",
//   "city":"nagpur"
// },
// {
//   "rollno":123,
//   "name":"raashi",
//   "city":"bhopal"
// }
// ]
// const ans=student.map((key)=>{
// return(

//   <>
  

//   <tr>
// <td>{key.rollno}</td>
// <td>{key.name}</td>
// <td>{key.city}</td>



//   </tr>
//   </>
// )


// });
// const App=()=>{
//    return(
//     <>
//      <h1>welocme to map() method in js</h1>
//      <table border="1" width="500">

//       <tr>
//         <th>Rollno</th>
//         <th>Name</th>
//         <th>City</th>


//       </tr>
   
//      {ans}
//      </table>
//     </>
    
//    )

// }
//  export default App;

// import EmpData from "./EmpData";
// import EmpDesign from "./EmpDesign";

// const Ans=EmpData.map((key)=>{
// return(
//   <>
//   <tr>
// <td>{key.empno}</td>
// <td>{key.name}</td>
// <td>{key.city}</td>
// <td>{key.salary}</td>

//   </tr>
  
//   </>
// )

// })


// const App=()=>{
//   return(
//     <>
//     <h1>employ records</h1>
//     <table border="1" width="500">
// <tr bgcolor="orange">
// <th>Employee no</th>
// <th>Name</th>
// <th>City</th>

// <th>Salary</th>


// </tr>
// {Ans}

//     </table>
//     </>
//   )
// }
// export default App;

// import Stu from "./Stu";
// import College from "./College";

// const ans=Stu.map((key)=><College rno={key.rollno} nm={key.name} ct={key.city} fees={key.fees}/>)

// const App=()=>{
//      return(
//       <>
//        <h1 align="center">display student data</h1>
//        <table border="1" width="500" align="center">
  
//         <tr bgcolor="orange">
//           <th>Rollno</th>
//           <th>Name</th>
//           <th>City</th>
//           <th>fees</th>
  
  
//         </tr>
     
//        {ans}
//        </table>
//       </>
      
//      )
  
//   }
//    export default App;



// const App=()=>{
//   return(
//     <>
//     <h1 style={{color:"red",fontFamily:"arial"}}> Display Student data</h1>
    
   
//     </>
//   )
// }
// export default App;

// const box={
//   width:"400px",
//   height:"300px",
//   border:"4px solid red",
//   backgroundColor:"yellow",
//   borderRadius:"30px"
// }
// const box1={
//   width:"300px",
//   height:"200px",
//   border:"4px solid blue",
//   backgroundColor:"pink",
//   borderRadius:"40px",
//   margin:"47px"
// }
// const box2={
//   width:"200px",
//   height:"100px",
//   border:"4px solid green",
//   backgroundColor:"lightgreen",
//   borderRadius:"30px",
//   margin:"47px",
//   color:"red"
// }
// const App=()=>{

//   return(

//     <>
//     <div style={box}>
// <div style={box1}>
//   <div style={box2}>
//     <h1 align="center">Cybrom</h1>

//   </div>


// </div>

//     </div>
    
//     </>
//   )
// }
// export default App;  

// import Cybrom from "./cybrom";
// import College from "./College";
// const App=()=>{
//   return(
// <>
// <h1>welcome to cybrom</h1>
// <Cybrom/>
// <College/>
// </>
//   )
// }
// export default App;
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert'
// import Accordion from 'react-bootstrap/Accordion';
// import Badge from 'react-bootstrap/Badge';


 import Container from 'react-bootstrap/Container';
import TopHeader from "./TopHeader";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const App=()=>{
//   return(
//     <>
//     <h1>welcome to cybrom bhopal


//     </h1>
//     <h2>welcome</h2>

//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
      
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <div style={{width:"900px" , margin:"auto"}}>

//     <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//     </div>
//     <div >
//     <h1>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h1>
//       <h1>
//         Example heading <Badge bg="warning">New</Badge>
//       </h1>
//       <h1>
//         Example heading <Badge bg="info">New</Badge>
//       </h1>
//       <h1>
//         Example heading <Badge bg="success">New</Badge>
//       </h1>
//       </div>

//     <div style={{width:"400px"}}> 
//     <Alert variant="danger">
//           This is a alert—check it out!
//         </Alert>
//         <Alert variant="warning">
//           This is a alert—check it out!
//         </Alert>
//         <Alert variant="info">
//           This is a alert—check it out!
//         </Alert>
//         <Alert variant="success">
//           This is a alert—check it out!
//         </Alert>
//     <Button variant='primary'>click here</Button>
//     <br /><br />
//     <Button variant='danger'>cilck here</Button>
//     <br /><br />
//     <Button variant='warning'>cilck here</Button><br /><br />
//     <Button variant='dark'>cilck here</Button><br /><br />
//     <Button variant='light'>cilck here</Button><br /><br />
//     <Button variant='secondary'>cilck here</Button><br /><br />

//     <Button variant='outline-danger'>cilck here</Button><br /><br />
//     <Button variant='outline-warning'>cilck here</Button><br /><br />
//     <Button variant='outline-dark'>cilck here</Button><br /><br />
//     <Button variant='outline-light'>cilck here</Button><br /><br />
//     <Button variant='outline-secondary'>cilck here</Button><br /><br />




//     </div>
//     </>
//   )
// }
// export default App;

// import myimg from "./images/e1.jpeg";

// const App=()=>{
//   return(
// <>


// <h1>welocmr</h1>
// <img src={myimg}/> 
//  <img src="public/images/e1.jpg.jpg"/> */

// </> 
//   )
// }
// export default App;
// import Carousel from 'react-bootstrap/Carousel';
// const App=()=>{
//   return(
// <>
// <Carousel>
//       <Carousel.Item>
//         <img src="public/images/r1.jpg.jpg" style={{width:"90%", height:"900px"}}/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/r2.jpg.jpg"style={{width:"90%", height:"900px"}}/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/r3.jpg.jpg"style={{width:"90%", height:"900px"}}/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>


// </> 
//   )
// }
// export default App;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';

// const App=()=>{
// return(
//   <>
//   <Navbar>
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     {/* <Carousel>
//       <Carousel.Item>
//         <img src="public/images/r1.jpg.jpg"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/r2.jpg.jpg"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/r3.jpg.jpg"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="public/images/" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card> */}


//   </>
// )

// }
// export default App;

// import Container from 'react-bootstrap/Container';
// import Top from "./componenets/Top";
// import TopBan from './componenets/TopBan';
// import HaedPage from './componenets/HeadPage';

// const App=()=>{
//   return(
//     <>
// <Container>

// <Top/>
// <TopBan/>
// </Container>
// <HaedPage/>

    
//     </>
//   )
// }
// export default App;


// import Figure from 'react-bootstrap/Figure';

// const App=()=>{
//   return
//   (
//     <>
// <Figure>
//       <Figure.Image
//         width={171}
//         height={180}
//         alt="171x180"
//         src="public/images/e1.jpg.jpg"/>
//       <Figure.Caption>
//         Nulla vitae elit libero, a pharetra augue mollis interdum.
//       </Figure.Caption>
//     </Figure>
//     </>
//   )
// }
// export default App;

//  import { Button ,message } from 'antd';
  

// const App=()=>{
// {
// const display=()=>{
//   message.success("data successfully")
// }
// return(
//   <>
//   <Button type="primary" onClick={display}>clickhere</Button></>
// )

// }
// }
// export default App;



// const App=()=>{
//   return(
//     <>
//     <h1></h1>
//     <Home/>
//     </>
//   )
// }
// export default App;