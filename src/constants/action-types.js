export const apiRequestActions = name => ({
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  pending: `${name}_PENDING`
});

export const API_REQUEST = 'API_REQUEST';

export const REPORT_PRACTITIONER_CLICKED = 'REPORT_PRACTITIONER_CLICKED';
export const REPORT_PRACTITIONER_CLEAR = 'REPORT_PRACTITIONER_CLEAR';
export const REPORT_PRACTITIONER_LOADED = apiRequestActions(
  'REPORT_PRACTITIONER_LOADED'
);
export const REPORT_APPOINTMENT_LOADED = apiRequestActions(
  'REPORT_APPOINTMENT_LOADED'
);
