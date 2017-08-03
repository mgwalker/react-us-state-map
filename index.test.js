import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import USStateMap from './index.js';

// Jest globals
/* global describe test expect */

describe('USStateMap renders as expected', () => {
  const component = mount(
    <USStateMap />
  );

  test('matches snapsot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('USStateMap raises onClick event correctly', () => {
  const states = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    DC: 'District of Columbia',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersy',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming'
  };

  for (const stateShortName of Object.keys(states)) {
    test(`for ${states[stateShortName]} (${stateShortName})`, () => {
      let stateFromEvent = null;
      const onClickHandler = (e) => {
        stateFromEvent = e;
      };

      const component = mount(
        <USStateMap onClick={onClickHandler} />
      );

      const target = component.find(`.${stateShortName}`);
      target.simulate('click');

      expect(stateFromEvent).toBe(stateShortName);
    });
  }
});
