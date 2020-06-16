    package com.example.demo.dao;

    import org.springframework.security.core.userdetails.UserDetailsService;
    import org.springframework.security.core.userdetails.UsernameNotFoundException;
    import org.springframework.beans.factory.annotation.Autowired;
    import com.example.demo.entities.User;
    import org.springframework.stereotype.Service;

    import java.util.ArrayList;

    @Service
    public class JWTUserDetailsService implements UserDetailsService {
        @Autowired
        private UserRepository userRepository;
        @Override
        public org.springframework.security.core.userdetails.User loadUserByUsername(String email) throws UsernameNotFoundException {
             User appuser=userRepository.findByEmail(email);
             if(appuser==null){
                 throw new UsernameNotFoundException("User not found with username: " + email);
             }
             return new org.springframework.security.core.userdetails.User(appuser.getEmail(),appuser.getPassword(),new ArrayList<>());
        }




    }
