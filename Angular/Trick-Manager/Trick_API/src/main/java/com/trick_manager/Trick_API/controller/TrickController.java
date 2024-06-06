package com.trick_manager.Trick_API.controller;

import com.trick_manager.Trick_API.entity.Trick;
import com.trick_manager.Trick_API.service.TrickService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tricks")
public class TrickController {

    @Autowired
    private TrickService trickService;

    @PostMapping
    public Trick createTrick(@RequestBody Trick trick) {
        return trickService.createTrick(trick);
    }

    @GetMapping
    public List<Trick> getAllTricks() {
        return trickService.getAllTricks();
    }

    @GetMapping("/{id}")
    public Trick getTrickById(@PathVariable Long id) {
        return trickService.getTrickById(id);
    }

    @PutMapping("/{id}")
    public Trick updateTrick(@PathVariable Long id, @RequestBody Trick trick) {
        return trickService.updateTrick(id, trick);
    }

    @DeleteMapping("/{id}")
    public void deleteTrick(@PathVariable Long id) {
        trickService.deleteTrick(id);
    }
}