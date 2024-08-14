package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.RoomBooking;
import com.help.her.model.Login;
import com.help.her.repository.RoomBookingRepository;
import com.help.her.repository.LoginRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RoomBookingService {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    @Autowired
    private LoginRepository loginRepository;

    public RoomBooking saveBooking(RoomBooking roomBooking) {
        Login login = loginRepository.findByEmail(roomBooking.getEmail());
        
        if (login != null) {
            roomBooking.setName(login.getUsername());
            roomBooking.setPhoneNumber(login.getPhonenumber());
            roomBooking.setCreatedDate(new Date());
            return roomBookingRepository.save(roomBooking);
        } else {
            throw new IllegalArgumentException("User not found with email: " + roomBooking.getEmail());
        }
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
