package com.example.demo;


import com.example.demo.dao.AddressRepository;
import com.example.demo.dao.JWTUserDetailsService;
import com.example.demo.dao.UserRepository;
import com.example.demo.entities.Address;
import com.example.demo.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;




import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletResponse;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

@RestController

@CrossOrigin(origins="http://localhost:4200")
public class UserRestServices {
    @Autowired
    private UserRepository userRepository;


    @Autowired

    private UserDetailsService customUserDetailsService;
    @Autowired
    private JWTUserDetailsService jwtUserDetailsService;
    @Autowired
    private AddressRepository addressRepository;






  /*  public User loadUserByUsername(@RequestBody User u) {
        System.out.println(u.getEmail() + "*****" + u.getPassword());
        String email=u.getEmail();
        User user=userRepository.findByEmail(email);
        if(user!=null){
            if(user.getPassword().equals(u.getPassword())){
                return u;
            }else{
                throw new RuntimeException("error password");
            }
        }else{
             throw new RuntimeException("this user don't exist");
        }

       // return userRepository.save(u);


    }*/
    @PostMapping(value = "/register")
    public User saveUser(@RequestBody User u) {
        System.out.println(u.getNom()+"****"+u.getPrenom()+"*****"+u.getEmail() + "*****" + u.getPassword());
        String email=u.getEmail();
        User user=userRepository.findByEmail(email);

        if(user!=null) throw new RuntimeException("this user already exists,Try with an other");

        return userRepository.save(u);


    }

    @PostMapping(value="/authenticate")
    public ResponseEntity<?> authenticate(HttpServletResponse response, @RequestBody User u) throws AuthenticationException {
        String username = u.getEmail();
        String password = u.getPassword();
        User user = userRepository.findByEmail(username);
        if (user == null) {
            return new ResponseEntity("utilisateur inexistant", HttpStatus.BAD_REQUEST);


            ///throw new RuntimeException("utilisateur inexistant");
        }
         else    if (!user.getPassword().equals(password)){
            return new ResponseEntity("mot de passe erroné", HttpStatus.BAD_REQUEST);
                //throw new RuntimeException("mot de passe erroné");
            }
        else  {

            return ResponseEntity.ok(Jwts.builder().setSubject(u.getEmail()).setIssuedAt(new Date())
                    .signWith(SignatureAlgorithm.HS512, "secret").compact());
        }


    }
   /* @PutMapping (value="/user/{id}")
    public User ajouterAdresse(@PathVariable("id") String id ,@RequestBody Address address){

        String street=address.getStreet();
        String city=address.getCity();
        System.out.println(street);
        System.out.println(city);

        User u=userRepository.findByEmail(id);
        System.out.println(u.getAdress());
        u.getAdress().add(new Address(street, city));
        System.out.println(u.getAdress());
        return userRepository.save(u);


    }*/

    @PostMapping(value = "/addAdress")
    public Address saveAddress(@RequestBody Address u) {
     // it will return the object address created exemple: {"parentId": 4,
        //    "street": "12 Monastir",
        //    "city": "sahloul"}

       // if(user!=null) throw new RuntimeException("this user already exists,Try with an other");

        return  addressRepository.save(u);


    }
   /* @GetMapping(value="/listAddress/{email}")
    public User listAddress(@PathVariable(name="email") String email){

        return userRepository.findByEmail(email);
    }*/

    @GetMapping(value="/findAddress")
    public ResponseEntity<User> getListAddress(@RequestParam("email") String email){
          System.out.println(email);
          User us=userRepository.findByEmail(email);

          return ResponseEntity.ok().body(us);

    }



}
