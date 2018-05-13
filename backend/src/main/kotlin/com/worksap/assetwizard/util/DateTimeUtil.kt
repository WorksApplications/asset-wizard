package com.worksap.assetwizard.util

import java.util.*
import java.sql.Timestamp

class DateTimeUtil {
    companion object {
        @JvmStatic
        fun getTimestampFromDate(date:Date):Timestamp{
            var cal:Calendar = Calendar.getInstance();
            cal.time = date;
            cal.set(Calendar.MILLISECOND, 0)
            return Timestamp(cal.timeInMillis)
        }
    }
}