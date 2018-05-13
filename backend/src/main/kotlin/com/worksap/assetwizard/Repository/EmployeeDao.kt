package com.worksap.assetwizard.Repository

import com.worksap.assetwizard.enities.AllocationEntity
import com.worksap.assetwizard.enities.AssetsEntity
import com.worksap.assetwizard.enities.EmployeeEntity
import org.springframework.data.repository.CrudRepository

interface EmployeeDao : CrudRepository<EmployeeEntity, Int> {
}