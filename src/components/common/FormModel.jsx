import React from "react";
import { Modal } from "react-bootstrap";

export default function FormModel(props) {
  const childWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props });
    }
    return child;
  });
  return (
    <>
      <>
        <Modal
          show={props.show}
          onHide={props.onClose}
          backdrop="static"
          keyboard={false}
        >
          {childWithProps}
        </Modal>
      </>
    </>
  );
}
