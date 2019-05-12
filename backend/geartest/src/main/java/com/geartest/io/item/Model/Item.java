package com.geartest.io.item.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name = "items")
public class Item implements Serializable {

    @Id
    @GeneratedValue
    private Long Id;

    private String itemName;

    private int itemLevel;

    private int primaryId;

    private int secondaryId;

    private int minorId;

    public Item(){
        super();
    }

    public Item(long Id, String itemName, int itemLevel, int primaryId, int secondaryId, int minorId) {
        super();
        this.Id = Id;
        this.itemName = itemName;
        this.itemLevel = itemLevel;
        this.primaryId = primaryId;
        this.secondaryId = secondaryId;
        this.minorId = minorId;
    }

}
