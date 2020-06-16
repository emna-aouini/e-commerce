package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import com.example.demo.entities.Address;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor @ToString

public class User implements Serializable {
    @Id

    private String email;
    private String nom;
    private String prenom;
    private String password;
   // @JoinColumn(name = "email")
   @JsonManagedReference
   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
            private List<Address> adress ;






    public User(String username) {

        this.email = username;

    }
}
