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
  CustomInput,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { addSectionItem } from "../../redux/actions";
const sectionSchema = Yup.object().shape({
  section_desc_eng: Yup.string().required(
    "Section name in english is required!"
  ),
  section_desc_arab: Yup.string().required(
    "Section name in arabic is required!"
  ),
<<<<<<< HEAD
=======
  exchange_rate: Yup.string().required(
    "Exchange Rate is required!"
  ),
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
});
class AddNewSectionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addSectionItem(values);
    this.props.toggleModal();
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
          <IntlMessages id="section.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            section_desc_eng: "",
            section_desc_arab: "",
<<<<<<< HEAD
=======
            exchange_rate: "",
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
          }}
          validationSchema={sectionSchema}
          onSubmit={this.handleSubmit}
        >
          {({
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="section.section_desc_eng" />
                  </Label>
                  <Field className="form-control" name="section_desc_eng" />
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
                  <Field className="form-control" name="section_desc_arab" />
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
                  <Field className="form-control" name="exchange_rate" />
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
                  <IntlMessages id="general.save" />
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
  addSectionItem,
})(AddNewSectionModal);
