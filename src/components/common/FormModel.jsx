import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function FormModel(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const childWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleClose });
    }
    return child;
  });
  return (
    <>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          {childWithProps}
        </Modal>
      </>
    </>
  );
}
