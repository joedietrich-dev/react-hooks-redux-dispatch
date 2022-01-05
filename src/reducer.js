function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function render() {
  document.querySelector("#count").innerHTML = state.count;
}
function dispatch(action) {
  state = changeState(state, action);
  render();
  return state;
}

const upButt = document.querySelector("#up");
const downButt = document.querySelector("#down");

upButt.addEventListener("click", () => dispatch({ type: "counter/increment" }));
downButt.addEventListener("click", () => dispatch({ type: "counter/decrement" }));

render();
