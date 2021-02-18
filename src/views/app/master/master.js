import React, { Component, Fragment } from "react";
import { Row, TabContent, TabPane } from "reactstrap";
import { NavLink } from "react-router-dom";
import Buttons from "../../../components/common/Button";
import classnames from "classnames";
import { injectIntl } from "react-intl";


import { connect } from "react-redux";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import {
 
  getReligionList,
  getDeductionList,
  getModificationTypeList,
  getCurrenciesTypeList,
  getSectionList,
  getCostCenterList,
  getPercentageList,
} from "../../../redux/actions";

// Religion
import ReligionDataTable from "../../../components/religion/Datatable";
import AddNewReligionModal from "../../../components/religion/AddNewReligionModal";
// deducation
import DeductionDataTable from "../../../components/deduction/Datatable";
import AddNewDeductionModal from "../../../components/deduction/AddNewDeductionModal";
//  modification type
import ModificationTypeDataTable from "../../../components/modification_type/Datatable";
import AddNewModificationTypeModal from "../../../components/modification_type/AddNewModificationTypeModal";
//  currencies type
import CurrenciesTypeDataTable from "../../../components/currencies_type/Datatable";
import AddNewCurrenciesTypeModal from "../../../components/currencies_type/AddNewCurrenciesTypeModal";
//  section
import SectionDataTable from "../../../components/section/Datatable";
import AddNewSectionModal from "../../../components/section/AddNewSectionModal";
//  cost center
import CostCenterDataTable from "../../../components/costcenter/Datatable";
import AddNewCostCenterModal from "../../../components/costcenter/AddNewCostCenterModal";
//  cost center
import PercentageDataTable from "../../../components/percentage/Datatable";
import AddNewPercentageModal from "../../../components/percentage/AddNewPercentageModal";


class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownSplitOpen: false,
      displayOptionsIsOpen: false,
      activeTab: "7",
      
      religionmodalOpen: false,
      deductionmodalOpen: false,
      modificationtypemodalOpen: false,
      currenciestypemodalOpen: false,
      sectionmodalOpen: false,
      costcentermodalOpen: false,
      percentagemodalOpen: false,
    };
  }
  toggle = (tab) => {
    if (this.activeTab !== tab) this.setState({ activeTab: tab });
  };
  componentDidMount() {
    this.props.getReligionList();
    this.props.getDeductionList();
    this.props.getModificationTypeList();
    this.props.getCurrenciesTypeList();
    this.props.getSectionList();
    this.props.getCostCenterList();
    this.props.getPercentageList();
  }

  religiontoggleModal = () => {
    this.setState({
      religionmodalOpen: !this.state.religionmodalOpen,
    });
  };

  deductiontoggleModal = () => {
   
    this.setState({
      deductionmodalOpen: !this.state.deductionmodalOpen,
    });
  };
  modificationtypetoggleModal = () => {
    this.setState({
      modificationtypemodalOpen: !this.state.modificationtypemodalOpen,
    });
  };
  currenciestypetoggleModal = () => {
    this.setState({
      currenciestypemodalOpen: !this.state.currenciestypemodalOpen,
    });
  };

  sectiontoggleModal = () => {
    this.setState({
      sectionmodalOpen: !this.state.sectionmodalOpen,
    });
  };
  costcentertoggleModal = () => {
    this.setState({
      costcentermodalOpen: !this.state.costcentermodalOpen,
    });
  };
  percentagetoggleModal = () => {
    this.setState({
      percentagemodalOpen: !this.state.percentagemodalOpen,
    });
  };

  render() {

    const {religionItems,religionloading,religionerror,} = this.props.religionApp;
  const {deductionItems,deductionloading,deductionerror,} = this.props.deductionApp;
  const {modificationtypeItems,modificationtypeloading, modificationtypeerror,} = this.props.modificationtypeApp;
  const {currenciestypeItems,currenciestypeloading, currenciestypeerror,} = this.props.currenciestypeApp;
  const {sectionItems,sectionloading, sectionerror,} = this.props.sectionApp;
  const {costcenterItems,costcenterloading, costcentererror,} = this.props.costcenterApp;
  const {percentageItems,percentageloading, percentageerror,} = this.props.percentageApp;
  const {religionmodalOpen,deductionmodalOpen,modificationtypemodalOpen,currenciestypemodalOpen,sectionmodalOpen, costcentermodalOpen, percentagemodalOpen} = this.state;
 
  return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.masters" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <div className="row">
          <Colxx xxs="12" xs="12" md="2" lg="2">
            <div
              className=" card  fade shadow p-2  show nav flex-column nav-pills nav-pills-custom "
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
             
              <NavLink
                className={classnames({
                  active: this.activeTab === "1",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "1",
                })}
                onClick={() => {
                  this.toggle("1");
                }}
                to="#"
              >
                <IntlMessages id="religion.religion" />
              </NavLink>

           

              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "2",
                })}
                onClick={() => {
                  this.toggle("2");
                }}
                to="#"
              >
               Deduction
              </NavLink>

              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "3",
                })}
                onClick={() => {
                  this.toggle("3");
                }}
                to="#"
              >
                Modification/Type
              </NavLink>

              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "4",
                })}
                onClick={() => {
                  this.toggle("4");
                }}
                to="#"
              >
               Currencies/Type
              </NavLink>

              
              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "5",
                })}
                onClick={() => {
                  this.toggle("5");
                }}
                to="#"
              >
               Sections
              </NavLink>

              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "6",
                })}
                onClick={() => {
                  this.toggle("6");
                }}
                to="#"
              >
               Cost Centers
              </NavLink>

              <NavLink
                className={classnames({
                 
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "7",
                })}
                onClick={() => {
                  this.toggle("7");
                }}
                to="#"
              >
              Percentages
              </NavLink>



            </div>
          </Colxx>
          <Colxx xxs="12" xs="12" md="10" lg="10">
            
            

            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="1">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="religion.religion_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.religiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {religionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {religionerror}
                    </div>
                  ) : (
                    [
                      religionloading ? (
                        <ReligionDataTable item={religionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

           
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="2">
                <h4 className="font-italic mb-4">
                <IntlMessages id="deduction.deduction_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.deductiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {deductionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {deductionerror}
                    </div>
                  ) : (
                    [
                      deductionloading ? (
                        <DeductionDataTable item={deductionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="3">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="modificationtypes.modificationtype_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.modificationtypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {modificationtypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {modificationtypeerror}
                    </div>
                  ) : (
                    [
                      modificationtypeloading ? (
                        <ModificationTypeDataTable item={modificationtypeItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>


            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="4">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="currenciestypes.currenciestypes_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.currenciestypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {currenciestypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {currenciestypeerror}
                    </div>
                  ) : (
                    [
                      currenciestypeloading ? (
                        <CurrenciesTypeDataTable item={currenciestypeItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="5">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="section.section_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.sectiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {sectionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {sectionerror}
                    </div>
                  ) : (
                    [
                      sectionloading ? (
                        <SectionDataTable item={sectionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="6">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="costcenter.costcenter_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.costcentertoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {costcentererror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {costcentererror}
                    </div>
                  ) : (
                    [
                      costcenterloading ? (
                        <CostCenterDataTable item={costcenterItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="7">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="percentage.percentage_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.percentagetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {percentageerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {percentageerror}
                    </div>
                  ) : (
                    [
                      percentageloading ? (
                        <PercentageDataTable item={percentageItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

          </Colxx>
        </div>
        <AddNewDeductionModal
          toggleModal={this.deductiontoggleModal}
          modalOpen={deductionmodalOpen}
        />
       
        <AddNewReligionModal
          toggleModal={this.religiontoggleModal}
          modalOpen={religionmodalOpen}
        />
        
  
        <AddNewModificationTypeModal
          toggleModal={this.modificationtypetoggleModal}
          modalOpen={modificationtypemodalOpen}
        />
       <AddNewCurrenciesTypeModal
          toggleModal={this.currenciestypetoggleModal}
          modalOpen={currenciestypemodalOpen}
        />
       <AddNewSectionModal
          toggleModal={this.sectiontoggleModal}
          modalOpen={sectionmodalOpen}
        />
         <AddNewCostCenterModal
          toggleModal={this.costcentertoggleModal}
          modalOpen={costcentermodalOpen}
        />
         <AddNewPercentageModal
          toggleModal={this.percentagetoggleModal}
          modalOpen={percentagemodalOpen}
        />
        
        
      </Fragment>
    );
  }
}
const mapStateToProps = ({
  
  religionApp,
  deductionApp,
  modificationtypeApp,
  currenciestypeApp,
  sectionApp,
  costcenterApp,
  percentageApp,
}) => {
  return {
    
    religionApp,
    deductionApp,
    modificationtypeApp,
    currenciestypeApp,
    sectionApp,
    costcenterApp,
    percentageApp,
    
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    
    getReligionList,
    getDeductionList,
    getModificationTypeList,
    getCurrenciesTypeList,
    getSectionList,
    getCostCenterList,
    getPercentageList,
  })(Master)
);
