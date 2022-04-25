import React, { useState } from 'react';
import { DateTime } from 'luxon';
export default function DateComponent(props) {
  const date = DateTime.fromSeconds(props.dateTime.dt, {
    zone:
      props.dateTime.timezone / 3600 > 0
        ? `utc+${props.dateTime.timezone / 3600}`
        : `utc${props.dateTime.timezone / 3600}`,
  });

  return (
    <div className="dateTime">
      <p>{date.toLocaleString(DateTime.DATETIME_FULL)}</p>
    </div>
  );
}
