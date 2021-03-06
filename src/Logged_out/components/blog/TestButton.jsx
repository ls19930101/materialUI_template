import React, { forwardRef } from "react";

const TestButton = forwardRef((props, ref) => {
  const { children } = props;

  return <button ref={ref}>{children}</button>;
});

export default TestButton;
