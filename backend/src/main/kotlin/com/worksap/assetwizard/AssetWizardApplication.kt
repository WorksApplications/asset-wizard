package com.worksap.assetwizard

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc


// Entry point
@EnableAutoConfiguration
@Configuration
@ComponentScan("com.worksap.assetwizard.controller, com.worksap.assetwizard.service, com.worksap.assetwizard.Repository")
class AssetWizardApplication

fun main(args: Array<String>) {
    SpringApplication.run(AssetWizardApplication::class.java, *args)
}
