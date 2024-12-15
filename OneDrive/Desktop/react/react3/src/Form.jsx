function handleFormsubmit(event) {
     console.log("form is submitted");
     
      event.preventDefault();

}

function Form() {
    return(
          <form>
            <input placeholder="write something"></input>
            <button onClick={handleFormsubmit}>submit</button>
          </form>
    );
}

export default Form;