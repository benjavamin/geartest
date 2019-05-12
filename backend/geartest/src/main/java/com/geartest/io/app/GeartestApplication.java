package com.geartest.io.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.geartest.io.item")
public class GeartestApplication {

	public static void main(String[] args) {
		SpringApplication.run(GeartestApplication.class, args);
	}

}
