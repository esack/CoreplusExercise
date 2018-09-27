import {
  API_REQUEST,
  REPORT_PRACTITIONER_CLICKED,
  REPORT_PRACTITIONER_LOADED,
  REPORT_PRACTITIONER_CLEAR,
  REPORT_APPOINTMENT_LOADED,
  REPORT_SET_FROM_SELECTED_DATE,
  REPORT_SET_TO_SELECTED_DATE
} from 'constants/action-types';

export function onPractitionerClicked(practitione) {
  return {
    type: REPORT_PRACTITIONER_CLICKED,
    payload: practitione
  };
}

export function clearData() {
  return {
    type: REPORT_PRACTITIONER_CLEAR
  };
}

export function setFromSelectedDate(date) {
  return {
    type: REPORT_SET_FROM_SELECTED_DATE,
    payload: date
  };
}

export function setToSelectedDate(date) {
  return {
    type: REPORT_SET_TO_SELECTED_DATE,
    payload: date
  };
}

export function loadPractitioner(
  fromUnixTimeMilliseconds,
  toUnixTimeMilliseconds
) {
  return {
    type: API_REQUEST,
    payload: {
      url: `Practitioners?fromUnixTimeMilliseconds=${fromUnixTimeMilliseconds}&toUnixTimeMilliseconds=${toUnixTimeMilliseconds}`,
      method: 'get',
      nextActionType: REPORT_PRACTITIONER_LOADED
    }
  };
}

export function loadAppointments(
  practitionerId,
  fromUnixTimeMilliseconds,
  toUnixTimeMilliseconds
) {
  debugger;
  return {
    type: API_REQUEST,
    payload: {
      url: `Practitioners/${practitionerId}?fromUnixTimeMilliseconds=${fromUnixTimeMilliseconds}&toUnixTimeMilliseconds=${toUnixTimeMilliseconds}`,
      method: 'get',
      nextActionType: REPORT_APPOINTMENT_LOADED
    }
  };
}
