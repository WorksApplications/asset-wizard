package com.worksap.assetwizard

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class AssetWizardApplication {
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            SpringApplication.run(AssetWizardApplication::class.java, *args)
        }
    }
}
