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
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
import { addEvaluationTypeItem } from "../../redux/actions";
const evaluationtypeSchema = Yup.object().shape({
  evaluation_type_desc_eng: Yup.string().required(
    "EvaluationType name in english is required!"
  ),
  evaluation_type_desc_arab: Yup.string().required(
    "EvaluationType name in arabic is required!"
  ),
});
class AddNewEvaluationTypeModal extends Component {
=======
import { addModificationTypeItem } from "../../redux/actions";
const modificationtypeSchema = Yup.object().shape({
  modification_desc_eng: Yup.string().required(
    "Modification Type Description in english is required!"
  ),
  modification_desc_arab: Yup.string().required(
    "Modification Type Descfiption in arabic is required!"
  ),
});
class AddNewModificationTypeModal extends Component {
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
    this.props.addEvaluationTypeItem(values);
=======
    this.props.addModificationTypeItem(values);
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
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
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
          <IntlMessages id="evaluationtype.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            evaluation_type_desc_eng: "",
            evaluation_type_desc_arab: "",
          }}
          validationSchema={evaluationtypeSchema}
=======
          <IntlMessages id="modificationtypes.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            modification_desc_eng: "",
            modification_desc_arab: "",
          }}
          validationSchema={modificationtypeSchema}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
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
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
                    <IntlMessages id="evaluationtype.evaluation_type_desc_eng" />
                  </Label>
                  <Field className="form-control" name="evaluation_type_desc_eng" />
                  {errors.evaluation_type_desc_eng && touched.evaluation_type_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.evaluation_type_desc_eng}
=======
                    <IntlMessages id="modificationtypes.modification_desc_eng" />
                  </Label>
                  <Field className="form-control" name="modification_desc_eng" />
                  {errors.modification_desc_eng && touched.modification_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_eng}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
                    <IntlMessages id="evaluationtype.evaluation_type_desc_arab" />
                  </Label>
                  <Field className="form-control" name="evaluation_type_desc_arab" />
                  {errors.evaluation_type_desc_arab && touched.evaluation_type_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.evaluation_type_desc_arab}
=======
                    <IntlMessages id="modificationtypes.modification_desc_arab" />
                  </Label>
                  <Field className="form-control" name="modification_desc_arab" />
                  {errors.modification_desc_arab && touched.modification_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_arab}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
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
<<<<<<< HEAD:src/components/evaluationtype/AddNewEvaluationTypeModal.js
const mapStateToProps = ({  evaluationtypeApp }) => {
  return {
    
    evaluationtypeApp,
  };
};
export default connect(mapStateToProps, {
  addEvaluationTypeItem,
})(AddNewEvaluationTypeModal);
=======
const mapStateToProps = ({ modificationtypeApp }) => {
  return {

    modificationtypeApp,
  };
};
export default connect(mapStateToProps, {
  addModificationTypeItem,
})(AddNewModificationTypeModal);
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/modification_type/AddNewModificationTypeModal.js
