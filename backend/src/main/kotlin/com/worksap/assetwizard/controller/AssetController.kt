package com.worksap.assetwizard.Controller;

import com.worksap.assetwizard.service.AssetsService
import com.worksap.assetwizard.vo.AssetDto
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/assets")
class AssetController(var assetsService: AssetsService) {

    @GetMapping("/")
    fun getAssets(): List<AssetDto> {
        return assetsService.findAllAssets()
    }

    @PostMapping("/")
    fun saveNewAsset(@RequestBody assetDto: AssetDto){
        assetsService.insertAssetInfo(assetDto)
    }
}