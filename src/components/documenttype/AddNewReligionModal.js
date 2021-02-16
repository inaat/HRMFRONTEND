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
import { addDocumenttypeItem } from "../../redux/actions";
const documenttypeSchema = Yup.object().shape({
  document_desc_eng: Yup.string().required("Documenttype name in english is required!"),
  document_desc_arab: Yup.string().required("Documenttype name in arabic is required!"),
});
class AddNewDocumenttypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addDocumenttypeItem(values);
    this.props.toggleModal();
  }


  render() {
    const { modalOpen, toggleModal } = this.props;
    const { countryItems } = this.props.countryApp;
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
   
            document_desc_eng: "",
            document_desc_arab: "",
      
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
                  <Field className="form-control" name="document_desc_eng" />
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
                  <Field className="form-control" name="document_desc_arab" />
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
  addDocumenttypeItem,
})(AddNewDocumenttypeModal);
