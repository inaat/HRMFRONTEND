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
import { updateSectionItem } from "../../redux/actions";
const sectionSchema = Yup.object().shape({
  section_desc_eng: Yup.string().required(
    "Section Description in english is required!"
  ),
  section_desc_arab: Yup.string().required(
    "Section Description in arabic is required!"
  ),
<<<<<<< HEAD
=======
  exchange_rate: Yup.string().required(
    "Exchange Rate  is required!"
  ),
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
});
class EditSectionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateSectionItem(values);
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
          <IntlMessages id="section.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            section_desc_eng: this.props.endpoint.section_desc_eng,
            section_desc_arab: this.props.endpoint.section_desc_arab,
            exchange_rate: this.props.endpoint.exchange_rate,
          }}
          validationSchema={sectionSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="section.section_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.section_desc_eng}
                    name="section_desc_eng"
                  />
                  {errors.section_desc_eng && touched.section_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.section_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="section.section_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.section_desc_arab}
                    name="section_desc_arab"
                  />
                  {errors.section_desc_arab && touched.section_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.section_desc_arab}
                    </div>
                  )}
                </FormGroup>
<<<<<<< HEAD
=======
                <FormGroup>
                  <Label>
                    <IntlMessages id="section.exchange_rate" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.exchange_rate}
                    name="exchange_rate"
                  />
                  {errors.exchange_rate && touched.exchange_rate && (
                    <div className="invalid-feedback d-block">
                      {errors.exchange_rate}
                    </div>
                  )}
                </FormGroup>
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
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

<<<<<<< HEAD
const mapStateToProps = ({ sectionApp }) => {
  return {
=======
const mapStateToProps = ({  sectionApp }) => {
  return {

>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
    sectionApp,
  };
};
export default connect(mapStateToProps, {
  updateSectionItem,
})(EditSectionModal);
