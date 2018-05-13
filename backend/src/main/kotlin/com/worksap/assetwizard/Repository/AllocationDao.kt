package com.worksap.assetwizard.Repository

import com.worksap.assetwizard.enities.AllocationEntity
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import java.sql.Timestamp

interface AllocationDao : CrudRepository<AllocationEntity, Int> {

    @Query("FROM AllocationEntity as allocation where  allocation.startDate >= ?1")
    fun findAllGreaterThanStartDate(startDate: Timestamp): List<AllocationEntity>
}