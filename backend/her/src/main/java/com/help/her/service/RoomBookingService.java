package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.help.her.model.RoomBooking;
import com.help.her.repository.RoomBookingRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RoomBookingService {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public RoomBooking saveBooking(RoomBooking roomBooking) {
        roomBooking.setCreatedDate(new Date());
        return roomBookingRepository.save(roomBooking);
    }

    public List<RoomBooking> getAllBookings() {
        return roomBookingRepository.findAll();
    }

    public Optional<RoomBooking> getBookingById(Long id) {
        return roomBookingRepository.findById(id);
    }

    public void deleteBooking(Long id) {
        roomBookingRepository.deleteById(id);
    }
}
