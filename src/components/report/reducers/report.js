import date from 'date-and-time';
import {
  REPORT_PRACTITIONER_CLICKED,
  REPORT_PRACTITIONER_LOADED,
  REPORT_PRACTITIONER_CLEAR,
  REPORT_APPOINTMENT_LOADED,
  REPORT_SET_FROM_SELECTED_DATE,
  REPORT_SET_TO_SELECTED_DATE
} from 'constants/action-types';

const now = new Date();

const initialState = {
  selected_practitioner_id: null,
  selected_practitioner: null,
  practitioners: null,
  appointments: null,
  selectedDate: { fromDate: date.addMonths(now, -3), toDate: now }
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
        practitioners: action.payload.practitioners
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
        appointments: action.payload.practitioner.appointments
      };
    case REPORT_SET_FROM_SELECTED_DATE:
      return {
        ...state,
        selectedDate: {
          ...state.selectedDate,
          fromDate: action.payload
        }
      };
    case REPORT_SET_TO_SELECTED_DATE:
      return {
        ...state,
        selectedDate: {
          ...state.selectedDate,
          toDate: action.payload
        }
      };
    default:
      return state;
  }
};
