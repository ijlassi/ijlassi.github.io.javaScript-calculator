class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      currentValue: "",
      currentFormula: "",
      equalIsClicked: false };

    this.clear = this.clear.bind(this);
    this.numbers = this.numbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }
  clear() {
    this.setState({
      result: "0",
      currentValue: "",
      currentFormula: "",
      currentOperator: "",
      equalIsClicked: false });

  }
  numbers(event) {
    if (this.state.currentValue[0] === '0' && event.target.value === "0") {
      this.setState({
        currentValue: this.state.currentValue });

    } else {
      if (this.equalIsClicked && typeof this.state.currentFormula == "number") {
        this.setState({
          result: event.target.value,
          currentFormula: event.target.value,
          currentValue: event.target.value,
          equalIsClicked: false });

      } else if (this.state.equalIsClicked && typeof this.state.currentFormula == "string") {
        this.setState({
          result: event.target.value,
          currentFormula: this.state.currentFormula + event.target.value,
          currentValue: event.target.value,
          equalIsClicked: false });

      } else {
        this.setState({
          result: this.state.currentValue + event.target.value,
          currentValue: this.state.currentValue + event.target.value,
          currentFormula: this.state.currentFormula + event.target.value,
          equalIsClicked: false });

      }
    }
  }
  handleOperators(event) {
    let lastChar = this.state.currentFormula[this.state.currentFormula.length - 1];
    let myRegex = /[+\-*\/]/;

    if (!myRegex.test(lastChar)) {
      this.setState({
        currentFormula: this.state.currentFormula + event.target.value,
        currentValue: "" });

    } else {
      if (lastChar !== "-" && event.target.value === "-") {
        this.setState({
          currentFormula: this.state.currentFormula + event.target.value });

      } else if (event.target.value !== "-" && lastChar === "-") {
        this.setState({
          currentFormula: this.state.currentFormula.slice(0, -2) + event.target.value,
          currentValue: "" });

      } else {
        this.setState({
          currentFormula: this.state.currentFormula.slice(0, -1) + event.target.value });

      }
    }
  }
  addDecimal(event) {
    let lastChar = this.state.currentFormula[this.state.currentFormula.length - 1];
    let myRegex = /[+\-*\/]/;

    if (!this.state.currentValue.includes(".") && this.state.equalIsClicked == false && !myRegex.test(lastChar)) {

      this.setState({
        output: this.state.result + ".",
        currentFormula: this.state.currentFormula + ".",
        currentValue: this.state.currentValue + "." });
    }

  }

  evaluate(event) {
    if (this.state.currentFormula !== "") {

      let output = math.evaluate(this.state.currentFormula);
      this.setState({
        result: output,
        currentFormula: output,
        equalIsClicked: true });

    }
  }
  render() {
    return /*#__PURE__*/(

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "JavaScript Calculator"), /*#__PURE__*/
      React.createElement("main", null, /*#__PURE__*/
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/

      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("div", { id: "currentFormula" }, this.state.currentFormula, " "), /*#__PURE__*/
      React.createElement("div", { id: "addDecimal" }, this.state.addDecimal)), /*#__PURE__*/


      React.createElement("div", { id: "button" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clear }, "C"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "seven", onClick: this.numbers, value: "7" }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.numbers, value: "8" }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.numbers, value: "9" }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: this.handleOperators, value: "/" }, "/"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "four", onClick: this.numbers, value: "4" }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.numbers, value: "5" }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.numbers, value: "6" }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: this.handleOperators, value: "*" }, "\u2715"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "one", onClick: this.numbers, value: "1" }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.numbers, value: "2" }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.numbers, value: "3" }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.handleOperators, value: "-" }, "-"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "decimal", onClick: this.addDecimal }, "."), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.numbers, value: "0" }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "equal", onClick: this.evaluate, value: "=" }, "="), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.handleOperators, value: "+" }, "+"))))));







  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));