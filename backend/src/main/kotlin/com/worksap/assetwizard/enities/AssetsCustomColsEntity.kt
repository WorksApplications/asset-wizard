package com.worksap.assetwizard.enities

import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name="assets_custom_cols", schema = "public")
data class AssetsCustomColsEntity(

        @EmbeddedId
        val id:AssetsCustomColsKey
)