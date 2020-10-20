import React from "react";

const Display = (props) => {
    console.log("this is props in display", props)


  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {props.cookbooks.map((book) => (
        <article>
          <h1>{props.book.title}</h1>
          <h3>{props.book.yearPublished}</h3>
          <button onClick={() => {
            props.selectCookbook(book)        // when button is clicked, the dog is passed into selectDog function - changes the state in App. 
            props.history.push("/edit")
          }}>
            Edit
          </button>

           <button onClick={() => {
            props.deleteCookbook(book)        // when button is clicked, the dog is passed into deleteDog function - deleted via fetch call 
          }}>
            Delete
          </button>

        </article>
      ))}
      </div>
  )

  return props.cookbooks.length > 0 ? loaded() : <h1>Loading...</h1>


}
export default Display;
