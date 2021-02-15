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
import { getCountryList, getCityList } from "../../../redux/actions";
import AddNewCountryModal from "../../../components/country/AddNewCountryModal";
import DataTable from "../../../components/country/Datatable";
import CityDataTable from "../../../components/city/Datatable";
import AddNewCityModal from "../../../components/city/AddNewCityModal";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownSplitOpen: false,
      countrymodalOpen: false,
      citymodalOpen: false,
      activeTab: "2",
      displayOptionsIsOpen: false,
    };
  }
  toggle = (tab) => {
    if (this.activeTab !== tab) this.setState({ activeTab: tab });
  };
  componentDidMount() {
    this.props.getCountryList();
    this.props.getCityList();
  }

  toggleModal = () => {
    this.setState({
      countrymodalOpen: !this.state.countrymodalOpen,
    });
  };
  citytoggleModal = () => {
    this.setState({
      citymodalOpen: !this.state.citymodalOpen,
    });
  };
  render() {
    const { countryItems, loading, error } = this.props.countryApp;
    const { cityItems, cityloading, cityerror } = this.props.cityApp;

    const { countrymodalOpen, citymodalOpen } = this.state;
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
                <IntlMessages id="country.countries"></IntlMessages>
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "2",

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
                City
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "3",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                })}
                onClick={() => {
                  this.toggle("3");
                }}
                to="#"
              >
                Tab 3
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "4",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                })}
                onClick={() => {
                  this.toggle("4");
                }}
                to="#"
              >
                Tab 4
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "5",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                })}
                onClick={() => {
                  this.toggle("5");
                }}
                to="#"
              >
                Tab 5
              </NavLink>
            </div>
          </Colxx>
          <Colxx xxs="12" xs="12" md="10" lg="10">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="1">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="country.nationality_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.toggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {error ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {error}
                    </div>
                  ) : (
                    [
                      loading ? (
                        <DataTable item={countryItems} key="1" />
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
                  <IntlMessages id="country.nationality_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.citytoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {cityerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {cityerror}
                    </div>
                  ) : (
                    [
                      cityloading ? (
                        <CityDataTable item={cityItems} key="1" />
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

        <AddNewCountryModal
          toggleModal={this.toggleModal}
          modalOpen={countrymodalOpen}
        />
        <AddNewCityModal
          toggleModal={this.citytoggleModal}
          modalOpen={citymodalOpen}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ countryApp, cityApp }) => {
  return {
    countryApp,
    cityApp,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    getCountryList,
    getCityList,
  })(Master)
);
