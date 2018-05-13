package com.worksap.assetwizard.enities

import java.io.Serializable
import java.math.BigDecimal
import java.sql.Timestamp
import javax.persistence.*

@Entity
@Table(name="assets", schema = "public")
data class AssetsEntity (

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id:Int?,

    @Column(name="name")
    val name:String,

    @Column(name="code")
    val code:String,

    @Column(name="brand")
    val brand:String,

    @Column(name="invoice_date")
    val invoiceDate: Timestamp,

    @Column(name="price")
    val price: BigDecimal,

    @Column(name="currency")
    val currency:String,

    @Column(name="invoice_number")
    val invoiceNo:String,

    @OneToMany(fetch = FetchType.LAZY, cascade = [CascadeType.ALL], mappedBy = "id.asset")
    val customCols:MutableList<AssetsCustomColsEntity>? = mutableListOf()

):Serializable{
    fun addCustomColumns(customColumn : AssetsCustomColsKey){
        this.customCols!!.add(AssetsCustomColsEntity(AssetsCustomColsKey(
                this, customColumn.colHeader, customColumn.colValue
        )))
    }
}
