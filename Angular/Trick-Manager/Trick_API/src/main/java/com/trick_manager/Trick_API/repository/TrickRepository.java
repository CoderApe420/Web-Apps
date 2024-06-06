package com.trick_manager.Trick_API.repository;

import com.trick_manager.Trick_API.entity.Trick;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrickRepository extends JpaRepository<Trick, Long> {

}