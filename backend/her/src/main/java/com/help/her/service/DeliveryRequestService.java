package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.DeliveryRequest;
import com.help.her.model.Login;
import com.help.her.repository.DeliveryRequestRepository;
import com.help.her.repository.LoginRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryRequestService {

    @Autowired
    private DeliveryRequestRepository deliveryRequestRepository;

    @Autowired
    private LoginRepository loginRepository;

    public DeliveryRequest saveDeliveryRequest(DeliveryRequest deliveryRequest) {
        Login login = loginRepository.findByEmail(deliveryRequest.getEmail());
        
        if (login != null) {
            deliveryRequest.setSenderName(login.getUsername());
            deliveryRequest.setSenderPhone(login.getPhonenumber());
            return deliveryRequestRepository.save(deliveryRequest);
        } else {
            throw new IllegalArgumentException("User not found with email: " + deliveryRequest.getEmail());
        }
    }

    public List<DeliveryRequest> getAllDeliveryRequests() {
        return deliveryRequestRepository.findAll();
    }

    public Optional<DeliveryRequest> getDeliveryRequestById(Long id) {
        return deliveryRequestRepository.findById(id);
    }

    public DeliveryRequest updateDeliveryRequest(Long id, DeliveryRequest deliveryRequest) {
        Optional<DeliveryRequest> existingRequest = deliveryRequestRepository.findById(id);
        if (existingRequest.isPresent()) {
            DeliveryRequest requestToUpdate = existingRequest.get();
            requestToUpdate.setPickupLocation(deliveryRequest.getPickupLocation());
            requestToUpdate.setDestinationLocation(deliveryRequest.getDestinationLocation());
            requestToUpdate.setReceiverName(deliveryRequest.getReceiverName());
            requestToUpdate.setReceiverEmail(deliveryRequest.getReceiverEmail());
            requestToUpdate.setReceiverPhone(deliveryRequest.getReceiverPhone());
            // Update other fields as necessary
            
            return deliveryRequestRepository.save(requestToUpdate);
        } else {
            return null;
        }
    }

    public void deleteDeliveryRequest(Long id) {
        deliveryRequestRepository.deleteById(id);
    }
}
