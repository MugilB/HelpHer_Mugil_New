package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.help.her.model.PeriodRequest;
import com.help.her.service.PeriodRequestService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/period-requests")
@CrossOrigin(origins = "http://localhost:3000")
public class PeriodRequestController {

    @Autowired
    private PeriodRequestService periodRequestService;

    @PostMapping("/request")
    public ResponseEntity<?> requestPeriodSupport(@RequestBody PeriodRequest periodRequest) {
        try {
            PeriodRequest newRequest = periodRequestService.savePeriodRequest(periodRequest);
            return ResponseEntity.ok(newRequest);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllPeriodRequests() {
        try {
            List<PeriodRequest> requestList = periodRequestService.getAllPeriodRequests();
            return ResponseEntity.ok(requestList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPeriodRequestById(@PathVariable Long id) {
        try {
            Optional<PeriodRequest> periodRequest = periodRequestService.getPeriodRequestById(id);
            return periodRequest.map(ResponseEntity::ok)
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePeriodRequest(@PathVariable Long id, @RequestBody PeriodRequest periodRequest) {
        try {
            Optional<PeriodRequest> existingRequest = periodRequestService.getPeriodRequestById(id);
            if (existingRequest.isPresent()) {
                periodRequest.setId(id);
                PeriodRequest updatedRequest = periodRequestService.savePeriodRequest(periodRequest);
                return ResponseEntity.ok(updatedRequest);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePeriodRequest(@PathVariable Long id) {
        try {
            Optional<PeriodRequest> periodRequest = periodRequestService.getPeriodRequestById(id);
            if (periodRequest.isPresent()) {
                periodRequestService.deletePeriodRequest(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
