package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.Login;
import com.help.her.model.RideRequest;
import com.help.her.repository.LoginRepository;
import com.help.her.repository.RideRequestRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RideRequestService {

    @Autowired
    private RideRequestRepository rideRequestRepository;

    @Autowired
    private LoginRepository loginRepository;

    public RideRequest saveRideRequest(RideRequest rideRequest) {
        Login login = loginRepository.findByEmail(rideRequest.getEmail());
        
        if (login != null) {
            rideRequest.setName(login.getUsername());
            rideRequest.setPhoneNumber(login.getPhonenumber());
            // rideRequest.setEmail(login.getEmail()); // Set email from Login entity
            rideRequest.setRequestDate(new Date());
            return rideRequestRepository.save(rideRequest);
        } else {
            throw new IllegalArgumentException("User not found with email: " + rideRequest.getEmail());
        }
    }

    public List<RideRequest> getAllRideRequests() {
        return rideRequestRepository.findAll();
    }

    public Optional<RideRequest> getRideRequestById(Long id) {
        return rideRequestRepository.findById(id);
    }

    public boolean deleteRideRequest(Long id) {
        Optional<RideRequest> rideRequest = rideRequestRepository.findById(id);
        if (rideRequest.isPresent()) {
            rideRequestRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public RideRequest updateRideRequest(Long id, RideRequest rideRequest) {
        Optional<RideRequest> existingRequest = rideRequestRepository.findById(id);
        if (existingRequest.isPresent()) {
            RideRequest requestToUpdate = existingRequest.get();
            requestToUpdate.setPickupLocation(rideRequest.getPickupLocation());
            requestToUpdate.setDestinationLocation(rideRequest.getDestinationLocation());
            requestToUpdate.setName(rideRequest.getName());
            requestToUpdate.setPhoneNumber(rideRequest.getPhoneNumber());
            requestToUpdate.setEmail(rideRequest.getEmail());
            requestToUpdate.setRequestDate(rideRequest.getRequestDate());
            // Update other fields as necessary
            
            return rideRequestRepository.save(requestToUpdate);
        } else {
            return null;
        }
    }
}
