package com.worksap.assetwizard.enities

import java.sql.Timestamp
import javax.persistence.*

@Entity
@Table(name="allocations", schema = "public")
data class AllocationEntity(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name="allocation_id")
        val allocationId:Int?,

        @Column(name="asset_id")
        val assetId:Int,

        @Column(name="emp_id")
        val empId:String,

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="asset_id", nullable = true, referencedColumnName = "id", insertable = false, updatable = false)
        val assetsEntity: AssetsEntity?,

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="emp_Id", nullable = true, referencedColumnName="emp_id", insertable = false, updatable = false)
        val empEntity:EmployeeEntity?,

        @Column(name="s_date")
        val startDate:Timestamp,

        @Column(name="e_date")
        val endDate:Timestamp?,

        @Column(name="allocation_date")
        val allocationDate:Timestamp
)