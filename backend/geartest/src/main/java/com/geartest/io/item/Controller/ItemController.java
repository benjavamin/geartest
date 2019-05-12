package com.geartest.io.item.Controller;

import com.geartest.io.item.Exception.ItemNotFoundException;
import com.geartest.io.item.Model.Item;
import com.geartest.io.item.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemController {


    @Autowired
    ItemRepository itemRepository;


    @GetMapping("/items")
    public List<Item> getAllItems(){
        return itemRepository.findAll();
    }

    @GetMapping("/items/{id}")
    public Item getItemById(@PathVariable(value = "id") Long itemId) throws ItemNotFoundException {
        return itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException(itemId));
    }

}
