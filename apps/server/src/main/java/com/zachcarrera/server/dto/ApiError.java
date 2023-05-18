package com.zachcarrera.server.dto;

import java.util.Date;

import org.springframework.http.HttpStatus;

public class ApiError {

    private String message;
    private HttpStatus status;
    private Date timestamp;

    public ApiError(String message, HttpStatus status, Date timestamp) {
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;
    }

    public ApiError(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
        this.timestamp = new Date(System.currentTimeMillis());
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
