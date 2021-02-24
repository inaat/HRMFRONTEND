import React, { Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import ActionButton from "./ActionButtons";
import IntlMessages from "../../helpers/IntlMessages";
import { Card } from "reactstrap";

import { Colxx } from "../common/CustomBootstrap";

const Datatable = ({ item }) => {
  const config = {
    page_size: 10,
    show_filter: true,
    show_pagination: true,
    pagination: "advance",
  };
  const columns = [
<<<<<<< HEAD
    {
      key: "currency_name_arab",
      text: (
        <IntlMessages id="currencies_types.currency_name_arab"></IntlMessages>
      ),
=======
   
    {
      key: "currency_name_arab",
      text: <IntlMessages id="currenciestypes.currencies_name_arab"></IntlMessages>,
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
      sortable: true,
    },
    {
      key: "currency_name_eng",
<<<<<<< HEAD
      text: (
        <IntlMessages id="currencies_types.currency_name_eng"></IntlMessages>
      ),
=======
      text: <IntlMessages id="currenciestypes.currencies_name_eng"></IntlMessages>,
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
      sortable: true,
    },
    {
      key: "exchange_rate",
<<<<<<< HEAD
      text: <IntlMessages id="currencies_types.exchange_rate"></IntlMessages>,
      sortable: true,
    },

=======
      text: <IntlMessages id="currenciestypes.exchange_rate"></IntlMessages>,
      sortable: true,
    },
  
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
    {
      key: "action",
      text: "Action",
      cell: (record, index) => {
        return (
          <Fragment>
            <ActionButton id={record.id} endpoint={record} />
          </Fragment>
        );
      },
    },
  ];

  return (
    <Colxx xxs="12">
      <Card className="card d-flex mb-3">
        <ReactDatatable config={config} records={item} columns={columns} />
      </Card>
    </Colxx>
  );
};

export default React.memo(Datatable);
