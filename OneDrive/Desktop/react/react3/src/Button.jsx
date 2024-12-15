

function printhello() {
     console.log("hello");
}



function Button() {
     
  return (
     <>
          <button onClick={printhello}>
               click me!
          </button>
     </>
  );

}

export default Button;