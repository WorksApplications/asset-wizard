package com.worksap.assetwizard.Controller;

import com.worksap.assetwizard.service.AllocationsService
import com.worksap.assetwizard.vo.AllocationDto
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/allocations")
class AllocationController(var allocationsService: AllocationsService) {


    @PostMapping("/")
    fun saveNewAllocations(@RequestBody allocationDto: AllocationDto){
        allocationsService.makeAllocation(allocationDto)
    }

    @GetMapping("/greaterThanStartDate")
    fun getAllocations(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") startDate:Date){
        allocationsService.getAllocationsInInterval(startDate)
    }

    @GetMapping("/")
    fun getAllAllocations(){

    }
}