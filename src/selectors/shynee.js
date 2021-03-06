import { createSelector } from 'reselect';

export const shyneeInfoSelector = state => state.shynee.info;
export const shyneeSettingsSelector = state => state.shynee.settings;
export const shyneeSettingsPrivacySelector = state => state.shynee.settingsPrivacy;

export const shyneeIsReadySelector = createSelector(
  shyneeSettingsSelector,
  settings => settings.data ? settings.data.isReady : false
);

export const shyneeIdSelector = createSelector(
  shyneeInfoSelector,
  info => info.data ? info.data.id : null
);

export const shyneeCredentialsSelector = createSelector(
  shyneeInfoSelector,
  info => info.data ? { shyneeId: info.data.id, token: info.data.token } : null
);

export const shyneeTokenSelector = createSelector(
  shyneeInfoSelector,
  info => info.data ? info.data.token : null
);
