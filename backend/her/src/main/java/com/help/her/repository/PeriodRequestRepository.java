package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.PeriodRequest;

@Repository
public interface PeriodRequestRepository extends JpaRepository<PeriodRequest, Long> {
}
