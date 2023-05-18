package com.zachcarrera.server.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class NewAssignment {

    @NotBlank(message = "Assignment Name is required")
    private String name;

    @NotNull(message = "Due Date is required")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "Due Date cannot be in the past")
    private Date dueDate;

    @NotNull(message = "Priority is required")
    @Min(value = 1, message = "Priority must be 1 or greater")
    @Max(value = 5, message = "Priority cannot be larger than 5")
    private Integer priority;

    @NotNull(message = "Course must be selected")
    private Long courseId;

    public NewAssignment() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

}
