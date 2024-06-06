package com.trick_manager.Trick_API.service;

import com.trick_manager.Trick_API.entity.Trick;
import com.trick_manager.Trick_API.repository.TrickRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrickService {

    @Autowired
    private TrickRepository trickRepository;

    public Trick createTrick(Trick trick) {
        return trickRepository.save(trick);
    }

    public List<Trick> getAllTricks() {
        return trickRepository.findAll();
    }

    public Trick getTrickById(Long id) {
        return trickRepository.findById(id).orElse(null);
    }

    public Trick updateTrick(Long id, Trick trick) {
        trick.setId(id);
        return trickRepository.save(trick);
    }

    public void deleteTrick(Long id) {
        trickRepository.deleteById(id);
    }
}