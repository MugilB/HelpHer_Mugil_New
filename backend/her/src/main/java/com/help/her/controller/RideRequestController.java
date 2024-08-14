package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.help.her.model.RideRequest;
import com.help.her.service.RideRequestService;

import java.util.List;

@RestController
@RequestMapping("/api/ride-requests")
@CrossOrigin(origins = "http://localhost:3000")
public class RideRequestController {

    @Autowired
    private RideRequestService rideRequestService;

    @PostMapping("/request")
    public ResponseEntity<?> requestRide(@RequestBody RideRequest rideRequest) {
        try {
            RideRequest newRequest = rideRequestService.saveRideRequest(rideRequest);
            return ResponseEntity.ok(newRequest);
        } 
        
        catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllRideRequests() {
        try {
            List<RideRequest> requestList = rideRequestService.getAllRideRequests();
            return ResponseEntity.ok(requestList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRideRequest(@PathVariable Long id) {
        try {
            boolean isDeleted = rideRequestService.deleteRideRequest(id);
            if (isDeleted) {
                return ResponseEntity.ok("Ride request deleted successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ride request not found.");
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRideRequest(@PathVariable Long id, @RequestBody RideRequest rideRequest) {
        try {
            RideRequest updatedRequest = rideRequestService.updateRideRequest(id, rideRequest);
            if (updatedRequest != null) {
                return ResponseEntity.ok(updatedRequest);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ride request not found.");
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
