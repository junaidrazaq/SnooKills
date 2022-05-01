/**
 * Redux async action creator
 */
export const actionGenerator = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAIL: `${actionName}_FAIL`,
  COMPLETE: `${actionName}_COMPLETE`,
  actionName,
});

/**
 * Normalize response from api for redux store
 */
export const normalize = (list, id = 'id') => {
  const byId = {};

  const allIds = [];

  for (let i = 0; i < list.length; i++) {
    byId[list[i][id]] = list[i];
    allIds.push(list[i][id]);
  }

  return {
    byId,
    allIds,
  };
};

/**
 * Add an element in state
 */
export const add = (state, payload, invert) => {
  if (state.byId[payload.id]) {
    return {
      ...state,
      byId: {
        ...state.byId,
        [payload.id]: {
          ...state.byId[payload.id],
          ...payload,
        },
      },
    };
  }

  let byId = {...state.byId};

  let allIds = [...state.allIds];

  if (invert) {
    allIds.unshift(payload.id);
  } else {
    allIds.push(payload.id);
  }

  byId[payload.id] = payload;

  return {
    ...state,
    byId,
    allIds,
  };
};

/**
 * Update an element in state
 */
export const update = (state, payload, invert) => {
  let byId = {...state.byId};
  let allIds = [...state.allIds];

  if (!byId[payload.id]) {
    byId[payload.id] = payload;

    if (invert) {
      allIds.unshift(payload.id);
    } else {
      allIds.push(payload.id);
    }
  } else {
    byId[payload.id] = {...byId[payload.id], ...payload};
  }

  return {
    ...state,
    byId,
    allIds,
  };
};

/**
 * Remove an element from state
 */
export const remove = (state, payload) => {
  if (state.byId[payload.id]) {
    let byId = {};
    const allIds = [];

    state.allIds.forEach(id => {
      if (id !== payload.id) {
        allIds.push(id);

        byId[id] = state.byId[id];
      }
    });

    return {
      ...state,
      byId,
      allIds,
    };
  }

  return state;
};
