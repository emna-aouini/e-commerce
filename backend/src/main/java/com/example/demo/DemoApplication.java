package com.example.demo;

import com.example.demo.dao.ProduitRepository;
import com.example.demo.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication  implements CommandLineRunner {
    @Autowired
   private ProduitRepository produitRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
	   // produitRepository.save(new Produit(null,"http://localhost:8080/images/photo3.jpg","ordinateur","livre de java qui decrit les concept",300,6));

        produitRepository.findAll().forEach(p->{
            System.out.println(p.toString());
        });

    }
}
