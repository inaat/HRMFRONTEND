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
import { updateDocumenttypeItem } from "../../redux/actions";
const documenttypeSchema = Yup.object().shape({
  document_desc_eng: Yup.string().required("Documenttype name in english is required!"),
  document_desc_arab: Yup.string().required("Documenttype name in arabic is required!"),
});
class EditDocumenttypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateDocumenttypeItem(values);
  }
  
  render() {
    const { modalOpen, toggleModal } = this.props;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-right"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="documenttype.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            country: {
              value: this.props.endpoint.country_id,
              label:
                this.props.endpoint.country_name_eng +
                "/" +
                this.props.endpoint.country_name_arab,
            },
            document_desc_eng: this.props.endpoint.document_desc_eng,
            document_desc_arab: this.props.endpoint.document_desc_arab,
           
          }}
          validationSchema={documenttypeSchema}
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
                    <IntlMessages id="documenttype.document_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.document_desc_eng}
                    name="document_desc_eng"
                  />
                  {errors.document_desc_eng && touched.document_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.document_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="documenttype.document_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.document_desc_arab}
                    name="document_desc_arab"
                  />
                  {errors.document_desc_arab && touched.document_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.document_desc_arab}
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

const mapStateToProps = ({ countryApp, cityApp, religionApp, documenttypeApp }) => {
  return {
    countryApp,
    cityApp,
    religionApp,
    documenttypeApp,
  };
};
export default connect(mapStateToProps, {
  updateDocumenttypeItem,
})(EditDocumenttypeModal);
