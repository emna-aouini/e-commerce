        package com.example.demo.dao;

        import com.example.demo.entities.User;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;
        import org.springframework.web.bind.annotation.CrossOrigin;

        @CrossOrigin(origins="http://localhost:4200")
        @RepositoryRestResource
        public interface UserRepository extends JpaRepository<User,String> {
            User findByEmail(String email);


        }
