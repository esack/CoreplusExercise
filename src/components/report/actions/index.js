import {
  API_REQUEST,
  REPORT_PRACTITIONER_CLICKED,
  REPORT_PRACTITIONER_LOADED,
  REPORT_PRACTITIONER_CLEAR,
  REPORT_APPOINTMENT_LOADED
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

export function loadPractitioner(fromDate, toDate) {
  const count = Math.floor(Math.random() * (300 - 50)) + 50;
  return {
    type: API_REQUEST,
    payload: {
      url: `practitioners.json?key=b4d3dca0&fromDate=${fromDate}&toDate=${toDate}&count=${count}`,
      method: 'get',
      nextActionType: REPORT_PRACTITIONER_LOADED
    }
  };
}

export function loadAppointments(practitionerId) {
  const count = Math.floor(Math.random() * (300 - 50)) + 50;
  return {
    type: API_REQUEST,
    payload: {
      url: `appointments/${practitionerId}.json?key=b4d3dca0&count=${count}`,
      method: 'get',
      nextActionType: REPORT_APPOINTMENT_LOADED
    }
  };
}
