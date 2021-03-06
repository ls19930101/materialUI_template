// import React, { useEffect } from "react";

// import { Box } from "@material-ui/core";

// function Blog(props) {
//   const { title, setSelectedMenu } = props;
//   useEffect(() => {
//     setSelectedMenu(title);
//   }, [title, setSelectedMenu]);
//   return (
//     <Box
//       className="lg-p-top"
//       display="flex"
//       justifyContent="center"
//       height="60vh"
//     >
//       <div>blog</div>
//     </Box>
//   );
// }

// export default Blog;

import { Box, debounce } from "@material-ui/core";
import React, { Component, createRef } from "react";

import TestButton from "./TestButton";

Function.prototype.mybind = function (context) {
  console.log(this, [...arguments]);
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  let self = this;
  let args = [...arguments].slice(1);

  //bind概念是创建一个函数副本,此处为原型链继承
  function Fn() {}
  Fn.prototype = this.prototype;

  let bound = function () {
    console.log(...args, ...arguments);
    let res = [...args, ...arguments]; //bind传递的参数和函数调用时传递的参数拼接
    context = this instanceof Fn ? this : context || this;
    return self.apply(context, res);
  };
  //原型链继承
  bound.prototype = new Fn();
  return bound;
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  handleDebounce = (e, string) => {
    // console.log(e, string);
    function test(name, age, gender) {
      console.log(this, name, age, gender);
    }
    const b = {
      name: "li",
      age: 30,
    };
    test.mybind(b, "a", 22)("nv");
  };
  handleThrottle = (e, string) => {
    console.log(e, string);
  };
  render() {
    return (
      <>
        <div className="lg-p-top" tabIndex={1} style={{ height: "100vh" }}>
          <a href="/design.pdf" download="李爽2020作品集.pdf">
            2020设计作品集(年鉴)
          </a>
          <div
            id="test"
            style={{ border: "1px solid #e9e9e9", width: 30, height: 30 }}
          />
          <button onClick={(e) => this.handleDebounce(e, "aaa")}>
            debounce
          </button>
          <button onClick={this.handleDebounce.cancel}>clear debounce</button>
          <button onClick={(e) => this.handleThrottle(e, "bbbb")}>
            throttle
          </button>
          <button onClick={this.handleThrottle.cancel}>clear throttle</button>
        </div>
      </>
    );
  }
}
