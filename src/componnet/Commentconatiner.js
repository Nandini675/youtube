import React from 'react'
 const commentsData=[
{
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [],
 },
 {
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [
     {
       name: "Akshay Saini",
       text: "Lorem ipsum dolor sit amet, consectetur adip",
       replies: [],
     },
     {
       name: "Akshay Saini",
       text: "Lorem ipsum dolor sit amet, consectetur adip",
       replies: [
         {
           name: "Akshay Saini",
           text: "Lorem ipsum dolor sit amet, consectetur adip",
           replies: [
             {
               name: "Akshay Saini",
               text: "Lorem ipsum dolor sit amet, consectetur adip",
               replies: [
                 {
                   name: "Akshay Saini",
                   text: "Lorem ipsum dolor sit amet, consectetur adip",
                   replies: [
                     {
                       name: "Akshay Saini",
                       text: "Lorem ipsum dolor sit amet, consectetur adip",
                       replies: [],
                     },
                   ],
                 },
                 {
                   name: "Akshay Saini",
                   text: "Lorem ipsum dolor sit amet, consectetur adip",
                   replies: [],
                 },
               ],
             },
           ],
         },
       ],
     },
   ],
 },
 {
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [],
 },
 {
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [],
 },
 {
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [],
 },
 {
   name: "Akshay Saini",
   text: "Lorem ipsum dolor sit amet, consectetur adip",
   replies: [],
 },
];// array of coment, each and every obj is a comment
 const Comment=({data})=>{
   const {name, text, replies}= data;
 return <div className=' flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
  <img className='w-8 h-8'
   alt="user" 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaJS0dnDYQ5NkVr30LWhCjQoMLtm6BC0TDA&s"></img>
  <div className='px-3'>
   <p className='font-bold'>{name}</p>
   <p>{text}</p>
  </div>
 </div>
 };
 const Commentlist = ({comments}) =>{
   // trying to loop in through all the comment list
   return comments.map((comment,index)=>(
      <div key={index} >
             <Comment  data={comment} />
    {/* below this my reply should come */}
    <div className=' pl-5 border border-l-black ml-5'>
   <Commentlist comments={comment.replies}/>

    </div>
   </div>
        )) };
const Commentconatiner = () => {
  return (
    <div className='m-2 p-4'>
<h1 className='text-2xl font-bold'> comments:</h1>
<Commentlist comments={commentsData}/>
</div>
  )
}

export default Commentconatiner