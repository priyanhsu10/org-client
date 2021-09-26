import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorPrinter from "../common/PrintError";
import { Button, Modal } from "react-bootstrap";
function CreateClass({
  onAdd,
  onUpdate,
  heading,
  onClose,
  existingData,
  mode,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: existingData });
  const onSave = (data) => {
    if (mode === "add") {
      onAdd(data);
      reset();
    } else {
      onUpdate(existingData.id, data);
    }
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSave)}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <fieldset>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="name"
                {...register("name", { required: "name is Required" })}
              />
              {errors.name && <ErrorPrinter message={errors.name.message} />}
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="name"
                {...register("description", { required: "name is Required" })}
              />
              {errors.description && (
                <ErrorPrinter message={errors.description.message} />
              )}
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  {...register("address", { required: "name is Required" })}
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                ></textarea>
                <label>Address</label>
              </div>
              {errors.address && (
                <ErrorPrinter message={errors.address.message} />
              )}
            </div>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            save
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
}

export default CreateClass;
