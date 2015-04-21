'use strict';

import React from 'react';

export default {

  DateComponent(date) {
    if (date instanceof Date) {
      var _date = date;
    } else {
      var _date = new Date(date);
    }
    return (
      <div className="mui-font-style-caption">{_date.getFullYear()} - {_date.getMonth() + 1} - { _date.getDate() }</div>
    );
  }
}
