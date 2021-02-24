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
import { updateCostCenterItem } from "../../redux/actions";
<<<<<<< HEAD
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
=======
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
const costcenterSchema = Yup.object().shape({
  costcenter_name_eng: Yup.string().required(
    "CostCenter name in english is required!"
  ),
  costcenter_name_arab: Yup.string().required(
    "CostCenter name in arabic is required!"
  ),
<<<<<<< HEAD
  costcenter_status: Yup.string().required("CostCenter Status is required!"),
=======
  costcenter_status: Yup.string().required(
    "CostCenter Status is required!"
  ),
  store_cc: Yup.string().required(
    "Store C_C is required!"
  ),
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
});
class EditCostCenterModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateCostCenterItem(values);
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
          <IntlMessages id="costcenter.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            costcenter_name_eng: this.props.endpoint.costcenter_name_eng,
            costcenter_name_arab: this.props.endpoint.costcenter_name_arab,
            costcenter_status: this.props.endpoint.costcenter_status,
            store_cc: this.props.endpoint.store_cc,
          }}
          validationSchema={costcenterSchema}
          onSubmit={this.handleSubmit}
        >
<<<<<<< HEAD
          {({
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
=======
          {({ values, errors, touched }) => (
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.costcenter_name_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.costcenter_name_eng}
                    name="costcenter_name_eng"
                  />
<<<<<<< HEAD
                  {errors.costcenter_name_eng &&
                    touched.costcenter_name_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.costcenter_name_eng}
                      </div>
                    )}
=======
                  {errors.costcenter_name_eng && touched.costcenter_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.costcenter_name_eng}
                    </div>
                  )}
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.costcenter_name_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.costcenter_name_arab}
                    name="costcenter_name_arab"
                  />
<<<<<<< HEAD
                  {errors.costcenter_name_arab &&
                    touched.costcenter_name_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.costcenter_name_arab}
                      </div>
                    )}
                </FormGroup>

                <FormGroup className="error-l-150">
                  <FormikCustomCheckbox
                    id="costcenter_status"
                    name="costcenter_status"
                    value={values.costcenter_status}
                    label={<IntlMessages id="costcenter.costcenter_status" />}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    modal={true}
                  />
                  {errors.costcenter_status && touched.costcenter_status ? (
                    <div className="invalid-feedback d-block">
                      {errors.costcenter_status}
                    </div>
                  ) : null}
                </FormGroup>
              </ModalBody>

=======
                  {errors.costcenter_name_arab && touched.costcenter_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.costcenter_name_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.costcenter_status" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.costcenter_status}
                    name="costcenter_status"
                  />
                  {errors.costcenter_status && touched.costcenter_status && (
                    <div className="invalid-feedback d-block">
                      {errors.costcenter_status}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.store_cc" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.store_cc}
                    name="store_cc"
                  />
                  {errors.store_cc && touched.store_cc && (
                    <div className="invalid-feedback d-block">
                      {errors.store_cc}
                    </div>
                  )}
                </FormGroup>

              </ModalBody>

              
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
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
const mapStateToProps = ({ costcenterApp }) => {
  return {
=======
const mapStateToProps = ({  costcenterApp }) => {
  return {
   
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
    costcenterApp,
  };
};
export default connect(mapStateToProps, {
  updateCostCenterItem,
})(EditCostCenterModal);
