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
<<<<<<< HEAD
=======
  Col,
  Row,
  Input,
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
<<<<<<< HEAD
import { addCurrenciesTypeItem } from "../../redux/actions";
const currencies_typeschema = Yup.object().shape({
  currency_name_eng: Yup.string().required(
    "CurrenciesType name in english is required!"
  ),
  currency_name_arab: Yup.string().required(
    "CurrenciesType name in arabic is required!"
  ),
  exchange_rate: Yup.string().required("Exchange Rate is required!"),
=======
<<<<<<<< HEAD:src/components/currencies_type/AddNewCurrenciesTypeModal.js
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
========
import { updateDocumenttypeItem } from "../../redux/actions";
const documenttypeSchema = Yup.object().shape({
  document_desc_eng: Yup.string().required(
    "Documenttype name in english is required!"
  ),
  document_desc_arab: Yup.string().required(
    "Documenttype name in arabic is required!"
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/EditDocumenttypeModal.js
  ),
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
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
<<<<<<< HEAD
          <IntlMessages id="currencies_types.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            currency_name_eng: "",
            currency_name_arab: "",
            exchange_rate: "",
          }}
          validationSchema={currencies_typeschema}
=======
<<<<<<<< HEAD:src/components/currencies_type/AddNewCurrenciesTypeModal.js
          <IntlMessages id="currenciestypes.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            currencies_name_eng: "",
            currencies_name_arab: "",
            exchange_rate: "",
========
          <IntlMessages id="documenttypes.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            document_desc_eng: this.props.endpoint.document_desc_eng,
            document_desc_arab: this.props.endpoint.document_desc_arab,
            renew_flag: this.props.endpoint.renew_flag,
            is_company: this.props.endpoint.is_company,
            hijriflag: this.props.endpoint.hijriflag,
            substitution: this.props.endpoint.substitution,
            days_to_expire: this.props.endpoint.days_to_expire,
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/EditDocumenttypeModal.js
          }}
          validationSchema={currenciestypeSchema}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
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
<<<<<<< HEAD
                <FormGroup>
                  <Label>
                    <IntlMessages id="currencies_types.currency_name_eng" />
                  </Label>
                  <Field className="form-control" name="currency_name_eng" />
                  {errors.currency_name_eng && touched.currency_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.currency_name_eng}
=======
<<<<<<<< HEAD:src/components/currencies_type/AddNewCurrenciesTypeModal.js
                <FormGroup>
                  <Label>
                    <IntlMessages id="currenciestypes.currencies_name_eng" />
                  </Label>
                  <Field className="form-control" name="currencies_name_eng" />
                  {errors.currencies_name_eng && touched.currencies_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.currencies_name_eng}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
<<<<<<< HEAD
                    <IntlMessages id="currencies_types.currency_name_arab" />
                  </Label>
                  <Field className="form-control" name="currency_name_arab" />
                  {errors.currency_name_arab && touched.currency_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.currency_name_arab}
=======
                    <IntlMessages id="currenciestypes.currencies_name_arab" />
                  </Label>
                  <Field className="form-control" name="currencies_name_arab" />
                  {errors.currencies_name_arab && touched.currencies_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.currencies_name_arab}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
<<<<<<< HEAD
                    <IntlMessages id="currencies_types.exchange_rate" />
                  </Label>
                  <Field
                    className="form-control"
                    name="exchange_rate"
                    type="number"
                    min="0"
                    step="1"
                  />
                  {errors.exchange_rate && touched.exchange_rate && (
                    <div className="invalid-feedback d-block">
                      {errors.exchange_rate}
=======
                    <IntlMessages id="currenciestypes.exchange_rate" />
                  </Label>
                  <Field className="form-control" name="exchange_rate" />
                  {errors.exchange_rate && touched.exchange_rate && (
                    <div className="invalid-feedback d-block">
                      {errors.exchange_rate}
========
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="documenttypes.document_desc_eng" />
                      </Label>
                      <Field
                        className="form-control"
                        name="document_desc_eng"
                      />
                      {errors.document_desc_eng &&
                        touched.document_desc_eng && (
                          <div className="invalid-feedback d-block">
                            {errors.document_desc_eng}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="documenttypes.document_desc_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="document_desc_arab"
                      />
                      {errors.document_desc_arab &&
                        touched.document_desc_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.document_desc_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="renew_flag"
                        name="renew_flag"
                        value={values.renew_flag}
                        label={<IntlMessages id="documenttypes.renew_flag" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.renew_flag && touched.renew_flag ? (
                        <div className="invalid-feedback d-block">
                          {errors.renew_flag}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="is_company"
                        name="is_company"
                        value={values.is_company}
                        label={<IntlMessages id="documenttypes.is_company" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.is_company && touched.is_company ? (
                        <div className="invalid-feedback d-block">
                          {errors.is_company}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="hijriflag"
                        name="hijriflag"
                        value={values.hijriflag}
                        label={<IntlMessages id="documenttypes.hijriflag" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.hijriflag && touched.hijriflag ? (
                        <div className="invalid-feedback d-block">
                          {errors.hijriflag}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="substitution"
                        name="substitution"
                        value={values.substitution}
                        label={<IntlMessages id="documenttypes.substitution" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.substitution && touched.substitution ? (
                        <div className="invalid-feedback d-block">
                          {errors.substitution}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>
                    <IntlMessages id="documenttypes.days_to_expire" />
                  </Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="days_to_expire"
                    min="0"
                    step="1"
                    value={values.days_to_expire}
                  />
                  {errors.days_to_expire && touched.days_to_expire && (
                    <div className="invalid-feedback d-block">
                      {errors.days_to_expire}
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/EditDocumenttypeModal.js
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                    </div>
                  )}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggleModal}>
                  <IntlMessages id="general.cancel" />
                </Button>
                <Button color="primary" type="submit">
<<<<<<< HEAD
                  <IntlMessages id="general.save" />
=======
                  <IntlMessages id="general.update" />
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
const mapStateToProps = ({ currenciestypeApp }) => {
  return {
    currenciestypeApp,
=======
<<<<<<<< HEAD:src/components/currencies_type/AddNewCurrenciesTypeModal.js
const mapStateToProps = ({  currenciestypeApp }) => {
  return {
    
    currenciestypeApp,
========

const mapStateToProps = ({ documenttypeApp }) => {
  return {
    documenttypeApp,
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/EditDocumenttypeModal.js
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
  };
};
export default connect(mapStateToProps, {
  addCurrenciesTypeItem,
})(AddNewCurrenciesTypeModal);
