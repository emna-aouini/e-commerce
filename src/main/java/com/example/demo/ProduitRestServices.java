package com.example.demo;

import com.example.demo.dao.ProduitRepository;
import com.example.demo.entities.Produit;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProduitRestServices {

    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping(value="/listProduits")/*si ne mettez rien c de json*/
    public Page<Produit> listProduits(@RequestParam(defaultValue ="0") int page){
        Page<Produit> all = produitRepository.findAll(PageRequest.of(page, 4));

        return all;
    }

     @GetMapping(value="/listProduits/{id}")
    public Produit listProduits(@PathVariable(name="id") Long id){
        return produitRepository.findById(id).get();
     }

     @PutMapping(value="/listProduits/{id}")
    public Produit update(@PathVariable(name="id") Long id, @RequestBody Produit p){
        p.setId(id);
        return produitRepository.save(p);
     }

     @PostMapping(value="/listProduits")
    public Produit save(@RequestBody Produit p){
        return produitRepository.save(p);
     }

    
}
