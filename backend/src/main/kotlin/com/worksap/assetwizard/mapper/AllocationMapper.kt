package com.worksap.assetwizard.mapper

import com.worksap.assetwizard.enities.AllocationEntity
import com.worksap.assetwizard.vo.AllocationDetailDto
import com.worksap.assetwizard.vo.AllocationDto

class AllocationMapper {

    companion object {
        @JvmStatic
        fun allocationEntityToAllocationDtoMapper(allocationsEntity: AllocationEntity): AllocationDto {
            val dto:AllocationDto = AllocationDto(allocationsEntity.allocationId, allocationsEntity.assetId,
                    allocationsEntity.empId, allocationsEntity.startDate, allocationsEntity.endDate,
                    allocationsEntity.allocationDate)
            return dto;
        }

        @JvmStatic
        fun allocationEntityToAllocationDetailDtoMapper(allocationsEntity: AllocationEntity): AllocationDetailDto {
            val dto:AllocationDetailDto = AllocationDetailDto(allocationsEntity.allocationId, AssetMapper.assetEntityToAssetDtoMapper(allocationsEntity.assetsEntity!!),
                    allocationsEntity.empEntity!!.name, allocationsEntity.startDate, allocationsEntity.endDate,
                    allocationsEntity.allocationDate)
            return dto;
        }

        @JvmStatic
        fun allocationDtoToAllocationEntityMapper(allocationDto: AllocationDto): AllocationEntity {
            var entity:AllocationEntity = AllocationEntity(null, allocationDto.assetId, allocationDto.empId,
                    null, null,allocationDto.startDate, allocationDto.endDate,
                    allocationDto.allocationDate)
            return entity;
        }
    }


}