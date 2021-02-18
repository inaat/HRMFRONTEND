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
import { addPercentageItem } from "../../redux/actions";
const percentageSchema = Yup.object().shape({
  percent_desc_eng: Yup.string().required(
    "Percentage name in english is required!"
  ),
  percent_desc_arab: Yup.string().required(
    "Percentage name in arabic is required!"
  ),
  percent_fr: Yup.string().required(
    "Percentage From is required!"
  ),
  percent_to: Yup.string().required(
    "Percentage To is required!"
  ),
  percent_value: Yup.string().required(
    "Percentage Value is required!"
  ),
});
class AddNewPercentageModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addPercentageItem(values);
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
          <IntlMessages id="percentage.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            percent_desc_eng: "",
            percent_desc_arab: "",
            percent_fr: "",
            percent_to: "",
            percent_value: "",
          }}
          validationSchema={percentageSchema}
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
                    <IntlMessages id="percentage.percent_desc_eng" />
                  </Label>
                  <Field className="form-control" name="percent_desc_eng" />
                  {errors.percent_desc_eng && touched.percent_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_desc_arab" />
                  </Label>
                  <Field className="form-control" name="percent_desc_arab" />
                  {errors.percent_desc_arab && touched.percent_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_desc_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_fr" />
                  </Label>
                  <Field className="form-control" name="percent_fr" />
                  {errors.percent_fr && touched.percent_fr && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_fr}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_to" />
                  </Label>
                  <Field className="form-control" name="percent_to" />
                  {errors.percent_to && touched.percent_to && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_to}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_value" />
                  </Label>
                  <Field className="form-control" name="percent_value" />
                  {errors.percent_value && touched.percent_value && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_value}
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
const mapStateToProps = ({  percentageApp }) => {
  return {
    
    percentageApp,
  };
};
export default connect(mapStateToProps, {
  addPercentageItem,
})(AddNewPercentageModal);
