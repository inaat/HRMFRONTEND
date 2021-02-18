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
import { addDeductionItem } from "../../redux/actions";
const deductionSchema = Yup.object().shape({
  deduction_desc_eng: Yup.string().required(
    "Deduction name in english is required!"
  ),
  deduction_desc_arab: Yup.string().required(
    "Deduction name in arabic is required!"
  ),
});
class AddNewDeductionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addDeductionItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal} = this.props;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="deduction.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            deduction_desc_eng: "",
            deduction_desc_arab: "",
          }}
          validationSchema={deductionSchema}
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
                    <IntlMessages id="deduction.deduction_desc_eng" />
                  </Label>
                  <Field className="form-control" name="deduction_desc_eng" />
                  {errors.deduction_desc_eng && touched.deduction_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.deduction_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="deduction.deduction_desc_arab" />
                  </Label>
                  <Field className="form-control" name="deduction_desc_arab" />
                  {errors.deduction_desc_arab && touched.deduction_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.deduction_desc_arab}
                    </div>
                  )}
                </FormGroup>
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
const mapStateToProps = ({deductionApp }) => {
  return {
    deductionApp,
  };
};
export default connect(mapStateToProps, {
  addDeductionItem,
})(AddNewDeductionModal);
