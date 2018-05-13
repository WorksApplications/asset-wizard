package com.worksap.assetwizard.vo

import java.sql.Timestamp

data class AllocationDto (
        val allocationId:Int?,

        val assetId:Int,

        val empId:String,

        val startDate: Timestamp,

        val endDate:Timestamp?,

        val allocationDate:Timestamp
)