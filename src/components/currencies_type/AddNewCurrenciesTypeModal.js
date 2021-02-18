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
import { addCurrenciesTypeItem } from "../../redux/actions";
const currenciestypeSchema = Yup.object().shape({
  currencies_name_eng: Yup.string().required(
    "CurrenciesType name in english is required!"
  ),
  currencies_name_arab: Yup.string().required(
    "CurrenciesType name in arabic is required!"
  ),
  exchange_rate: Yup.string().required(
    "Exchange Rate is required!"
  ),
});
class AddNewCurrenciesTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addCurrenciesTypeItem(values);
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
          <IntlMessages id="currenciestypes.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            currencies_name_eng: "",
            currencies_name_arab: "",
            exchange_rate: "",
          }}
          validationSchema={currenciestypeSchema}
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
                    <IntlMessages id="currenciestypes.currencies_name_eng" />
                  </Label>
                  <Field className="form-control" name="currencies_name_eng" />
                  {errors.currencies_name_eng && touched.currencies_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.currencies_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="currenciestypes.currencies_name_arab" />
                  </Label>
                  <Field className="form-control" name="currencies_name_arab" />
                  {errors.currencies_name_arab && touched.currencies_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.currencies_name_arab}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="currenciestypes.exchange_rate" />
                  </Label>
                  <Field className="form-control" name="exchange_rate" />
                  {errors.exchange_rate && touched.exchange_rate && (
                    <div className="invalid-feedback d-block">
                      {errors.exchange_rate}
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
const mapStateToProps = ({  currenciestypeApp }) => {
  return {
    
    currenciestypeApp,
  };
};
export default connect(mapStateToProps, {
  addCurrenciesTypeItem,
})(AddNewCurrenciesTypeModal);
