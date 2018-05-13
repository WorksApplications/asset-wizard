package com.worksap.assetwizard.Repository

import com.worksap.assetwizard.enities.AssetsEntity
import org.springframework.data.repository.CrudRepository

interface AssetsDao : CrudRepository<AssetsEntity, Int> {
    fun findById(id: Int):AssetsEntity
}