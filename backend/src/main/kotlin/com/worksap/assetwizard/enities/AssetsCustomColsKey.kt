package com.worksap.assetwizard.enities

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Embeddable
import javax.persistence.FetchType
import javax.persistence.ManyToOne

@Embeddable
data class AssetsCustomColsKey(

        @ManyToOne(fetch= FetchType.LAZY)
        val asset:AssetsEntity?,

        @Column(name="col_header")
        val colHeader:String,

        @Column(name="col_value")
        val colValue:String
):Serializable