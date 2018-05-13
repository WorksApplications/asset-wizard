package com.worksap.assetwizard.vo

import java.sql.Timestamp

data class AllocationDetailDto (
        val allocationId:Int?,

        val asset:AssetDto,

        val empName:String,

        val startDate: Timestamp,

        val endDate: Timestamp?,

        val allocationDate: Timestamp
)