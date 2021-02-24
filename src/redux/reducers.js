import { combineReducers } from "redux";
import authUser from "./auth/reducer";

import settings from "./settings/reducer";
import menu from "./menu/reducer";


import religionApp from "./religion/reducer";
import deductionApp from "./deduction/reducer";
import modificationtypeApp from "./modification_type/reducer";
import currenciestypeApp from "./currencies_type/reducer";
import sectionApp from "./section/reducer";
import costcenterApp from "./costcenter/reducer";
import percentageApp from "./percentage/reducer";

<<<<<<< HEAD
import evaluationcompentenciesApp from "./evaluationcompentencies/reducer";
import educationTrainingTypeApp from "./educationtrainingtype/reducer";
import documenttypeApp from "./documenttype/reducer";

import beneficiary_typeApp from "./beneficiary_type/reducer";
import leavevacationtypeApp from "./leave_vacation_type/reducer";
import positiondesignationApp from "./position_designation/reducer";
import sponsorApp from "./sponsor/reducer";
import earningsbenefitsApp from "./earningsbenefits/reducer";

import deductionApp from "./deduction/reducer";
import modificationtypeApp from "./modification_type/reducer";
import currenciestypeApp from "./currencies_type/reducer";
import sectionApp from "./section/reducer";
import costcenterApp from "./costcenter/reducer";
import percentageApp from "./percentage/reducer";

import evaluationtypeApp from "./evaluationtype/reducer";
import sessionApp from "./session/reducer";
import companyscheduleApp from "./companyschedule/reducer";
import gosisubscriptionApp from "./gosisubscription/reducer";

=======
// import documenttypeApp from "./documenttype/reducer";
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
const reducers = combineReducers({
  authUser,
  menu,
  settings,
  religionApp,
<<<<<<< HEAD
  evaluationcompentenciesApp,
  educationTrainingTypeApp,
  documenttypeApp,
  beneficiary_typeApp,
  leavevacationtypeApp,
  positiondesignationApp,
  sponsorApp,
  earningsbenefitsApp,
=======
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
  deductionApp,
  modificationtypeApp,
  currenciestypeApp,
  sectionApp,
  costcenterApp,
  percentageApp,
<<<<<<< HEAD
  evaluationtypeApp,
  sessionApp,
  companyscheduleApp,
  gosisubscriptionApp,
=======

  // documenttypeApp,
>>>>>>> 8cc52ae9c904d845c89cf2caecba6273662488dd
});

export default reducers;
