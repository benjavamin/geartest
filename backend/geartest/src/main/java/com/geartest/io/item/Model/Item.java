package com.geartest.io.item.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue
    private Long Id;

    @NotBlank
    private String itemName;


    public Item(){
        super();
    }

    public Item(Long Id, String itemName){
        super();
        this.Id = Id;
        this.itemName = itemName;
    }

}
