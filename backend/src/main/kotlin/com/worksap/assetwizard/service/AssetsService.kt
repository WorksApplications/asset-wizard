package com.worksap.assetwizard.service

import com.worksap.assetwizard.Repository.AssetsDao
import com.worksap.assetwizard.enities.AssetsEntity
import com.worksap.assetwizard.mapper.AssetMapper
import com.worksap.assetwizard.vo.AssetDto
import org.springframework.stereotype.Service

@Service
class AssetsService(val assetsDao: AssetsDao) {

    fun findAssetById(id: Int):AssetDto {
        val assetEntity: AssetsEntity =  assetsDao.findById(id);
        var assetDto:AssetDto =  AssetMapper.assetEntityToAssetDtoMapper(assetEntity);
        return assetDto;
    }

    fun insertAssetInfo(assetDto:AssetDto): Int {
        val assetEntity:AssetsEntity = AssetMapper.assetDtoToAssetEntityMapper(assetDto);
        val savedAssetEntity = assetsDao.save(assetEntity)
        return savedAssetEntity.id!!;
    }

    fun findAllAssets():List<AssetDto>{
        return assetsDao.findAll().map{it -> AssetMapper.assetEntityToAssetDtoMapper(it)};
    }


}