import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

export default function App() {
// URL VARIABLE
const url = "http://localhost:4000"

const [cookbooks, setCookbooks] = React.useState([])

// Empty book for Form. So the form starts out empty
const emptyCookbook = {
  title: "",
  yearPublished: ""
}

// SELECTED cookbook STATE for user to select &  update
const [selectedBook, setSelectedBook] = React.useState(emptyCookbook)

// FUNCTION TO FETCH DOGS
const getCookbooks = () => {
  fetch(url + "/api/cookbooks/")
    .then(response => response.json())
    .then(data => {
      setCookbooks(data)   // array we get back from the fetch that populates cookbooks + updates state
  })
  
}

// Get cookbooks on page load
React.useEffect( () => getCookbooks(), [])


// handleCreate function for creating cookbooks
// method: post (create)
const handleCreate = (newCookbook) => {
  fetch(url + "/api/cookbooks/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCookbook),
  })
  .then(response => getCookbooks())
}

  // handleUpdate to update a dog when form is clicked
// method: put (update)
const handleUpdate = (cookbook) => {
  fetch(url + "/api/cookbooks/" + cookbook._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cookbook)
  })
  .then(response => getCookbooks())    
}

// selectCookbook which selects a cookbook
const selectCookbook = (cookbook) => {
  setSelectedBook(cookbook)
}

//Delete 
const deleteCookbook = (cookbook) => {
  fetch(url + "/api/cookbooks/" + cookbook.title, {
    method: "delete"
  })
  .then(response => getCookbooks())
}


  return (
    <div className="App">
      <h1>Cookbooks App</h1>
      <hr />

      <Link to="/create">
        <button>Add Cookbook</button>
      </Link>

      <main>
      <Switch>
        <Route exact path="/"
        render={(routerprops) => (
          <Display {...routerprops} cookbooks={cookbooks} selectCookbook={selectCookbook} deleteCookbook={deleteCookbook} />
        )} 
        /> 

        <Route exact path="/create"
         render={(routerprops) => ( <Form {...routerprops} label="create" cookbook={emptyCookbook} handleSubmit={handleCreate} /> 
         )}
        />

       <Route exact path="/edit"
         render={(routerprops) => ( <Form {...routerprops}label="update" cookbook={selectedBook} handleSubmit={handleUpdate} /> 
         )}
        />


      </Switch> 
      </main>
    </div>
  )
}



// export default App
