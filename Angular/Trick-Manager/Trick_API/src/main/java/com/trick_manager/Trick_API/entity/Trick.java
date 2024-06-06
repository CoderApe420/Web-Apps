package com.trick_manager.Trick_API.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "skate_tricks")
public class Trick {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trick_id;

    @Column(nullable = false)
    private String trick_name;

    @Column(nullable = false)
    private String trick_type;

    // Constructors, getters and setters, and other methods...

    // Getters
    public Long getId() {
        return trick_id;
    }

    public String getName() {
        return trick_name;
    }

    public String getType() {
        return trick_type;
    }

    // Setters
    public void setId(Long trick_id) {
        this.trick_id = trick_id;
    }

    public void setName(String trick_name) {
        this.trick_name = trick_name;
    }

    public void setType(String trick_type) {
        this.trick_type = trick_type;
    }

}