package com.help.her.service;

import com.help.her.model.PeriodRequest;
import com.help.her.repository.PeriodRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeriodRequestService {

    @Autowired
    private PeriodRequestRepository periodRequestRepository;

    public PeriodRequest savePeriodRequest(PeriodRequest periodRequest) {
        return periodRequestRepository.save(periodRequest);
    }

    public List<PeriodRequest> getAllPeriodRequests() {
        return periodRequestRepository.findAll();
    }

    public Optional<PeriodRequest> getPeriodRequestById(Long id) {
        return periodRequestRepository.findById(id);
    }

    public void deletePeriodRequest(Long id) {
        periodRequestRepository.deleteById(id);
    }
}
