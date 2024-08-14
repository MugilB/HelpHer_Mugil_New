package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.help.her.model.Feedback;
import com.help.her.service.FeedbackService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitFeedback(@RequestBody Feedback feedback) {
        try {
            Feedback newFeedback = feedbackService.saveFeedback(feedback);
            return ResponseEntity.ok(newFeedback);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllFeedback() {
        try {
            List<Feedback> feedbackList = feedbackService.getAllFeedback();
            return ResponseEntity.ok(feedbackList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        try {
            Optional<Feedback> existingFeedback = feedbackService.getFeedbackById(id);
            if (existingFeedback.isPresent()) {
                Feedback updatedFeedback = feedbackService.updateFeedback(id, feedback);
                return ResponseEntity.ok(updatedFeedback);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFeedback(@PathVariable Long id) {
        try {
            feedbackService.deleteFeedback(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
