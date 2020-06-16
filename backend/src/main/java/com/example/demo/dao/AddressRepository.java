    package com.example.demo.dao;

    import com.example.demo.entities.Address;
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface AddressRepository extends JpaRepository<Address,Long> {
    }
