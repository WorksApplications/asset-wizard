package com.worksap.assetwizard.service

import com.worksap.assetwizard.Repository.AllocationDao
import com.worksap.assetwizard.Repository.AssetsDao
import com.worksap.assetwizard.Repository.EmployeeDao
import com.worksap.assetwizard.enities.AllocationEntity
import com.worksap.assetwizard.enities.AssetsEntity
import com.worksap.assetwizard.mapper.AllocationMapper
import com.worksap.assetwizard.mapper.AssetMapper
import com.worksap.assetwizard.util.DateTimeUtil
import com.worksap.assetwizard.vo.AllocationDetailDto
import com.worksap.assetwizard.vo.AllocationDto
import org.springframework.stereotype.Service
import java.sql.Timestamp
import java.util.*

@Service
class AllocationsService(val assetsDao: AssetsDao, val employeeDao: EmployeeDao, val allocationDao: AllocationDao) {

    fun makeAllocation(allocationDto:AllocationDto):Int {
        var allocationEntity:AllocationEntity = AllocationMapper.allocationDtoToAllocationEntityMapper(allocationDto);
        var generatedAllocationId:Int? = allocationDao.save(allocationEntity).allocationId;
        return generatedAllocationId!!;
    }

    fun getAllocationsInInterval(userStartDate:Date):List<AllocationDetailDto> {
        var userStartDateTimestamp:Timestamp = DateTimeUtil.getTimestampFromDate(userStartDate)

        var allocationDtoList:List<AllocationEntity> = allocationDao.findAllGreaterThanStartDate(userStartDateTimestamp)
        var allocationDetailDtoList: List<AllocationDetailDto> = allocationDtoList.map { allocationEntity ->
            AllocationMapper.allocationEntityToAllocationDetailDtoMapper(allocationEntity)}
        return allocationDetailDtoList;
    }

//    fun getAllocations():List<AllocationDetailDto> {
//        var userStartDateTimestamp:Timestamp = DateTimeUtil.getTimestampFromDate(userStartDate)
//
//        var allocationDtoList:List<AllocationEntity> = allocationDao.findAllGreaterThanStartDate(userStartDateTimestamp)
//        var allocationDetailDtoList: List<AllocationDetailDto> = allocationDtoList.map { allocationEntity ->
//            AllocationMapper.allocationEntityToAllocationDetailDtoMapper(allocationEntity)}
//        return allocationDetailDtoList;
//    }


}