import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from 'react';
import   './footer.css';
import './head.css';
import ButtonRedirect from '../API/button';
class Hello extends Component {
 render(){
 return (
   <div>
     <Navbar bg="primary" variant="dark">
       <Container>
         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
         <Nav className="me-auto">
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="/class3">about</Nav.Link>
           <Nav.Link href="/clas2">contact</Nav.Link>
           <Nav.Link href="/clas1">our teachers</Nav.Link>
           <Nav.Link href="/cardlist">designers</Nav.Link>
         </Nav>
       </Container>
     </Navbar>
     <br></br>
     <ButtonRedirect></ButtonRedirect>
     <>
       <div className="overflow-hidden">
         <div className="container-fluid col-xxl-8">
           <div className="row flex-lg-nowrap align-items-center g-5">
             <div className="order-lg-1 w-100">
               <img
                 style={{
                   clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
                 }}
                 src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&ixlib=rb-1.2.1&q=80&w=1080&h=768"
                 className="d-block mx-lg-auto img-fluid"
                 alt="Photo by Milad Fakurian"
                 loading="lazy"
                 srcSet="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1680277844~exp=1680278444~hmac=b2449b2d855626d804a3d031fab183fe1eead585cad397da67b9085740b583cf"
                 sizes="(max-width: 1080px) 100vw, 1080px"
                 width={2160}
                 height={768}
               />
             </div>
             <div className="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4">
               <div className="lc-block mb-4">
                 <div editable="rich">
                   <h1 className="fw-bold display-3">
                     Enroll for Online English Courses
                   </h1>
                 </div>
               </div>
               <div className="lc-block mb-5">
                 <div editable="rich">
                   <p className="rfs-8">
                     {" "}
                     over 300 students have been Enrolled
                   </p>
                 </div>
               </div>
               <div className="lc-block mb-6">
                 <a
                   className="btn btn-dark px-4 me-md-2 btn-lg "
                   href="#"
                   role="button"
                 >
                   {" "}
                   Enroll Now
                 </a>
               </div>
               <div className="lc-block">
                 <div editable="rich">
                   <p className="fw-bold"> </p>
                 </div>
               </div>
               <div className="row">
                 <div className="lc-block col-3">
                   <img
                     className="img-fluid wp-image-975"
                     src=""
                     width=""
                     height={300}
                     srcSet=""
                     sizes=""
                     alt=""
                   />
                 </div>
                 <div className="lc-block col-3">
                   <img
                     className="img-fluid wp-image-977"
                     src=""
                     width=""
                     height={300}
                     srcSet=""
                     sizes=""
                     alt=""
                   />
                 </div>
                 <div className="lc-block col-3">
                   <img
                     className="img-fluid wp-image-974"
                     src=""
                     width=""
                     height={300}
                     srcSet=""
                     sizes=""
                     alt=""
                   />
                 </div>
                 <div className="lc-block col-3">
                   <img
                     className="img-fluid wp-image-967"
                     src=""
                     width=""
                     height={300}
                     srcSet=""
                     sizes=""
                     alt=""
                   />
                 </div>
               </div>
             </div>
           </div>
           {/* /lc-block */}
         </div>
       </div>
       <div className="container">
         <div className="row">
           <div className="col-md-12 text-center">
             <div className="lc-block">
               <span editable="inline" className="small mt-4 d-block"></span>
               <h2 editable="inline" className="display-2 mb-0">
                 <b>why you need learn english </b>
               </h2>
               <p editable="inline" className="">
                 {" "}
               </p>
             </div>
             {/* /lc-block */}
           </div>
         </div>
         <div className="row pt-4">
           <div className="col-md-4 text-center">
             <div className="lc-block">
               <img
                 alt=""
                 className="img-fluid"
                 src="https://cdn-icons-png.flaticon.com/512/2888/2888393.png"
                 style={{ height: "25vh" }}
               />
               <h4 className="my-3" editable="inline" />
               <p editable="inline">
                 English is the dominant business language and it has become
                 almost a necessity for people to speak English if they are to
                 enter a global workforce. Research from all over the world
                 shows that cross-border business communication is most often
                 conducted in English and many international companies expect
                 employees to be fluent in English..{" "}
               </p>
             </div>
             {/* /lc-block */}
           </div>
           <div className="col-md-4 text-center">
             <div className="lc-block">
               <img
                 className="img-fluid"
                 alt=""
                 src="https://cdn-icons-png.flaticon.com/512/10035/10035705.png"
                 style={{ height: "25vh" }}
               />
               <h4 className="my-3" editable="inline" />
               <p editable="inline">
                 Therefore, by learning English you will have access to a great
                 wealth of entertainment and will be able to have a greater
                 cultural understanding. If you speak English, you won't need to
                 rely on translations and subtitles anymore to enjoy your
                 favourite books, songs, films and TV shows. Watching movies and
                 television programmes in the English language is also a great
                 and fun way to learn it.{" "}
               </p>
             </div>
             {/* /lc-block */}
           </div>
           <div className="col-md-4 text-center">
             <img
               className="img-fluid"
               alt=""
               src="https://cdn-icons-png.flaticon.com/512/745/745205.png"
               style={{ height: "25vh" }}
             />
             <h4 className="my-3" editable="inline" />
             <p editable="inline">
               it is the official language of 53 countries and spoken by around
               400 million people across the globe. Being able to speak English
               is not just about being able to communicate with native English
               speakers.{" "}
             </p>
           </div>
         </div>
       </div>
       <section>
         <div
           className="d-flex container-fluid"
           lc-helper="background"
           style={{
             minHeight: "40vh",
             background:
               "url(https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1980&h=768&fit=crop&ixid=eyJhcHBfaWQiOjM3ODR9)  center / cover no-repeat",
           }}
         />
         <div
           className="container py-5 bg-light"
           style={{ marginTop: "-20vh" }}
         >
           <div className="row">
             <div className="col-md-12 text-center text-dark">
               <div className="lc-block">
                 <div className="lc-block ">
                   <div editable="rich">
                     <h2>E-ONLINE LEARING </h2>
                   </div>
                 </div>
                 {/* /lc-block */}
               </div>
               {/* /lc-block */}
               <div className="lc-block text-center">
                 <div editable="rich">
                   <p> Copyright © My Company 2020</p>
                 </div>
               </div>
               {/* /lc-block */}
             </div>
             {/* /col */}
           </div>
           <div className="row d-flex justify-content-center">
             <div className="d-flex col-md-12 justify-content-center">
               <div className="lc-block text-center text-dark py-5 mx-2">
                 <a
                   className="text-decoration-none"
                   href="https://www.facebook.com/"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                     width="2em"
                     height="2em"
                     lc-helper="svg-icon"
                     fill="currentColor"
                   >
                     <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                   </svg>
                 </a>
               </div>
               <div className="lc-block text-center text-dark py-5 mx-2">
                 <a
                   className="text-decoration-none"
                   href="https://www.pinterest.com/"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                     width="2em"
                     height="2em"
                     lc-helper="svg-icon"
                     fill="currentColor"
                   >
                     <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
                   </svg>
                 </a>
               </div>
               <div className="lc-block text-center text-dark py-5 mx-2">
                 <a
                   className="text-decoration-none"
                   href="https://www.linkedin.com/"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                     width="2em"
                     height="2em"
                     lc-helper="svg-icon"
                     fill="currentColor"
                   >
                     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                   </svg>
                 </a>
               </div>
               <div className="lc-block text-center text-dark py-5 mx-2">
                 <a
                   className="text-decoration-none"
                   href="https://www.instagram.com/"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                     width="2em"
                     height="2em"
                     lc-helper="svg-icon"
                     fill="currentColor"
                   >
                     <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                   </svg>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   </div>
 );
 }
  }
      export default Hello;