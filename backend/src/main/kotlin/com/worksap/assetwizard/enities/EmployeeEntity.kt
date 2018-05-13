package com.worksap.assetwizard.enities

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name="employees", schema = "public")
data class EmployeeEntity (
        @Id
        @Column(name="emp_id")
        val empId:String,

        @Column(name="name")
        val name:String,

        @Column(name="email_id")
        val emailId:String,

        @Column(name="is_employed")
        val is_employed:Boolean
)