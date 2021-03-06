import React, { Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import ActionButton from "./ActionButtons";
import IntlMessages from "../../helpers/IntlMessages";
<<<<<<< HEAD
import { Card } from "reactstrap";
=======
import { Card, CustomInput } from "reactstrap";
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd

import { Colxx } from "../common/CustomBootstrap";

const Datatable = ({ item }) => {
  const config = {
    page_size: 10,
    show_filter: true,
    show_pagination: true,
    pagination: "advance",
  };
  const columns = [
    {
<<<<<<< HEAD
      key: "section_desc_arab",
      text: <IntlMessages id="section.section_desc_arab"></IntlMessages>,
=======
<<<<<<<< HEAD:src/components/section/Datatable.js
      key: "section_desc_arab",
      text: <IntlMessages id="section.section_desc_arab"></IntlMessages>,
========
      key: "document_desc_arab",
      text: <IntlMessages id="documenttypes.document_desc_arab"></IntlMessages>,
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/Datatable.js
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
      sortable: true,
    },

    {
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/section/Datatable.js
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
      key: "section_desc_eng",
      text: <IntlMessages id="section.section_desc_eng"></IntlMessages>,
      sortable: true,
    },
<<<<<<< HEAD

=======
    {
      key: "exchange_rate",
      text: <IntlMessages id="section.exchange_rate"></IntlMessages>,
      sortable: true,
    },
  
  
========
      key: "document_desc_eng",
      text: <IntlMessages id="documenttypes.document_desc_eng"></IntlMessages>,
      sortable: true,
    },
    {
      key: "renew_flag",
      text: <IntlMessages id="documenttypes.renew_flag"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.renew_flag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "is_company",
      text: <IntlMessages id="documenttypes.is_company"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.is_company}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "hijriflag",
      text: <IntlMessages id="documenttypes.hijriflag"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.hijriflag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "days_to_expire",
      text: <IntlMessages id="documenttypes.days_to_expire"></IntlMessages>,
      sortable: true,
    },
    {
      key: "substitution",
      text: <IntlMessages id="documenttypes.substitution"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.substitution}
              readOnly
            />
          </Fragment>
        );
      },
    },
>>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd:src/components/documenttype/Datatable.js
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
