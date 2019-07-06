package com.geartest.io.item.Exception;

public class ItemNotFoundException extends Exception{

    private long ItemId;


    public ItemNotFoundException(long ItemId){
        super(String.format("Item is not found with id : '%s'", ItemId));
    }
}
