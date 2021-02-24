import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IntlMessages from "../../helpers/IntlMessages";
import { updateModificationTypeItem } from "../../redux/actions";
const modificationtypeSchema = Yup.object().shape({
  modification_desc_eng: Yup.string().required(
    "Modification/Type Description in english is required!"
  ),
  modification_desc_arab: Yup.string().required(
    "Modification/Type Description in arabic is required!"
  ),
<<<<<<< HEAD
=======
  flag: Yup.string().required(
    "Flag Text Box  required!"
  ),
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
});
class EditModificationTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateModificationTypeItem(values);
  }

  render() {
    const { modalOpen, toggleModal } = this.props;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="modificationtypes.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            modification_desc_eng: this.props.endpoint.modification_desc_eng,
            modification_desc_arab: this.props.endpoint.modification_desc_arab,
<<<<<<< HEAD
=======
            flag: this.props.endpoint.flag,
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
          }}
          validationSchema={modificationtypeSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="modificationtypes.modification_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.modification_desc_eng}
                    name="modification_desc_eng"
                  />
<<<<<<< HEAD
                  {errors.modification_desc_eng &&
                    touched.modification_desc_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.modification_desc_eng}
                      </div>
                    )}
=======
                  {errors.modification_desc_eng && touched.modification_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_eng}
                    </div>
                  )}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="modificationtypes.modification_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.modification_desc_arab}
                    name="modification_desc_arab"
                  />
<<<<<<< HEAD
                  {errors.modification_desc_arab &&
                    touched.modification_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.modification_desc_arab}
                      </div>
                    )}
=======
                  {errors.modification_desc_arab && touched.modification_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_arab}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="modificationtypes.flag" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.flag}
                    name="flag"
                  />
                  {errors.flag && touched.flag && (
                    <div className="invalid-feedback d-block">
                      {errors.flag}
                    </div>
                  )}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggleModal}>
                  <IntlMessages id="general.cancel" />
                </Button>
                <Button color="primary" type="submit">
<<<<<<< HEAD
                  <IntlMessages id="general.update" />
=======
                  <IntlMessages id="general.save" />
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = ({ modificationtypeApp }) => {
  return {
<<<<<<< HEAD
=======
  
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
    modificationtypeApp,
  };
};
export default connect(mapStateToProps, {
  updateModificationTypeItem,
})(EditModificationTypeModal);
