import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorPrinter from "../common/PrintError";
import { Button, Modal } from "react-bootstrap";
function SubjectForm({
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
                {...register("description", {
                  required: "Description is Required",
                })}
              />
              {errors.name && <ErrorPrinter message={errors.name.message} />}
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

export default SubjectForm;
