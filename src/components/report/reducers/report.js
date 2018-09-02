import {
  REPORT_PRACTITIONER_CLICKED,
  REPORT_PRACTITIONER_LOADED,
  REPORT_PRACTITIONER_CLEAR,
  REPORT_APPOINTMENT_LOADED
} from 'constants/action-types';

const initialState = {
  selected_practitioner_id: null,
  selected_practitioner: null,
  practitioners: null,
  appointments: null
};

export const report = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_PRACTITIONER_CLICKED:
      return {
        ...state,
        selected_practitioner_id: action.payload.id,
        selected_practitioner: action.payload,
        appointments: null
      };
    case REPORT_PRACTITIONER_LOADED.success:
      return {
        ...state,
        practitioners: action.payload
      };
    case REPORT_PRACTITIONER_CLEAR:
      return {
        ...state,
        selected_practitioner_id: null,
        selected_practitioner: null,
        practitioners: null,
        appointments: null
      };
    case REPORT_APPOINTMENT_LOADED.success:
      return {
        ...state,
        appointments: action.payload
      };
    default:
      return state;
  }
};
