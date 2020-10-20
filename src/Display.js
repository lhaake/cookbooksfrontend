import React from "react";

const Display = (props) => {
    console.log("this is props in display", props.cookbooks)
    const cookbookData = props.cookbooks
    console.log("this is the data!!", cookbookData)

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {cookbookData.map((book) => (
        <article>
          <h1>{book.title}</h1>
          <h3>{book.yearPublished}</h3>
          <button onClick={() => {
            props.selectCookbook(book)        // when button is clicked, the book is passed into selectCookbook function - changes the state in App. 
            props.history.push("/edit")
          }}>
            Edit
          </button>

           <button onClick={() => {
            props.deleteCookbook(book)        // when button is clicked, the book is passed into deleteCookbook function - deleted via fetch call 
          }}>
            Delete
          </button>

        </article>
      ))}
      </div>
)

  return ( 
   cookbookData.length > 0 ? loaded() : <h1>Loading...</h1>
  )


}
export default Display;
