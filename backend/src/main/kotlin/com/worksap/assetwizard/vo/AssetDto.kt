package com.worksap.assetwizard.vo

import java.math.BigDecimal
import java.sql.Timestamp

data class AssetDto constructor(var id:Int,
                                var code:String,
                                var name:String,
                                var brand:String?,
                                var invoiceDate:Timestamp?,
                                var price:BigDecimal?,
                                var currency:String?,
                                var invoiceNumber:String?,
                                var customFieldData:List<AssetCustomColsDto>?
                                )