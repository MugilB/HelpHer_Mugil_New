package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.PeriodRequest;
import com.help.her.model.Login;
import com.help.her.repository.PeriodRequestRepository;
import com.help.her.repository.LoginRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PeriodRequestService {

    @Autowired
    private PeriodRequestRepository periodRequestRepository;

    @Autowired
    private LoginRepository loginRepository;

    public PeriodRequest savePeriodRequest(PeriodRequest periodRequest) {
        Login login = loginRepository.findByEmail(periodRequest.getEmail());
        
        if (login != null) {
            periodRequest.setName(login.getUsername()); // Assuming the name is stored in `firstName`
            periodRequest.setPhoneNumber(login.getPhonenumber()); // Assuming `phone` is the field name in the Login model
            periodRequest.setRequestDate(new Date()); // Assuming `phone` is the field name in the Login model
            return periodRequestRepository.save(periodRequest);
        } else {
            throw new IllegalArgumentException("User not found with email: " + periodRequest.getEmail());
        }
    }

    public List<PeriodRequest> getAllPeriodRequests() {
        return periodRequestRepository.findAll();
    }

    public Optional<PeriodRequest> getPeriodRequestById(Long id) {
        return periodRequestRepository.findById(id);
    }

    public PeriodRequest updatePeriodRequest(Long id, PeriodRequest periodRequest) {
        Optional<PeriodRequest> existingRequest = periodRequestRepository.findById(id);
        if (existingRequest.isPresent()) {
            PeriodRequest requestToUpdate = existingRequest.get();
            
            // Updating fields
            requestToUpdate.setLocation(periodRequest.getLocation());
            requestToUpdate.setRequestDate(periodRequest.getRequestDate());
            
            Login login = loginRepository.findByEmail(periodRequest.getEmail());
            if (login != null) {
                requestToUpdate.setName(login.getUsername());
                requestToUpdate.setPhoneNumber(login.getPhonenumber());
            } else {
                throw new IllegalArgumentException("User not found with email: " + periodRequest.getEmail());
            }
            
            return periodRequestRepository.save(requestToUpdate);
        } else {
            return null;
        }
    }

    public void deletePeriodRequest(Long id) {
        periodRequestRepository.deleteById(id);
    }
}
