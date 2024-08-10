package com.help.her.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class PeriodRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String userEmail;
    private String location;
    private Date requestDate;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }
    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public Date getRequestDate() { return requestDate; }
    public void setRequestDate(Date requestDate) { this.requestDate = requestDate; }
}
