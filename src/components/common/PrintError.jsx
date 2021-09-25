import React from "react";
const ErrorPrinter = ({ message }) => {
  return (
    <div id="validationServerUsernameFeedback" className="alert alert-danger">
      {message}
    </div>
  );
};

export default ErrorPrinter;
