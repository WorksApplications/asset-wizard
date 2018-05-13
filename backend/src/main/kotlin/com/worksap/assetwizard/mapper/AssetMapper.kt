package com.worksap.assetwizard.mapper

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.worksap.assetwizard.enities.AssetsCustomColsEntity
import com.worksap.assetwizard.enities.AssetsCustomColsKey
import com.worksap.assetwizard.enities.AssetsEntity
import com.worksap.assetwizard.vo.AssetCustomColsDto
import com.worksap.assetwizard.vo.AssetDto

class AssetMapper {

    companion object {
        @JvmStatic
        fun assetEntityToAssetDtoMapper(assetsEntity: AssetsEntity): AssetDto {

            val assetCols:List<AssetCustomColsDto>? = assetsEntity.customCols?.map { entity ->
                AssetCustomColsDto(entity.id.colHeader, entity.id.colValue)
            }

            val dto:AssetDto = AssetDto(assetsEntity.id!!, assetsEntity.code, assetsEntity.name, assetsEntity.brand,
                    assetsEntity.invoiceDate, assetsEntity.price, assetsEntity.currency,
                    assetsEntity.invoiceNo, assetCols)
            return dto;
        }

        fun assetDtoToAssetEntityMapper(assetDto: AssetDto): AssetsEntity {

            var entity:AssetsEntity = AssetsEntity(null, assetDto.code, assetDto.name, assetDto.brand!!, assetDto.invoiceDate!!,
                    assetDto.price!!, assetDto.currency!!, assetDto.invoiceNumber!!)

            assetDto.customFieldData?.map { dto ->
                entity.addCustomColumns(
                        AssetsCustomColsKey(null, dto.fieldName, dto.fieldValue)
                )

            }
            return entity;
        }
    }


}