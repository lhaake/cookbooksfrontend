import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.cookbook);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); // Push back to display page on main page "/"
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
   // event listener, listening for submit 
     <form onSubmit={handleSubmit}>   
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formData.yearPublished}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};
export default Form;