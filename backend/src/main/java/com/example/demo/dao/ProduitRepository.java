    package com.example.demo.dao;

    import com.example.demo.entities.Produit;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.repository.query.Param;
    import org.springframework.data.rest.core.annotation.RepositoryRestResource;
    import org.springframework.data.rest.core.annotation.RestResource;
    import org.springframework.web.bind.annotation.CrossOrigin;

    import java.util.List;
    //@CrossOrigin("*")
    @CrossOrigin(origins="http://localhost:4200")
    @RepositoryRestResource
    public interface ProduitRepository  extends JpaRepository<Produit,Long> {
    @RestResource(path="/byTitre")
             public List<Produit> findByTitreContains(@Param("mc") String des);
    }
